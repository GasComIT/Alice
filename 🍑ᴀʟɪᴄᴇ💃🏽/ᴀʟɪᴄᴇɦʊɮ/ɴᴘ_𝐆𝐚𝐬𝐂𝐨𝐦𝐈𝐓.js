// 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const getVideoId = require("get-video-id");
const { MessageEmbed } = require("../𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
const { splitBar } = require("string-progressbar");
const { ᴀʟɪᴄᴇʄɨӼ, ᴀʟɪᴄᴇքʊʀɢɛʀ } = require("../ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ");
module.exports = {
  name: "np",
  cooldown: 3,
  execute(message) {
    try {
      if (
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "np") &&
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
      if (
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "np") &&
        message.channel.name === "ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ"
      ) {
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) {
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

Alice is not playing anymusic yet....`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        const music = queue.songs[0];
        const seek =
          (queue.connection.dispatcher.streamTime -
            queue.connection.dispatcher.pausedTime) /
          1000;
        const left = music.duration - seek;
        const { id } = getVideoId(`${music.url}`);
        let current = new MessageEmbed()
          .setTitle("**ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ**\n*Now playing*")
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
          .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
          .setDescription(`${music.title}\n${music.url}`)
          .setColor("#ff0000")
          .setAuthor(message.client.user.username);
        if (music.duration > 0) {
          current.addField(
            `\u200b`,
            new Date(seek * 1000).toISOString().substr(11, 8) +
              `[` +
              splitBar(
                music.duration == 0 ? seek : music.duration,
                seek,
                20
              )[0] +
              `]` +
              (music.duration == 0
                ? ` ◉ LIVE`
                : new Date(music.duration * 1000).toISOString().substr(11, 8)),
            false
          );
          current.setFooter(
            `⏱Time Remaining: ${new Date(left * 1000)
              .toISOString()
              .substr(11, 8)}`
          );
        }
        message.react("💃🏽");
        message.react("🍑");
        message.channel.send(current).catch(console.error);
        return;
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
