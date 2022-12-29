// 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const {
  ᴀʟɪᴄᴇȶʊɮɛ,
  notneeded,
  ᴀʟɪᴄᴇᴍᴀx,
  ᴀʟɪᴄᴇᴠᴏʟ,
  ᴀʟɪᴄᴇʄɨӼ,
  ᴀʟɪᴄᴇքʊʀɢɛʀ,
} = require("../ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ");
const { play } = require("./ᴀʟɪᴄᴇքʟǟʏɛʀ_𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓");
const { MessageEmbed } = require("../𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default;
const youtube = new YouTubeAPI(ᴀʟɪᴄᴇȶʊɮɛ);
module.exports = {
  name: "list",
  cooldown: 3,
  async execute(message, args) {
    try {
      if (
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "list") &&
        message.channel.name !== "ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#FF5F15")
              .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
              .setAuthor(`🥴 Warning! ⚠️`)
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
              .setDescription(
                `\n\n
**Ú§êr >** ${message.author}


**Category:** \`🔱GasComIT\`
**Channel:** \`ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀʟɪᴄᴇ** commands.`
              )
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
            });
          });
        return;
      }

      if (
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "list") &&
        message.channel.name === "ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ"
      ) {
        const { channel } = message.member.voice;
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                .setAuthor(`🥴 Warning! ⚠️`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                .setDescription(`**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        if (!args.length) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                .setAuthor(`🥴 Warning! ⚠️`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                .setDescription(`**Ú§êr >** ${message.author}

**usage:**
${ᴀʟɪᴄᴇʄɨӼ}playlist **YouTube Playlist URL** or **Valid Playlist Name**`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has(`CONNECT`)) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                .setAuthor(`🥴 Warning! ⚠️`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                .setDescription(`**Ú§êr >** ${message.author}

Cannot connect to voice channel, missing permissions`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        if (!permissions.has(`SPEAK`)) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                .setAuthor(`🥴 Warning! ⚠️`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                .setDescription(`**Ú§êr >** ${message.author}

I cannot speak in this voice channel, make sure I have the proper permissions!`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        if (serverQueue && channel !== message.guild.me.voice.channel) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                .setAuthor(`🥴 Warning! ⚠️`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                .setDescription(`**Ú§êr >** ${message.author}

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
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
          volume: ᴀʟɪᴄᴇᴠᴏʟ,
          muted: false,
          playing: true,
        };
        let playlist = null;
        let videos = [];
        if (urlValid) {
          try {
            playlist = await youtube.getPlaylist(url, { part: `snippet` });
            videos = await playlist.getVideos(ᴀʟɪᴄᴇᴍᴀx || 10, {
              part: `snippet`,
            });
          } catch (error) {
            console.error(error);
            message.react("❌");
            message.react("🔥");
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#FF5F15")
                  .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                  .setAuthor(`🥴 Warning! ⚠️`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                  .setDescription(
                    `\n\n
**Ú§êr >** ${message.author}


Playlist not found`
                  )
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                });
              });
            return;
          }
        } else if (scdl.isValidUrl(args[0])) {
          if (args[0].includes(`/sets/`)) {
            message.channel.send(
              "**ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ**\n⌛ Fetching the playlist..."
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
            videos = await playlist.getVideos(ᴀʟɪᴄᴇᴍᴀx, { part: `snippet` });
          } catch (error) {
            console.error(error);
            message.channel
              .send(error.message)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
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
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
          .setDescription(
            newSongs.map((music, index) => `${index + 1}. ${music.title}`)
          )
          .setURL(playlist.url)
          .setColor("#ff0000")
          .setTimestamp();
        if (playlistEmbed.description.length >= 2048)
          playlistEmbed.description =
            playlistEmbed.description.substr(0, 2007) +
            "**ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ**\nPlaylist larger than character limit...";
        message.react("💃🏽");
        message.react("🍑");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#ff0000")
              .setAuthor(`🥴 Warning! ⚠️`)
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
              .setDescription(
                `\n\n
**Ú§êr >** ${message.author}

Added a playlist`
              )
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
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
            message.react("❌");
            message.react("🔥");
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#FF5F15")
                  .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                  .setAuthor(`🥴 Warning! ⚠️`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                  .setDescription(
                    `\n\n
**Ú§êr >** ${message.author}

Could not join the channel: *${error}*`
                  )
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
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
          .setAuthor("🔺ERROR CAUGHT🔻")
          .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
          .setThumbnail("https://i.postimg.cc/sXLzq8k1/Alice.jpg")
          .setDescription(`**ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/xx
or
🔰**In telegram group** = https://t.me/gascomit


**🔺Error Caught🔻**
*${ErrorAlice}*`)
      );
      console.error(ErrorAlice);
    }
  },
};
