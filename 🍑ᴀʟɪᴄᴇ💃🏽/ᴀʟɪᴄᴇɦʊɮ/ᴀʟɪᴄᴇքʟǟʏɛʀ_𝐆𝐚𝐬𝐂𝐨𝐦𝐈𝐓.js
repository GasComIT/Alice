// 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const ytdl = require("ytdl-core-discord");
const {
  canModifyQueue,
  ᴀʟɪᴄᴇᴡᴀᴋᴇ,
  ᴀʟɪᴄᴇքʊʀɢɛʀ,
} = require("../ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ");
const { MessageEmbed } = require("../𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
const getVideoId = require("get-video-id");
module.exports = {
  async play(music, message) {
    try {
      const queue = message.client.queue.get(message.guild.id);
      if (!music) {
        setTimeout(function () {
          if (queue.connection.dispatcher && message.guild.me.voice.channel) {
            return;
          }
          queue.channel.leave();
          queue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#ff0000")
                .setAuthor(`🥴 Warning! ⚠️`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                .setDescription(`**ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ has left the voice channel!**`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
              });
            });
        }, ᴀᴘʀɪʟᴡᴀᴋᴇ);
        const queue = message.client.queue.get(message.guild.id);
        message.client.queue.delete(message.guild.id);
        return;
      }
      let musicfetcher = null;
      let musicfetchergenre = music.url.includes("youtube.com")
        ? "opus"
        : "ogg/opus";
      try {
        if (music.url.includes("youtube.com")) {
          musicfetcher = await ytdl(music.url, {
            highWaterMark: 1 << 25,
          });
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
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                .setDescription(`**Ú§êr >** ${message.author}
**Only YouTube playing/streaming is allowed**`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
              });
            });
          return;
        }
      } catch (error) {
        if (queue) {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
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
              .setDescription(`**Ú§êr >** ${message.author}
**Error:** 
*${error}*`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      const dispatcher = queue.connection
        .play(musicfetcher, { type: musicfetchergenre })
        .on("finish", () => {
          if (collector && !collector.ended) collector.stop();
          queue.connection.removeAllListeners("disconnect");
          if (queue.loop) {
            let lastSong = queue.songs.shift();
            queue.songs.push(lastSong);
            module.exports.play(queue.songs[0], message);
          } else {
            queue.songs.shift();
            module.exports.play(queue.songs[0], message);
          }
        })
        .on("error", (err) => {
          console.error(err);
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        });
      dispatcher.setVolumeLogarithmic(queue.volume / 100);
      try {
        const { id } = getVideoId(`${music.url}`);
        message.react("💃🏽");
        message.react("🍑");
        var AlicePlayingMessage = await queue.textChannel.send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
            .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
            .setDescription(`*💯Direct Streaming from 𝐘𝐨𝐮𝐓𝐮𝐛𝐞*

TƬIƬILΣ🏷**[${music.title}](${music.url})**
RΣQUΣSƬΣD_BY🎂\`${message.author}\``)
        );
        await queue.textChannel
          .send(
            new MessageEmbed().setColor("#ff0000").setDescription(`
*💃🏽•♪•♪𝐏𝐥𝐚𝐲𝐞𝐫-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•🍑*
---------------:lady_beetle:---------------

• ⏭ = **Skip the currently playing music.**
• ⏸ = **Pause/Resume the currently playing music.**
• 🔇 = **Mute/Unmute the currently playing music.**
• 🔊 = **Change volume of currently playing music.**
• 🔁 = **Toggle music loop.**
• ⏺ = **Stops the currently playing music queue.**
`)
          )
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 30000,
            });
          });
        await AlicePlayingMessage.react("⏭");
        await AlicePlayingMessage.react("⏸");
        await AlicePlayingMessage.react("🔇");
        await AlicePlayingMessage.react("🔉");
        await AlicePlayingMessage.react("🔊");
        await AlicePlayingMessage.react("🔁");
        await AlocePlayingMessage.react("⏺");
      } catch (error) {
        console.error(error);
      }
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = AlicePlayingMessage.createReactionCollector(filter, {
        time: music.duration > 0 ? music.duration * 1000 : 600000,
      });
      collector.on("collect", (reaction, user) => {
        if (!queue) {
          return;
        }
        const member = message.guild.member(user);
        switch (reaction.emoji.name) {
          case "⏭":
            queue.playing = true;
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
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
**You need to join a voice channel first!**`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                  });
                });
              return;
            }
            queue.connection.dispatcher.end();
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`🥴 Warning! ⚠️`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                  .setDescription(`**Ú§êr >** ${message.author}
⏩ **Skipped the music**`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                });
              });
            collector.stop();
            break;
          case "⏸":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
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

**You need to join a voice channel first!**`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                  });
                });
              return;
            }
            if (queue.playing) {
              queue.playing = !queue.playing;
              queue.connection.dispatcher.pause(true);
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#ff0000")
                    .setAuthor(`🥴 Warning! ⚠️`)
                    .setURL("https://github.com/GasComIT?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                    .setDescription(`**Ú§êr >** ${message.author}
🚦 **Paused the music.**`)
                )
                .catch(console.error);
            } else {
              queue.playing = !queue.playing;
              queue.connection.dispatcher.resume();
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#ff0000")
                    .setAuthor(`🥴 Warning! ⚠️`)
                    .setURL("https://github.com/GasComIT?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                    .setDescription(`**Ú§êr >** ${message.author}
▶ **Resumed the music!**`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                  });
                });
            }
            break;
          case "🔇":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
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

**You need to join a voice channel first!**`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                  });
                });
              return;
            }
            queue.muted = !queue.muted;
            if (queue.muted) {
              queue.connection.dispatcher.setVolumeLogarithmic(0);
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#ff0000")
                    .setAuthor(`🥴 Warning! ⚠️`)
                    .setURL("https://github.com/GasComIT?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                    .setDescription(`**Ú§êr >** ${message.author}

🔇 Muted the music!`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                  });
                });
            } else {
              queue.connection.dispatcher.setVolumeLogarithmic(
                queue.volume / 100
              );
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#ff0000")
                    .setAuthor(`🥴 Warning! ⚠️`)
                    .setURL("https://github.com/GasComIT?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                    .setDescription(`**Ú§êr >** ${message.author}

🔊 Unmuted the music!`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                  });
                });
            }
            break;
          case "🔉":
            reaction.users.remove(user).catch(console.error);
            if (queue.volume == 0) {
              return;
            }
            if (!canModifyQueue(member)) {
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
            queue.volume = Math.max(queue.volume - 10, 0);
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`🥴 Warning! ⚠️`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                  .setDescription(`**Ú§êr >** ${message.author}

🔉 Decreased the volume, 
Volume now at = **${queue.volume}%**`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                });
              });
            break;
          case "🔊":
            reaction.users.remove(user).catch(console.error);
            if (queue.volume == 100) {
              return;
            }
            if (!canModifyQueue(member)) {
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
            queue.volume = Math.min(queue.volume + 10, 100);
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`🥴 Warning! ⚠️`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                  .setDescription(`**Ú§êr >** ${message.author}

🔊 Increased the volume, the volume is now ${queue.volume}%`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                });
              });
            break;
          case "🔁":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
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
            queue.loop = !queue.loop;
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`🥴 Warning! ⚠️`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
                  .setDescription(`**Ú§êr >** ${message.author}

Loop is now ${queue.loop ? "**Turned On**" : "**Turned Off**"}`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                });
              });
            message.client.queue.delete(message.guild.id);
            break;
          case "⏺":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
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
            queue.songs = [];
            try {
              queue.connection.dispatcher.end();
            } catch (error) {
              console.error(error);
              queue.connection.disconnect();
            }
            collector.stop();
            break;
          default:
            reaction.users.remove(user).catch(console.error);
            break;
        }
      });
      collector.on("end", () => {
        AlicePlayingMessage.reactions.removeAll().catch(console.error);
      });
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
