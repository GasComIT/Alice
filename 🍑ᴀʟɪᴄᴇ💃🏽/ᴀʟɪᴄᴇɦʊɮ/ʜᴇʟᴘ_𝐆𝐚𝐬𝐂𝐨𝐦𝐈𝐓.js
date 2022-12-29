// 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { MessageEmbed } = require("../𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
const { ᴀʟɪᴄᴇʄɨӼ, ᴀʟɪᴄᴇքʊʀɢɛʀ } = require("../ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ");
module.exports = {
  name: "help",
  execute(message) {
    try {
      const AliceHelper = `
*💃🏽•♪•♪𝐌𝐚𝐧𝐮𝐚𝐥-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•🍑*
• **${ᴀʟɪᴄᴇʄɨӼ}filter** = Music filters when playing audio.
• **${ᴀʟɪᴄᴇʄɨӼ}help** = Display this commands and descriptions.
• **${ᴀʟɪᴄᴇʄɨӼ}alice** = Display the  license and a few more info.
• **${ᴀʟɪᴄᴇʄɨӼ}np** = Show now playing music.
• **${ᴀʟɪᴄᴇʄɨӼ}ping** = Check server ping of client.
• **${ᴀʟɪᴄᴇʄɨӼ}play** = Plays audio from YouTube.
• **${AքʀɨʟʄɨӼ}list** = Play a playlist from YouTube.
• **${ᴀʟɪᴄᴇʄɨӼ}queue** = Show the music queue and now playing.
• **${ᴀʟɪᴄᴇʄɨӼ}rm** = Remove music from the queue.
• **${ᴀʟɪᴄᴇʄɨӼ}resume** = Resume currently playing music.
• **${ᴀʟɪᴄᴇʄɨӼ}shuffle** = Shuffle music queue.
• **${ᴀʟɪᴄᴇʄɨӼ}skipto** =Skip to the selected queue number.

---------------:lady_beetle:---------------

*💃🏽•♪•♪𝐏𝐥𝐚𝐲𝐞𝐫-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•🍑*
• **⏭** = Skip the currently playing music.
• **⏸** = Pause/Resume the currently playing music.
• **🔇** = Mute/Unmute the currently playing music.
• **🔁** = Toggle music loop.
• **⏺** = Stops the currently playing music queue.
• **🔊|🔉 ${ᴀʟɪᴄᴇʄɨӼ}vol** = Change volume of currently playing music.`;
      if (message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "help")) {
        message.react("💃🏽");
        message.react("🍑");
        message.author.send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
        );
        message.author
          .send(
            new MessageEmbed()
              .setDescription(`**Ú§êr >** ${message.author}\n${AliceHelper}`)
              .setColor("#ff0000")
              .setAuthor(`🥴 Warning! ⚠️`)
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
              .setDescription(`**Ú§êr >** ${message.author}\n${AliceHelper}`)
              .setColor("#ff0000")
              .setAuthor(`🥴 Warning! ⚠️`)
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
🔰**In telegram group** = https://t.me/gascomit


**🔺Error Caught🔻**
*${ErrorAlice}*`)
      );
      console.error(ErrorAlice);
    }
  },
};
