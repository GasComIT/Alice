// πα΄ΚΙͺα΄α΄ MΚΦΙ¨Ζππ½by π GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { canModifyQueue, α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ, α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ } = require("../α΄ΚΙͺα΄α΄ΥΌΙΚ/Κα΄α΄α΄α΄Κ");
const { MessageEmbed } = require("../πππ¬ππ¨π¦ππ/src");
module.exports = {
  name: "shuffle",
  cooldown: 3,
  execute(message) {
    try {
      if (
        message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "shuffle") &&
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

**Category:** \`π±Gascomit\`
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
        message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "shuffle") &&
        message.channel.name === "α΄ΚΙͺα΄α΄πα΄α΄κ±Ιͺα΄"
      ) {
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

There is nothing in queue.`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
          return;
        }
        if (!canModifyQueue(message.member)) {
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

*You need to* **join** *a voice channel first!*`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
          return;
        }
        let songs = queue.songs;
        for (let i = songs.length - 1; i > 1; i--) {
          let j = 1 + Math.floor(Math.random() * i);
          [songs[i], songs[j]] = [songs[j], songs[i]];
        }
        queue.songs = songs;
        message.client.queue.set(message.guild.id, queue);
        message.react("ππ½");
        message.react("π");
        queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#ff0000")
              .setAuthor(`π₯΄ Warning! β οΈ`)
              .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
              .setDescription(`**ΓΒ§Γͺr >** ${message.author}

π Shuffled the queue`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
            });
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
