// ðá´ÊÉªá´á´ðð½by ð GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const {
  á´ÊÉªá´á´È¶ÊÉ®É,
  notneeded,
  á´ÊÉªá´á´á´á´x,
  á´ÊÉªá´á´á´ á´Ê,
  á´ÊÉªá´á´ÊÉ¨Ó¼,
  á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ,
} = require("../á´ÊÉªá´á´Õ¼ÉÊ/Êá´á´á´á´Ê");
const { play } = require("./á´ÊÉªá´á´ÖÊÇÊÉÊ_ððð¬ðð¨ð¦ðð");
const { MessageEmbed } = require("../ððð¬ðð¨ð¦ðð/src");
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default;
const youtube = new YouTubeAPI(á´ÊÉªá´á´È¶ÊÉ®É);
module.exports = {
  name: "list",
  cooldown: 3,
  async execute(message, args) {
    try {
      if (
        message.content.startsWith(á´ÊÉªá´á´ÊÉ¨Ó¼ + "list") &&
        message.channel.name !== "á´ÊÉªá´á´ðá´á´ê±Éªá´"
      ) {
        message.react("â");
        message.react("ð¥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#FF5F15")
              .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
              .setAuthor(`ð¥´ Warning! â ï¸`)
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
              .setDescription(
                `\n\n
**ÃÂ§Ãªr >** ${message.author}


**Category:** \`ð±GasComIT\`
**Channel:** \`á´ÊÉªá´á´â£ï¸ÊÊÖÉ¨Æ\`
â ï¸Please use ðð» for any **á´ÊÉªá´á´** commands.`
              )
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
            });
          });
        return;
      }

      if (
        message.content.startsWith(á´ÊÉªá´á´ÊÉ¨Ó¼ + "list") &&
        message.channel.name === "á´ÊÉªá´á´ðá´á´ê±Éªá´"
      ) {
        const { channel } = message.member.voice;
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) {
          message.react("â");
          message.react("ð¥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
                .setAuthor(`ð¥´ Warning! â ï¸`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
                .setDescription(`**ÃÂ§Ãªr >** ${message.author}

*You need to* **join** *a voice channel first!*`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
              });
            });
          return;
        }
        if (!args.length) {
          message.react("â");
          message.react("ð¥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
                .setAuthor(`ð¥´ Warning! â ï¸`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
                .setDescription(`**ÃÂ§Ãªr >** ${message.author}

**usage:**
${á´ÊÉªá´á´ÊÉ¨Ó¼}playlist **YouTube Playlist URL** or **Valid Playlist Name**`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
              });
            });
          return;
        }
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has(`CONNECT`)) {
          message.react("â");
          message.react("ð¥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
                .setAuthor(`ð¥´ Warning! â ï¸`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
                .setDescription(`**ÃÂ§Ãªr >** ${message.author}

Cannot connect to voice channel, missing permissions`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
              });
            });
          return;
        }
        if (!permissions.has(`SPEAK`)) {
          message.react("â");
          message.react("ð¥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
                .setAuthor(`ð¥´ Warning! â ï¸`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
                .setDescription(`**ÃÂ§Ãªr >** ${message.author}

I cannot speak in this voice channel, make sure I have the proper permissions!`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
              });
            });
          return;
        }
        if (serverQueue && channel !== message.guild.me.voice.channel) {
          message.react("â");
          message.react("ð¥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
                .setAuthor(`ð¥´ Warning! â ï¸`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
                .setDescription(`**ÃÂ§Ãªr >** ${message.author}

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
              });
            });
          return;
        }
        const search = args.join(` `);
        const pattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
        const url = args[0];
        const urlValid = pattern.test(args[0]);
        const queueConstruct = {
          textChannel: message.channel,
          channel,
          connection: null,
          songs: [],
          loop: false,
          volume: á´ÊÉªá´á´á´ á´Ê,
          muted: false,
          playing: true,
        };
        let playlist = null;
        let videos = [];
        if (urlValid) {
          try {
            playlist = await youtube.getPlaylist(url, { part: `snippet` });
            videos = await playlist.getVideos(á´ÊÉªá´á´á´á´x || 10, {
              part: `snippet`,
            });
          } catch (error) {
            console.error(error);
            message.react("â");
            message.react("ð¥");
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#FF5F15")
                  .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
                  .setAuthor(`ð¥´ Warning! â ï¸`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
                  .setDescription(
                    `\n\n
**ÃÂ§Ãªr >** ${message.author}


Playlist not found`
                  )
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
                });
              });
            return;
          }
        } else if (scdl.isValidUrl(args[0])) {
          if (args[0].includes(`/sets/`)) {
            message.channel.send(
              "**á´ÊÉªá´á´â£ï¸ÊÊÖÉ¨Æ**\nâ Fetching the playlist..."
            );
            playlist = await scdl.getSetInfo(args[0], notneeded);
            videos = playlist.tracks.map((track) => ({
              title: track.title,
              url: track.permalink_url,
              duration: track.duration / 1000,
            }));
          }
        } else {
          try {
            const results = await youtube.searchPlaylists(search, 1, {
              part: `snippet`,
            });
            playlist = results[0];
            videos = await playlist.getVideos(á´ÊÉªá´á´á´á´x, { part: `snippet` });
          } catch (error) {
            console.error(error);
            message.channel
              .send(error.message)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
                });
              });
            return;
          }
        }
        const newSongs = videos
          .filter(
            (video) =>
              video.title != `Private video` && video.title != `Deleted video`
          )
          .map((video) => {
            return (music = {
              title: video.title,
              url: video.url,
              duration: video.durationSeconds,
            });
          });
        serverQueue
          ? serverQueue.songs.push(...newSongs)
          : queueConstruct.songs.push(...newSongs);
        let playlistEmbed = new MessageEmbed()
          .setTitle(`${playlist.title}`)
          .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
          .setDescription(
            newSongs.map((music, index) => `${index + 1}. ${music.title}`)
          )
          .setURL(playlist.url)
          .setColor("#ff0000")
          .setTimestamp();
        if (playlistEmbed.description.length >= 2048)
          playlistEmbed.description =
            playlistEmbed.description.substr(0, 2007) +
            "**á´ÊÉªá´á´â£ï¸ÊÊÖÉ¨Æ**\nPlaylist larger than character limit...";
        message.react("ðð½");
        message.react("ð");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#ff0000")
              .setAuthor(`ð¥´ Warning! â ï¸`)
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
              .setDescription(
                `\n\n
**ÃÂ§Ãªr >** ${message.author}

Added a playlist`
              )
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
            });
          });
        playlistEmbed;
        if (!serverQueue) {
          message.client.queue.set(message.guild.id, queueConstruct);
          try {
            queueConstruct.connection = await channel.join();
            await queueConstruct.connection.voice.setSelfDeaf(true);
            play(queueConstruct.songs[0], message);
          } catch (error) {
            console.error(error);
            message.client.queue.delete(message.guild.id);
            await channel.leave();
            message.react("â");
            message.react("ð¥");
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#FF5F15")
                  .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
                  .setAuthor(`ð¥´ Warning! â ï¸`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
                  .setDescription(
                    `\n\n
**ÃÂ§Ãªr >** ${message.author}

Could not join the channel: *${error}*`
                  )
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
                });
              });
            return;
          }
        }
      }
    } catch (ErrorAlice) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#DB4434")
          .setAuthor("ðºERROR CAUGHTð»")
          .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
          .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
          .setThumbnail("https://i.postimg.cc/sXLzq8k1/Alice.jpg")
          .setDescription(`**á´ÊÉªá´á´â£ï¸ÊÊÖÉ¨Æ** has encountered an error.

Please report to either 
ð°**In Discord channel** = https://discord.gg/xx
or
ð°**In telegram group** = https://t.me/gascomit


**ðºError Caughtð»**
*${ErrorAlice}*`)
      );
      console.error(ErrorAlice);
    }
  },
};
