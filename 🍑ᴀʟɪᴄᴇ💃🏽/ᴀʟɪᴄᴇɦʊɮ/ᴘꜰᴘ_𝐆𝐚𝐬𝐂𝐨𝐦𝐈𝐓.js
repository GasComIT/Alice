// πα΄ΚΙͺα΄α΄ππ½by π GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ, α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ } = require("../α΄ΚΙͺα΄α΄ΥΌΙΚ/Κα΄α΄α΄α΄Κ");
const { MessageEmbed } = require("../πππ¬ππ¨π¦ππ/src");
module.exports = {
  name: "pfp",
  cooldown: 3,
  execute(message) {
    try {
      if (
        message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "pfp") &&
        message.channel.name !== "α΄ΚΙͺα΄α΄πα΄α΄κ±Ιͺα΄"
      ) {
        message.react("β");
        const embedfactor = new MessageEmbed()
          .setColor("#FF5F15")
          .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
          .setAuthor(`π₯΄ Warning! β οΈ`)
          .setURL("https://github.com/GasComIT?tab=repositories")
          .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
          .setDescription(`**ΓΒ§Γͺr >** ${message.author}

**Category:** \`π±Gascomit\`
**Channel:** \`α΄ΚΙͺα΄α΄β£οΈΚΚΦΙ¨Ζ\`
β οΈPlease use ππ» for any **α΄ΚΙͺα΄α΄** commands.`);
        message.channel
          .send(embedfactor)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
            });
          });
        return;
      }

      if (
        message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "pfp") &&
        message.channel.name === "α΄ΚΙͺα΄α΄πα΄α΄κ±Ιͺα΄"
      ) {
        message.react("ππ½");
        message.react("π");
        let AvatarEmbed = new MessageEmbed();
        const user = message.mentions.users.first();
        if (!message.mentions.users.first()) {
          AvatarEmbed.setColor("#ff0000");
          AvatarEmbed.setAuthor(`π₯΄ Warning! β οΈ`);
          AvatarEmbed.setURL("https://github.com/GasComIT?tab=repositories");
          AvatarEmbed.setImage(message.author.displayAvatarURL());
          AvatarEmbed.setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ");
          AvatarEmbed.setDescription("π₯This is **your** Profile Picture");
          AvatarEmbed.setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`);
          message.channel.send(AvatarEmbed);
          return;
        } else {
          AvatarEmbed.setColor("#ff0000");
          AvatarEmbed.setAuthor(`π₯΄ Warning! β οΈ`);
          AvatarEmbed.setURL("https://github.com/GasComIT?tab=repositories");
          AvatarEmbed.setImage(user.displayAvatarURL());
          AvatarEmbed.setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ");
          AvatarEmbed.setDescription(`π₯This is **${user}'s** Profile Picture`);
          AvatarEmbed.setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`);
          message.channel.send(AvatarEmbed);
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
