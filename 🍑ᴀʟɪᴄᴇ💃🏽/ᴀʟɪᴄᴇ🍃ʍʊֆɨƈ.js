const os = require("os");
const express = require("express");
const { readdirSync } = require("fs");
const { join } = require("path");
const { Client, Collection } = require("./ððð¬ðð¨ð¦ðð/src");
const á´ÊÉªá´á´ÊÊÖÉ¨Æ = new Client({ disableEveryone: false });
const { á´ÊÉªá´á´ÓÉÕ¼, á´ÊÉªá´á´ÊÉ¨Ó¼, á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ } = require("./á´ÊÉªá´á´Õ¼ÉÊ/Êá´á´á´á´Ê.js");
const á´ÊÉªá´á´ÖÉÊÊÉÊ = express();
const PORT = process.env.PORT || 8080;
á´ÊÉªá´á´ÖÉÊÊÉÊ.listen(PORT);
á´ÊÉªá´á´ÊÊÖÉ¨Æ.login(á´ÊÉªá´á´ÓÉÕ¼);
á´ÊÉªá´á´ÊÊÖÉ¨Æ.prefix = á´ÊÉªá´á´ÊÉ¨Ó¼;
á´ÊÉªá´á´ÊÊÖÉ¨Æ.queue = new Map();
á´ÊÉªá´á´ÊÊÖÉ¨Æ.commands = new Collection();
const AliceEngineOil = new Collection();
const { MessageEmbed } = require("./ððð¬ðð¨ð¦ðð/src");
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const commandFiles = readdirSync(join(__dirname, "á´ÊÉªá´á´É¦ÊÉ®")).filter((file) =>
  file.endsWith("_ððð¬ðð¨ð¦ðð.js")
);
for (const file of commandFiles) {
  const command = require(join(__dirname, "á´ÊÉªá´á´É¦ÊÉ®", `${file}`));
  á´ÊÉªá´á´ÊÊÖÉ¨Æ.commands.set(command.name, command);
}
try {
  á´ÊÉªá´á´ÊÊÖÉ¨Æ.on("warn", (á´ÊÉªá´á´_WARN) => console.log(á´ÊÉªá´á´_WARN));
  á´ÊÉªá´á´ÊÊÖÉ¨Æ.on("error", console.error);
  á´ÊÉªá´á´ÊÊÖÉ¨Æ.on("ready", () => {
    á´ÊÉªá´á´ÊÊÖÉ¨Æ.user.setActivity(`â£ï¸ ${á´ÊÉªá´á´ÊÉ¨Ó¼}alice && ${á´ÊÉªá´á´ÊÉ¨Ó¼}play`, {
      type: "WATCHING",
    });
    console.log(`
â¥ï¸--------------- ðá´ÊÉªá´á´ðð½by ð GasComIT ---------------â¥ï¸
ðð½ Bot-Name:~~> ${á´ÊÉªá´á´ÊÊÖÉ¨Æ.user.username}
ð» Bot-Os  :~~> ${os.platform().toUpperCase()}
ð Bot-Port:~~> ${PORT}

â¥ï¸--------------- ðá´ÊÉªá´á´ðð½by ð GasComIT ---------------â¥ï¸
GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to ð°ð¼ð½ð ð®ð»ð± ð±ð¶ððð¿ð¶ð¯ððð² verbatim copies
of this license document, ð¯ðð ð°ðµð®ð»ð´ð¶ð»ð´ ð¶ð ð¶ð ð»ð¼ð ð®ð¹ð¹ð¼ðð²ð±.
â¥ï¸ ðá´ÊÉªá´á´ðð½by ð GasComIT â¥ï¸
Discord Music YouTube player
has been licensed under GNU General Public License
ðð¨ð©ð²ð«ð¢ð ð¡ð­ (ð) 2023 | ððð¬ðð¨ð¦ðð

â¥ï¸--------------- ðá´ÊÉªá´á´ðð½by ð GasComIT ---------------â¥ï¸`);
  });
} catch (ErrorAlice) {
  console.error(ErrorAlice);
}
try {
  á´ÊÉªá´á´ÊÊÖÉ¨Æ.on(`guildCreate`, (guild) => {
    const channel = guild.channels.cache.find(
      (channel) =>
        channel.type === `text` &&
        channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
    );
    channel.send("@everyone");
    channel
      .send(
        new MessageEmbed()
          .setColor("#ff0000")
          .setAuthor(`ð¥´ Warning! â ï¸`)
          .setURL("https://github.com/GasComIT?tab=repositories")
          .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
          .setDescription(
            `ðð²ð®ð¿: @everyone
---------------:lady_beetle:---------------


á´ channel É´á´á´á´ **á´ÊÉªá´á´â£ï¸ÊÊÖÉ¨Æ** inside **ð±Gascomit** has been successfully created.
Please use the channel for any **á´ÊÉªá´á´â£ï¸á´Êá´Êá´Ê** commands..

---------------:lady_beetle:---------------`
          )
      )
      .catch(console.error);
    channel
      .send(
        new MessageEmbed()
          .setColor("#ff0000")
          .setAuthor(`ð¥´ Warning! â ï¸`)
          .setURL("https://github.com/GasComIT?tab=repositories")
          .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
          .setDescription(`â¤ï¸âð¥ **Hey there MUSIC lovers !**
I got you all covered with direct music streaming from Êá´á´á´á´Êá´ to discord voice channel.
Please use the channel **á´ÊÉªá´á´â£ï¸ÊÊÖÉ¨Æ** for any **á´ÊÉªá´á´_á´Êá´Êá´Ê** commands.
---------------:lady_beetle:---------------

:candy:**Êá´á´ á´á´á´á´á´É´á´** 
*Please use* = **${á´ÊÉªá´á´ÊÉ¨Ó¼}alice**  | **${á´ÊÉªá´á´ÊÉ¨Ó¼}play** | **${á´ÊÉªá´á´ÊÉ¨Ó¼}help** *to know more.*
---------------:lady_beetle:---------------

:star:**É´á´á´á´ to** @everyone:
á´ channel É´á´á´á´ **á´ÊÉªá´á´â£ï¸ÊÊÖÉ¨Æ** inside **ð±Gascomit** has been successfully created.
Please use only that channel for any **á´ÊÉªá´á´_á´Êá´Êá´Ê** commands..
---------------:lady_beetle:---------------`)
      )
      .catch(console.error);
    guild.channels
      .create("ð±ððð¬ðð¨ð¦ððâ¢", {
        type: "category",
        permissionOverwrites: [
          { id: guild.id, deny: ["VIEW_CHANNEL"] },
          { id: guild.id, allow: ["VIEW_CHANNEL"] },
        ],
      })
      .then((parent) => {
        guild.channels
          .create("á´ÊÉªá´á´ðá´á´ê±Éªá´", {
            type: "text",
            parent,
            permissionOverwrites: [
              {
                id: guild.id,
                deny: [
                  "MANAGE_ROLES",
                  "MANAGE_NICKNAMES",
                  "MANAGE_CHANNELS",
                  "KICK_MEMBERS",
                  "BAN_MEMBERS",
                ],
              },
              {
                id: guild.id,
                allow: [
                  "VIEW_CHANNEL",
                  "SEND_MESSAGES",
                  "READ_MESSAGE_HISTORY",
                ],
              },
            ],
          })
          .catch(console.error);
        return;
      });
  });
} catch (ErrorAlice) {
  console.error(ErrorAlice);
}
á´ÊÉªá´á´ÊÊÖÉ¨Æ.on("message", async (message) => {
  try {
    if (message.author.bot) {
      return;
    }
    if (!message.guild) {
      message.react("â");
      message.react("ð¥");
      message.reply(
        new MessageEmbed()
          .setColor("#e69138")
          .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
          .setAuthor(`ð¥´ Warning! â ï¸`)
          .setURL("https://github.com/GasComIT?tab=repositories")
          .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
          .setDescription(`**ÃÂ§Ãªr >** ${message.author}
---------------:lady_beetle:---------------


ðá´ÊÉªá´á´ðð½by ð GasComIT
ð-ðð¶ð´ðªð¤ ðð°ðµ ð§ð°ð³ ððªð´ð¤ð°ð³ð¥ ð¸ðªðµð© ð ð°ð¶ðð¶ð£ð¦_ðð­, ð£ð¶ðªð­ðµ ð¸ðªðµð© ððªð´ð¤ð°ð³ð¥.ð«ð´
â¢ You are currently in a **DMChannel** and so you have been **restricted** using any **Alice ðð¼ðºðºð®ð»ð±ð**
â¢ Add me in your channel and then all commands will be automatically accepted.
ð°- https://github.com/GasComIT/Alice

---------------:lady_beetle:---------------`)
      );
      return;
    }
    const prefixRegex = new RegExp(
      `^(<@!?${á´ÊÉªá´á´ÊÊÖÉ¨Æ.user.id}>|${escapeRegex(á´ÊÉªá´á´ÊÉ¨Ó¼)})\\s*`
    );

    if (!prefixRegex.test(message.content)) {
      return;
    }
    const [matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command =
      á´ÊÉªá´á´ÊÊÖÉ¨Æ.commands.get(commandName) ||
      á´ÊÉªá´á´ÊÊÖÉ¨Æ.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );
    if (!command) {
      return;
    }
    if (!AliceEngineOil.has(command.name)) {
      AliceEngineOil.set(command.name, new Collection());
    }
    const now = Date.now();
    const timestamps = AliceEngineOil.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;
    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        message.react("â");
        message.react("ð¥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#e69138")
              .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
              .setAuthor(`ð¥´ Warning! â ï¸`)
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
              .setDescription(`
**ÃÂ§Ãªr >** ${message.author}
---------------:lady_beetle:---------------


Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the '${
              command.name
            }' command.      

---------------:lady_beetle:---------------`)
          )
          .catch(console.error);
        return;
      }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.react("â");
      message.react("ð¥");
      message.channel
        .send(
          new MessageEmbed()
            .setColor("#e69138")
            .setTitle("ðá´ÊÉªá´á´ðð½by ð GasComIT")
            .setAuthor(`ð¥´ Warning! â ï¸`)
            .setURL("https://github.com/GasComIT?tab=repositories")
            .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
            .setFooter("ð°ðð¶ð°ð²ð»ðð²: É¢É´á´(á´)2023 ððð¬ðð¨ð¦ðð")
            .setDescription(
              `
**ÃÂ§Ãªr >** ${message.author}
---------------:lady_beetle:---------------


There was an error executing that command.`
            )
        )
        .catch(console.error)
        .then((message) => {
          message.delete({ timeout: `${á´ÊÉªá´á´ÖÊÊÉ¢ÉÊ}` });
          return;
        });
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
ð°**In Discord channel** = https://discord.gg/ucPpXWFK
or
ð°**In telegram group** = https://t.me/gascomit


**ðºError Caughtð»**
*${ErrorAlice}*`)
    );
    console.error(ErrorAlice);
  }
});
