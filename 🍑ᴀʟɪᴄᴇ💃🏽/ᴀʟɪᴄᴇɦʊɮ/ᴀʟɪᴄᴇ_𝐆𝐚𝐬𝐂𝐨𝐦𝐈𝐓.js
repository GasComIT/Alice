// πα΄ΚΙͺα΄α΄ππ½by π GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { MessageEmbed } = require("../πππ¬ππ¨π¦ππ/src");
const { α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ, α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ } = require("../α΄ΚΙͺα΄α΄ΥΌΙΚ/Κα΄α΄α΄α΄Κ");
module.export = {
  name: "alice",
  cooldown: 3,
  execute(message) {
    try {
      const AliceNore = `

β’> **β£οΈAlice** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.\n
β’> **β£οΈAlice** is licensed under GNU General Public License ππ¨π©π²π«π’π π‘π­ (π) 2023 | πππ¬ππ¨π¦ππ\n
β’> use **${α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ}help** to learn how to use **β£οΈAlice**`;
      if (message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "alice")) {
        message.react("ππ½");
        message.react("π");
        message.author.send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
            .setDescription(`**π Sent from <#${message.channel.id}>**`)
        );
        message.author
          .send(
            new MessageEmbed()
              .setDescription(`**ΓΒ§Γͺr >** ${message.author}\n${AliceNore}`)
              .setColor("#ff0000")
              .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
          )
          .catch(console.error);
        message.channel
          .send(
            new MessageEmbed()
              .setDescription(`**ΓΒ§Γͺr >** ${message.author}\n${AliceNore}`)
              .setColor("#ff0000")
              .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
            });
          });
        return;
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
