// 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { MessageEmbed } = require("../𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
const { ᴀʟɪᴄᴇʄɨӼ, ᴀʟɪᴄᴇքʊʀɢɛʀ } = require("../ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ");
module.export = {
  name: "alice",
  cooldown: 3,
  execute(message) {
    try {
      const AliceNore = `

•> **❣️Alice** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n
•> **❣️Alice** is licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓\n
•> use **${ᴀʟɪᴄᴇʄɨӼ}help** to learn how to use **❣️Alice**`;
      if (message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "alice")) {
        message.react("💃🏽");
        message.react("🍑");
        message.author.send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
        );
        message.author
          .send(
            new MessageEmbed()
              .setDescription(`**Ú§êr >** ${message.author}\n${AliceNore}`)
              .setColor("#ff0000")
              .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
          )
          .catch(console.error);
        message.channel
          .send(
            new MessageEmbed()
              .setDescription(`**Ú§êr >** ${message.author}\n${AliceNore}`)
              .setColor("#ff0000")
              .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
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
