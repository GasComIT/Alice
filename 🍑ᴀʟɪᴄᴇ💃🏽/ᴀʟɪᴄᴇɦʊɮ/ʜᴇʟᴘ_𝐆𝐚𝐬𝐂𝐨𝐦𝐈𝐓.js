// ðá´ÊÉªá´á´ðð½by ð GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { MessageEmbed } = require("../ððð¬ðð¨ð¦ðð/src");
const { á´ÊÉªá´á´ÊÉ¨Ó¼, á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ } = require("../á´ÊÉªá´á´Õ¼ÉÊ/Êá´á´á´á´Ê");
module.exports = {
  name: "help",
  execute(message) {
    try {
      const AliceHelper = `
*ðð½â¢âªâ¢âªððð§ð®ðð¥-ðð¨ð¦ð¦ðð§ðð¬âªâ¢âªâ¢ð*
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}filter** = Music filters when playing audio.
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}help** = Display this commands and descriptions.
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}alice** = Display the  license and a few more info.
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}np** = Show now playing music.
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}ping** = Check server ping of client.
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}play** = Plays audio from YouTube.
â¢ **${AÖÊÉ¨ÊÊÉ¨Ó¼}list** = Play a playlist from YouTube.
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}queue** = Show the music queue and now playing.
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}rm** = Remove music from the queue.
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}resume** = Resume currently playing music.
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}shuffle** = Shuffle music queue.
â¢ **${á´ÊÉªá´á´ÊÉ¨Ó¼}skipto** =Skip to the selected queue number.

---------------:lady_beetle:---------------

*ðð½â¢âªâ¢âªðð¥ðð²ðð«-ðð¨ð¦ð¦ðð§ðð¬âªâ¢âªâ¢ð*
â¢ **â­** = Skip the currently playing music.
â¢ **â¸** = Pause/Resume the currently playing music.
â¢ **ð** = Mute/Unmute the currently playing music.
â¢ **ð** = Toggle music loop.
â¢ **âº** = Stops the currently playing music queue.
â¢ **ð|ð ${á´ÊÉªá´á´ÊÉ¨Ó¼}vol** = Change volume of currently playing music.`;
      if (message.content.startsWith(á´ÊÉªá´á´ÊÉ¨Ó¼ + "help")) {
        message.react("ðð½");
        message.react("ð");
        message.author.send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setDescription(`**ð Sent from <#${message.channel.id}>**`)
        );
        message.author
          .send(
            new MessageEmbed()
              .setDescription(`**ÃÂ§Ãªr >** ${message.author}\n${AliceHelper}`)
              .setColor("#ff0000")
              .setAuthor(`ð¥´ Warning! â ï¸`)
              .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
          )
          .catch(console.error);
        message.channel
          .send(
            new MessageEmbed()
              .setDescription(`**ÃÂ§Ãªr >** ${message.author}\n${AliceHelper}`)
              .setColor("#ff0000")
              .setAuthor(`ð¥´ Warning! â ï¸`)
              .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}`,
            });
          });
        return;
      }
    } catch (ErrorAlice) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#DB4434")
          .setAuthor("ðºERROR CAUGHTð»")
          .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
          .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
          .setThumbnail("https://i.postimg.cc/sXLzq8k1/Alice.jpg")
          .setDescription(`**á´ÊÉªá´á´â£ï¸ÊÊÖÉ¨Æ** has encountered an error.

Please report to either 
ð°**In Discord channel** = https://discord.gg/xx
or
ð°**In telegram group** = https://t.me/gascomit


**ðºError Caughtð»**
*${ErrorAlice}*`)
      );
      console.error(ErrorAlice);
    }
  },
};
