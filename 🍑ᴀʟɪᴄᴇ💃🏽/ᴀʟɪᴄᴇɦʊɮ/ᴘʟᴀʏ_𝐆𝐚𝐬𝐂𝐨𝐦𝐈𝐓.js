// ðá´ÊÉªá´á´ðð½by ð GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const {
  á´ÊÉªá´á´È¶ÊÉ®É,
  notneeded,
  á´ÊÉªá´á´á´ á´Ê,
  á´ÊÉªá´á´ÊÉ¨Ó¼,
  á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ,
} = require("../á´ÊÉªá´á´Õ¼ÉÊ/Êá´á´á´á´Ê");
const https = require("https");
const ytdl = require("ytdl-core");
const { play } = require("./á´ÊÉªá´á´ÖÊÇÊÉÊ_ððð¬ðð¨ð¦ðð");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(á´ÊÉªá´á´È¶ÊÉ®É);
const É¢á´á´Êá´á´á´á´Êá´ÊÉªê±á´ = /^.*(list=)([^#\&\?]*).*/gi;
const scdl = require(`soundcloud-downloader`).default;
const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
const not_needed_scl = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
const É¢á´á´Êá´á´á´á´Êá´ê±ÉªÉ´É¢Êá´ =
  /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
const { MessageEmbed } = require("../ððð¬ðð¨ð¦ðð/src");
module.exports = {
  name: "play",
  cooldown: 3,
  async execute(message, args) {
    try {
      if (
        message.content.startsWith(á´ÊÉªá´á´ÊÉ¨Ó¼ + "play") &&
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
              .setDescription(`**ÃÂ§Ãªr >** ${message.author}

**Category:** \`ð±Gascomit\`
**Channel:** \`á´ÊÉªá´á´â£ï¸ÊÊÖÉ¨Æ\`
â ï¸Please use ðð» for any **á´ÊÉªá´á´** commands.`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
            });
          });
        return;
      }
      if (É¢á´á´Êá´á´á´á´Êá´ÊÉªê±á´.test(args[0])) {
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

This link seems to be a playlist link.
Please use **${á´ÊÉªá´á´ÊÉ¨Ó¼}list** command for any YouTube playlists..`)
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
        message.content.startsWith(á´ÊÉªá´á´ÊÉ¨Ó¼ + "play") &&
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
        if (channel && args.length) {
          message.react("ðð½");
          message.react("ð");
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

*Searching and Playing in less then* **3secs!**`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: 8000,
              });
            });
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
${á´ÊÉªá´á´ÊÉ¨Ó¼}play **YouTube URL** or **Video Name**`)
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
        const url = args[0];
        const search = args.join(` `);
        const urlValid = É¢á´á´Êá´á´á´á´Êá´ê±ÉªÉ´É¢Êá´.test(args[0]);
        if (!É¢á´á´Êá´á´á´á´Êá´ê±ÉªÉ´É¢Êá´.test(args[0]) && É¢á´á´Êá´á´á´á´Êá´ÊÉªê±á´.test(args[0])) {
          message.client.commands.get(`list`).execute(message, args);
          return;
        } else if (scdl.isValidUrl(url) && url.includes(`/sets/`)) {
          return;
        }
        if (not_needed_scl.test(url)) {
          try {
            https.get(url, function (res) {
              if (res.statusCode == `302`) {
                message.client.commands
                  .get(`play`)
                  .execute(message, [res.headers.location]);
                return;
              } else {
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
                      .setFooter(
                        "ðð¨ð©ð²ð«ð¢ð ð¡ð­(ð)2023 ððð¬ðð¨ð¦ðð"
                      ).setDescription(`**ÃÂ§Ãªr >** ${message.author}

Audio Not Found`)
                  )
                  .catch(console.error)
                  .then((message) => {
                    message.delete({
                      timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
                    });
                  });
                return;
              }
            });
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

Following url redirection...`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
              });
            });
          return;
        }
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
        let songInfo = null;
        let music = null;
        if (urlValid) {
          try {
            songInfo = await ytdl.getInfo(url);
            music = {
              title: songInfo.videoDetails.title,
              url: songInfo.videoDetails.video_url,
              duration: songInfo.videoDetails.lengthSeconds,
            };
          } catch (error) {
            console.error(error);
            return message.channel
              .send(error.message)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
                });
              });
          }
        } else if (scRegex.test(url)) {
          try {
            const trackInfo = await scdl.getInfo(url, notneeded);
            music = {
              title: trackInfo.title,
              url: trackInfo.permalink_url,
              duration: Math.ceil(trackInfo.duration / 1000),
            };
          } catch (error) {
            console.error(error);
            return message.channel
              .send(error.message)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
                });
              });
          }
        } else {
          try {
            const results = await youtube.searchVideos(search, 1, {
              part: `snippet`,
            });
            if (!results.length) {
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

Audio Not Found`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
                  });
                });
              return;
            }
            songInfo = await ytdl.getInfo(results[0].url);
            music = {
              title: songInfo.videoDetails.title,
              url: songInfo.videoDetails.video_url,
              duration: songInfo.videoDetails.lengthSeconds,
            };
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
        if (serverQueue) {
          serverQueue.songs.push(music);
          serverQueue.textChannel
            .send(
              `**á´ÊÉªá´á´â£ï¸ÊÊÖÉ¨Æ**
${music.title}
_has been added to the queue by_
${message.author}`
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
              });
            });
          return;
        }
        queueConstruct.songs.push(music);
        message.client.queue.set(message.guild.id, queueConstruct);
        try {
          try {
            queueConstruct.connection = await channel.join();
            message.author
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`ð¥´ Warning! â ï¸`)
                  .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
                  .setDescription(`**ÃÂ§Ãªr >** ${message.author}

**ð Joined \`${channel.name}\`
and is ð bound to \`#${message.channel.name}\`**`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
                });
              });
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`ð¥´ Warning! â ï¸`)
                  .setTitle("AÖÊÉ¨Êâ£ï¸MÊÖÉ¨Æ  BY ð±KrakinzLabâ¢ï¸")
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
                  .setDescription(`**ÃÂ§Ãªr >** ${message.author}

**ð Joined \`${channel.name}\`
and is ð bound to \`#${message.channel.name}\`**`)
              )
              .catch(console.error);
          } catch (e) {
            console.log(e.message);
          }
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
                .setDescription(`**ÃÂ§Ãªr >** ${message.author}

Could not join the channel: *${error}*`)
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
ð°**In telegram group** = https://t.me/Gascomit


**ðºError Caughtð»**
*${ErrorAlice}*`)
      );
      console.error(ErrorAlice);
    }
  },
};
