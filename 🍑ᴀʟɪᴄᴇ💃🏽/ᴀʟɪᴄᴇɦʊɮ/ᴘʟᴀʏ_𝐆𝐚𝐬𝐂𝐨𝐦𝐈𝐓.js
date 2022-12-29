// 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const {
  ᴀʟɪᴄᴇȶʊɮɛ,
  notneeded,
  ᴀʟɪᴄᴇᴠᴏʟ,
  ᴀʟɪᴄᴇʄɨӼ,
  ᴀʟɪᴄᴇքʊʀɢɛʀ,
} = require("../ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ");
const https = require("https");
const ytdl = require("ytdl-core");
const { play } = require("./ᴀʟɪᴄᴇքʟǟʏɛʀ_𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(ᴀʟɪᴄᴇȶʊɮɛ);
const ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ = /^.*(list=)([^#\&\?]*).*/gi;
const scdl = require(`soundcloud-downloader`).default;
const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
const not_needed_scl = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
const ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ =
  /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
const { MessageEmbed } = require("../𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
module.exports = {
  name: "play",
  cooldown: 3,
  async execute(message, args) {
    try {
      if (
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "play") &&
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
              .setDescription(`**Ú§êr >** ${message.author}

**Category:** \`🔱Gascomit\`
**Channel:** \`ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀʟɪᴄᴇ** commands.`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      if (ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
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

This link seems to be a playlist link.
Please use **${ᴀʟɪᴄᴇʄɨӼ}list** command for any YouTube playlists..`)
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
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "play") &&
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
        if (channel && args.length) {
          message.react("💃🏽");
          message.react("🍑");
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
${ᴀʟɪᴄᴇʄɨӼ}play **YouTube URL** or **Video Name**`)
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
        const url = args[0];
        const search = args.join(` `);
        const urlValid = ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0]);
        if (!ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0]) && ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
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
                      .setFooter(
                        "𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓"
                      ).setDescription(`**Ú§êr >** ${message.author}

Audio Not Found`)
                  )
                  .catch(console.error)
                  .then((message) => {
                    message.delete({
                      timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
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
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                });
              });
            return;
          }
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

Following url redirection...`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
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
          volume: ᴀʟɪᴄᴇᴠᴏʟ,
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
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
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
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                });
              });
          }
        } else {
          try {
            const results = await youtube.searchVideos(search, 1, {
              part: `snippet`,
            });
            if (!results.length) {
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

Audio Not Found`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
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
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                });
              });
            return;
          }
        }
        if (serverQueue) {
          serverQueue.songs.push(music);
          serverQueue.textChannel
            .send(
              `**ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ**
${music.title}
_has been added to the queue by_
${message.author}`
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
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
                  .setAuthor(`🥴 Warning! ⚠️`)
                  .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                  .setDescription(`**Ú§êr >** ${message.author}

**👍 Joined \`${channel.name}\`
and is 📄 bound to \`#${message.channel.name}\`**`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                });
              });
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`🥴 Warning! ⚠️`)
                  .setTitle("Aքʀɨʟ❣️Mʊֆɨƈ  BY 🔱KrakinzLab™️")
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                  .setDescription(`**Ú§êr >** ${message.author}

**👍 Joined \`${channel.name}\`
and is 📄 bound to \`#${message.channel.name}\`**`)
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

Could not join the channel: *${error}*`)
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
🔰**In telegram group** = https://t.me/Gascomit


**🔺Error Caught🔻**
*${ErrorAlice}*`)
      );
      console.error(ErrorAlice);
    }
  },
};
