// πα΄ΚΙͺα΄α΄ππ½by π GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const getVideoId = require("get-video-id");
const { MessageEmbed } = require("../πππ¬ππ¨π¦ππ/src");
const { splitBar } = require("string-progressbar");
const { α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ, α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ } = require("../α΄ΚΙͺα΄α΄ΥΌΙΚ/Κα΄α΄α΄α΄Κ");
module.exports = {
  name: "np",
  cooldown: 3,
  execute(message) {
    try {
      if (
        message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "np") &&
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
        message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + "np") &&
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

Alice is not playing anymusic yet....`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
          return;
        }
        const music = queue.songs[0];
        const seek =
          (queue.connection.dispatcher.streamTime -
            queue.connection.dispatcher.pausedTime) /
          1000;
        const left = music.duration - seek;
        const { id } = getVideoId(`${music.url}`);
        let current = new MessageEmbed()
          .setTitle("**α΄ΚΙͺα΄α΄β£οΈΚΚΦΙ¨Ζ**\n*Now playing*")
          .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
          .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
          .setDescription(`${music.title}\n${music.url}`)
          .setColor("#ff0000")
          .setAuthor(message.client.user.username);
        if (music.duration > 0) {
          current.addField(
            `\u200b`,
            new Date(seek * 1000).toISOString().substr(11, 8) +
              `[` +
              splitBar(
                music.duration == 0 ? seek : music.duration,
                seek,
                20
              )[0] +
              `]` +
              (music.duration == 0
                ? ` β LIVE`
                : new Date(music.duration * 1000).toISOString().substr(11, 8)),
            false
          );
          current.setFooter(
            `β±Time Remaining: ${new Date(left * 1000)
              .toISOString()
              .substr(11, 8)}`
          );
        }
        message.react("ππ½");
        message.react("π");
        message.channel.send(current).catch(console.error);
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
π°**In telegram group** = https://t.me/gascomit


**πΊError Caughtπ»**
*${ErrorAlice}*`)
      );
      console.error(ErrorAlice);
    }
  },
};
