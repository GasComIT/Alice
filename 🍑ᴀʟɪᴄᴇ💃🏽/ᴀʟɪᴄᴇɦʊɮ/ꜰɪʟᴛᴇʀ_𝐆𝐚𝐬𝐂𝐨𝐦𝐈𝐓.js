const { MessageEmbed } = require("../πππ¬ππ¨π¦ππ/src");
const { play } = require("./α΄ΚΙͺα΄α΄ΦΚΗΚΙΚ_πππ¬ππ¨π¦ππ");
const { α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ, α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ } = require("../α΄ΚΙͺα΄α΄ΥΌΙΚ/Κα΄α΄α΄α΄Κ");
module.exports = {
  name: "filter",
  cooldown: 3,
  async execute(message, args, client) {
    try {
      if (
        message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "filter") &&
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
      const { channel } = message.member.voice;
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

**Nothing in Queue!**
*Add music in Queue first!*`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
            });
          });
        return;
      }
      if (queue.length !== 0) {
        if (!args.length) {
          message.react("β");
          message.react("π₯");
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#FF5F15")
                .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                .setAuthor(`π₯΄ Warning! β οΈ`)
                .setURL("https://github.com/Gascomit?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                .setDescription(`**ΓΒ§Γͺr >** ${message.author}

**usage:** \`${α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ}filter\`
β«οΈ 8D
β«οΈ subboost
β«οΈ bassboost
β«οΈ nightcore
β«οΈ surrounding
β«οΈ clear [Clean all applied filter(s)]`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
          return;
        }
      }
      if (
        message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "filter") &&
        message.channel.name === "α΄ΚΙͺα΄α΄πα΄α΄κ±Ιͺα΄"
      ) {
        if (!message.member.voice.channel) {
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

*Please join a* **Voice Channel** *first*`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
          return;
        }
        if (queue && channel !== message.guild.me.voice.channel) {
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

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
          return;
        }
        const filters = [
          "bass=g=20,dynaudnorm=f=200",
          "apulsator=hz=0.08",
          "aresample=48000,asetrate=48000*1.25",
          "surround",
          "asubboost",
          "remove",
        ];
        let AliceEffectNum;
        let AliceSelected;
        switch (args[0]) {
          case "bassboost":
            AliceEffectNum = 0;
            break;
          case "8D":
            AliceEffectNum = 1;
            break;
          case "nightcore":
            AliceEffectNum = 2;
            break;
          case "surrounding":
            AliceEffectNum = 3;
            break;
          case "subboost":
            AliceEffectNum = 4;
            break;
          case "clear":
            AliceEffectNum = 5;
            break;
          default:
            AliceEffectNum = 404;
            message.react("β");
            message.react("π₯");
            message.channel
              .send(
                new MessageEmbed()
                  .setColor("#FF5F15")
                  .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                  .setAuthor(`π₯΄ Warning! β οΈ`)
                  .setURL("https://github.com/Gascomit?tab=repositories")
                  .setFooter(`**Example:** ${α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ}filter bassboost`)
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                  .setDescription(`**ΓΒ§Γͺr >** ${message.author}
**That was not a valid filter!**

β«οΈ 8D
β«οΈ subboost
β«οΈ bassboost
β«οΈ nightcore
β«οΈ surrounding
β«οΈ clear [Clean all applied filter(s)]`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                });
              });
            break;
        }
        AliceSelected = filters[AliceEffectNum];
        if (AliceEffectNum === 404) {
          return;
        }
        try {
          const music = queue.songs[0];
          message.react("ππ½");
          message.react("π");
          message.channel.send(
            new MessageEmbed()
              .setColor("#ff0000")
              .setAuthor(`π₯΄ Warning! β οΈ`)
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
              .setAuthor(
                "Applied Filter = " + args[0],
                "https://cdn.discordapp.com/emojis/769935094285860894.gif"
              )
          );
          // .then((message) => {
          // message.delete({
          // timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
          // });
          // });
          play(music, message, client, AliceSelected);
          message.channel
            .send(
              new MessageEmbed()
                .setColor("#AE4A3B")
                .setTitle("PLEASE RESTART MUSIC QUEUE !")
                .setAuthor(`π₯΄ Warning! β οΈ`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                .setDescription(`**ΓΒ§Γͺr >** ${message.author}

*Song Queue has been cleaned up.*
Restart **queue** and **filter** will be applied.`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: 20000,
              });
            });
          return;
        } catch (error) {
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

**Nothing in Queue!**
*Add music in Queue first!*`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
          return;
        }
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
π°**In telegram group** = https://t.me/gascomit


**πΊError Caughtπ»**
*${ErrorAlice}*`)
      );
      console.error(ErrorAlice);
    }
  },
};
