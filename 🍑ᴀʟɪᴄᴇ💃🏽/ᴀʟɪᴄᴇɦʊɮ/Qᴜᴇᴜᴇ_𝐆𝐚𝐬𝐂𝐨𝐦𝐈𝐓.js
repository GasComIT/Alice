// 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { MessageEmbed } = require("../𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
const { ᴀʟɪᴄᴇʄɨӼ, ᴀʟɪᴄᴇքʊʀɢɛʀ } = require("../ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ");
module.exports = {
  name: "queue",
  cooldown: 3,
  async execute(message) {
    try {
      if (
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "queue") &&
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

**Category:** \`🔱GasComIT\`
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
        message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + "queue") &&
        message.channel.name === "ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ"
      ) {
        const permissions = message.channel.permissionsFor(message.client.user);
        if (!permissions.has([`MANAGE_MESSAGES`, `ADD_REACTIONS`])) {
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

Missing permission to manage messages or add reactions`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
              });
            });
          return;
        }
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

⏺ Nothing playing in this server`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        let currentPage = 0;
        message.react("💃🏽");
        message.react("🍑");
        const embeds = generateQueueEmbed(message, queue.songs);
        const queueEmbed = await message.channel.send(
          `**🏷Page Num:** - ${currentPage + 1}/${embeds.length}`,
          embeds[currentPage]
        );
        try {
          await queueEmbed.react(`⬅️`);
          await queueEmbed.react(`⏺`);
          await queueEmbed.react(`➡️`);
        } catch (error) {
          console.error(error);
          message.channel.send(error.message).catch(console.error);
        }
        const filter = (reaction, user) =>
          [`⬅️`, `⏺`, `➡️`].includes(reaction.emoji.name) &&
          message.author.id === user.id;
        const collector = queueEmbed.createReactionCollector(filter, {
          time: 60000,
        });
        collector.on(`collect`, async (reaction, user) => {
          try {
            if (reaction.emoji.name === `➡️`) {
              if (currentPage < embeds.length - 1) {
                currentPage++;
                queueEmbed.edit("**🏷Page Num:** - ", {
                  page: currentPage + 1,
                  length: embeds.length,
                }),
                  embeds[currentPage];
              }
            } else if (reaction.emoji.name === `⬅️`) {
              if (currentPage !== 0) {
                --currentPage;
                queueEmbed.edit("**🏷Page Num:** - ", {
                  page: currentPage + 1,
                  length: embeds.length,
                }),
                  embeds[currentPage];
              }
            } else {
              collector.stop();
              reaction.message.reactions.removeAll();
            }
            await reaction.users.remove(message.author.id);
          } catch (error) {
            console.error(error);
            return message.channel.send(error.message).catch(console.error);
          }
        });
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
function generateQueueEmbed(message, queue) {
  let embeds = [];
  let k = 10;
  for (let i = 0; i < queue.length; i += 10) {
    const current = queue.slice(i, k);
    let j = i;
    k += 10;
    const info = current
      .map((track) => `${++j} - [${track.title}](${track.url})`)
      .join(`\n`);
    const embed = new MessageEmbed()
      .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
      .setThumbnail("https://i.postimg.cc/sXLzq8k1/Alice.jpg")
      .setColor("#ff0000")
      .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
      .setDescription(
        `**ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ**\n\n♥️**Current Song** -_[${queue[0].title}]_\n\n${info}`
      );
    embeds.push(embed);
  }
  return embeds;
}
