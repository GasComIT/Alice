// 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { ᴀʟɪᴄᴇʄɨӼ, ᴀʟɪᴄᴇքʊʀɢɛʀ } = require("../ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ");
const { MessageEmbed } = require("../𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
module.exports = {
  name: "ping",
  cooldown: 3,
  execute(message) {
    try {
      if (
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "ping") &&
        message.channel.name !== "ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("❌");
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
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "ping") &&
        message.channel.name === "ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("💃🏽");
        message.react("🍑");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#ff0000")
              .setAuthor(`🥴 Warning! ⚠️`)
              .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
              .setDescription(`**Ú§êr >** ${message.author}

⌛️Average ping of Alice's Server **${Math.round(message.client.ws.ping)}ms**`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
            });
          });
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
🔰**In telegram group** = https://t.me/Gascomit


**🔺Error Caught🔻**
*${ErrorAlice}*`)
      );
      console.error(ErrorAlice);
    }
  },
};
