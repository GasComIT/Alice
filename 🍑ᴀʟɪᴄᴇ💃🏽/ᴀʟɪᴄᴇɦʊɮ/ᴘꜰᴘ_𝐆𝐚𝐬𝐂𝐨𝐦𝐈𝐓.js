// 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { ᴀʟɪᴄᴇʄɨӼ, ᴀʟɪᴄᴇքʊʀɢɛʀ } = require("../ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ");
const { MessageEmbed } = require("../𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
module.exports = {
  name: "pfp",
  cooldown: 3,
  execute(message) {
    try {
      if (
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "pfp") &&
        message.channel.name !== "ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("❌");
        const embedfactor = new MessageEmbed()
          .setColor("#FF5F15")
          .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
          .setAuthor(`🥴 Warning! ⚠️`)
          .setURL("https://github.com/GasComIT?tab=repositories")
          .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
          .setDescription(`**Ú§êr >** ${message.author}

**Category:** \`🔱Gascomit\`
**Channel:** \`ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀʟɪᴄᴇ** commands.`);
        message.channel
          .send(embedfactor)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
            });
          });
        return;
      }

      if (
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "pfp") &&
        message.channel.name === "ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("💃🏽");
        message.react("🍑");
        let AvatarEmbed = new MessageEmbed();
        const user = message.mentions.users.first();
        if (!message.mentions.users.first()) {
          AvatarEmbed.setColor("#ff0000");
          AvatarEmbed.setAuthor(`🥴 Warning! ⚠️`);
          AvatarEmbed.setURL("https://github.com/GasComIT?tab=repositories");
          AvatarEmbed.setImage(message.author.displayAvatarURL());
          AvatarEmbed.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓");
          AvatarEmbed.setDescription("🔥This is **your** Profile Picture");
          AvatarEmbed.setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`);
          message.channel.send(AvatarEmbed);
          return;
        } else {
          AvatarEmbed.setColor("#ff0000");
          AvatarEmbed.setAuthor(`🥴 Warning! ⚠️`);
          AvatarEmbed.setURL("https://github.com/GasComIT?tab=repositories");
          AvatarEmbed.setImage(user.displayAvatarURL());
          AvatarEmbed.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓");
          AvatarEmbed.setDescription(`🔥This is **${user}'s** Profile Picture`);
          AvatarEmbed.setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`);
          message.channel.send(AvatarEmbed);
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
🔰**In telegram group** = https://t.me/gascomit


**🔺Error Caught🔻**
*${ErrorAlice}*`)
      );
      console.error(ErrorAlice);
    }
  },
};
