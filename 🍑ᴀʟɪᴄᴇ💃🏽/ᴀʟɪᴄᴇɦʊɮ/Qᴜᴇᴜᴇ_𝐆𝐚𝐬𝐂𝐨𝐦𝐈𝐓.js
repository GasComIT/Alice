// πα΄ΚΙͺα΄α΄ππ½by π GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { MessageEmbed } = require("../πππ¬ππ¨π¦ππ/src");
const { α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ, α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ } = require("../α΄ΚΙͺα΄α΄ΥΌΙΚ/Κα΄α΄α΄α΄Κ");
module.exports = {
  name: "queue",
  cooldown: 3,
  async execute(message) {
    try {
      if (
        message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "queue") &&
        message.channel.name !== "α΄ΚΙͺα΄α΄πα΄α΄κ±Ιͺα΄"
      ) {
        message.react("β");
        message.react("π₯");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#FF5F15")
              .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
              .setAuthor(`π₯΄ Warning! β οΈ`)
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
              .setDescription(`**ΓΒ§Γͺr >** ${message.author}

**Category:** \`π±GasComIT\`
**Channel:** \`α΄ΚΙͺα΄α΄β£οΈΚΚΦΙ¨Ζ\`
β οΈPlease use ππ» for any **α΄ΚΙͺα΄α΄** commands.`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
            });
          });
        return;
      }
      if (
        message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "queue") &&
        message.channel.name === "α΄ΚΙͺα΄α΄πα΄α΄κ±Ιͺα΄"
      ) {
        const permissions = message.channel.permissionsFor(message.client.user);
        if (!permissions.has([`MANAGE_MESSAGES`, `ADD_REACTIONS`])) {
          message.react("β");
          message.react("π₯");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                .setAuthor(`π₯΄ Warning! β οΈ`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                .setDescription(`**ΓΒ§Γͺr >** ${message.author}

Missing permission to manage messages or add reactions`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
          return;
        }
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) {
          message.react("β");
          message.react("π₯");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                .setAuthor(`π₯΄ Warning! β οΈ`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                .setDescription(`**ΓΒ§Γͺr >** ${message.author}

βΊ Nothing playing in this server`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
          return;
        }
        let currentPage = 0;
        message.react("ππ½");
        message.react("π");
        const embeds = generateQueueEmbed(message, queue.songs);
        const queueEmbed = await message.channel.send(
          `**π·Page Num:** - ${currentPage + 1}/${embeds.length}`,
          embeds[currentPage]
        );
        try {
          await queueEmbed.react(`β¬οΈ`);
          await queueEmbed.react(`βΊ`);
          await queueEmbed.react(`β‘οΈ`);
        } catch (error) {
          console.error(error);
          message.channel.send(error.message).catch(console.error);
        }
        const filter = (reaction, user) =>
          [`β¬οΈ`, `βΊ`, `β‘οΈ`].includes(reaction.emoji.name) &&
          message.author.id === user.id;
        const collector = queueEmbed.createReactionCollector(filter, {
          time: 60000,
        });
        collector.on(`collect`, async (reaction, user) => {
          try {
            if (reaction.emoji.name === `β‘οΈ`) {
              if (currentPage < embeds.length - 1) {
                currentPage++;
                queueEmbed.edit("**π·Page Num:** - ", {
                  page: currentPage + 1,
                  length: embeds.length,
                }),
                  embeds[currentPage];
              }
            } else if (reaction.emoji.name === `β¬οΈ`) {
              if (currentPage !== 0) {
                --currentPage;
                queueEmbed.edit("**π·Page Num:** - ", {
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
          .setAuthor("πΊERROR CAUGHTπ»")
          .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
          .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
          .setThumbnail("https://i.postimg.cc/sXLzq8k1/Alice.jpg")
          .setDescription(`**α΄ΚΙͺα΄α΄β£οΈΚΚΦΙ¨Ζ** has encountered an error.

Please report to either 
π°**In Discord channel** = https://discord.gg/xx
or
π°**In telegram group** = https://t.me/Gascomit


**πΊError Caughtπ»**
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
      .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
      .setThumbnail("https://i.postimg.cc/sXLzq8k1/Alice.jpg")
      .setColor("#ff0000")
      .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
      .setDescription(
        `**α΄ΚΙͺα΄α΄β£οΈΚΚΦΙ¨Ζ**\n\nβ₯οΈ**Current Song** -_[${queue[0].title}]_\n\n${info}`
      );
    embeds.push(embed);
  }
  return embeds;
}
