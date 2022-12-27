const os = require("os");
const express = require("express");
const { readdirSync } = require("fs");
const { join } = require("path");
const { Client, Collection } = require("./𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
const ᴀʟɪᴄᴇʍʊֆɨƈ = new Client({ disableEveryone: false });
const { ᴀʟɪᴄᴇӄɛռ, ᴀʟɪᴄᴇʄɨӼ, ᴀʟɪᴄᴇքʊʀɢɛʀ } = require("./ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ.js");
const ᴀʟɪᴄᴇֆɛʀʋɛʀ = express();
const PORT = process.env.PORT || 8080;
ᴀʟɪᴄᴇֆɛʀʋɛʀ.listen(PORT);
ᴀʟɪᴄᴇʍʊֆɨƈ.login(ᴀʟɪᴄᴇӄɛռ);
ᴀʟɪᴄᴇʍʊֆɨƈ.prefix = ᴀʟɪᴄᴇʄɨӼ;
ᴀʟɪᴄᴇʍʊֆɨƈ.queue = new Map();
ᴀʟɪᴄᴇʍʊֆɨƈ.commands = new Collection();
const AliceEngineOil = new Collection();
const { MessageEmbed } = require("./𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src");
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const commandFiles = readdirSync(join(__dirname, "ᴀʟɪᴄᴇɦʊɮ")).filter((file) =>
  file.endsWith("_𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓.js")
);
for (const file of commandFiles) {
  const command = require(join(__dirname, "ᴀʟɪᴄᴇɦʊɮ", `${file}`));
  ᴀʟɪᴄᴇʍʊֆɨƈ.commands.set(command.name, command);
}
try {
  ᴀʟɪᴄᴇʍʊֆɨƈ.on("warn", (ᴀʟɪᴄᴇ_WARN) => console.log(ᴀʟɪᴄᴇ_WARN));
  ᴀʟɪᴄᴇʍʊֆɨƈ.on("error", console.error);
  ᴀʟɪᴄᴇʍʊֆɨƈ.on("ready", () => {
    ᴀʟɪᴄᴇʍʊֆɨƈ.user.setActivity(`❣️ ${ᴀʟɪᴄᴇʄɨӼ}alice && ${ᴀʟɪᴄᴇʄɨӼ}play`, {
      type: "WATCHING",
    });
    console.log(`
♥️--------------- 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT ---------------♥️
💃🏽 Bot-Name:~~> ${ᴀʟɪᴄᴇʍʊֆɨƈ.user.username}
💻 Bot-Os  :~~> ${os.platform().toUpperCase()}
🔌 Bot-Port:~~> ${PORT}

♥️--------------- 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT ---------------♥️
GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
♥️ 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT ♥️
Discord Music YouTube player
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓

♥️--------------- 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT ---------------♥️`);
  });
} catch (ErrorAlice) {
  console.error(ErrorAlice);
}
try {
  ᴀʟɪᴄᴇʍʊֆɨƈ.on(`guildCreate`, (guild) => {
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
          .setAuthor(`🥴 Warning! ⚠️`)
          .setURL("https://github.com/GasComIT?tab=repositories")
          .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
          .setDescription(
            `𝗗𝗲𝗮𝗿: @everyone
---------------:lady_beetle:---------------


ᴀ channel ɴᴀᴍᴇ **ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ** inside **🔱Gascomit** has been successfully created.
Please use the channel for any **ᴀʟɪᴄᴇ❣️ᴘʟᴀʏᴇʀ** commands..

---------------:lady_beetle:---------------`
          )
      )
      .catch(console.error);
    channel
      .send(
        new MessageEmbed()
          .setColor("#ff0000")
          .setAuthor(`🥴 Warning! ⚠️`)
          .setURL("https://github.com/GasComIT?tab=repositories")
          .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
          .setDescription(`❤️‍🔥 **Hey there MUSIC lovers !**
I got you all covered with direct music streaming from ʏᴏᴜᴛᴜʙᴇ to discord voice channel.
Please use the channel **ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ** for any **ᴀʟɪᴄᴇ_ᴘʟᴀʏᴇʀ** commands.
---------------:lady_beetle:---------------

:candy:**ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ** 
*Please use* = **${ᴀʟɪᴄᴇʄɨӼ}alice**  | **${ᴀʟɪᴄᴇʄɨӼ}play** | **${ᴀʟɪᴄᴇʄɨӼ}help** *to know more.*
---------------:lady_beetle:---------------

:star:**ɴᴏᴛᴇ to** @everyone:
ᴀ channel ɴᴀᴍᴇ **ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ** inside **🔱Gascomit** has been successfully created.
Please use only that channel for any **ᴀʟɪᴄᴇ_ᴘʟᴀʏᴇʀ** commands..
---------------:lady_beetle:---------------`)
      )
      .catch(console.error);
    guild.channels
      .create("🔱𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓™", {
        type: "category",
        permissionOverwrites: [
          { id: guild.id, deny: ["VIEW_CHANNEL"] },
          { id: guild.id, allow: ["VIEW_CHANNEL"] },
        ],
      })
      .then((parent) => {
        guild.channels
          .create("ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ", {
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
ᴀʟɪᴄᴇʍʊֆɨƈ.on("message", async (message) => {
  try {
    if (message.author.bot) {
      return;
    }
    if (!message.guild) {
      message.react("❌");
      message.react("🔥");
      message.reply(
        new MessageEmbed()
          .setColor("#e69138")
          .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
          .setAuthor(`🥴 Warning! ⚠️`)
          .setURL("https://github.com/GasComIT?tab=repositories")
          .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
          .setDescription(`**Ú§êr >** ${message.author}
---------------:lady_beetle:---------------


🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
🔆-𝘔𝘶𝘴𝘪𝘤 𝘉𝘰𝘵 𝘧𝘰𝘳 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 𝘸𝘪𝘵𝘩 𝘠𝘰𝘶𝘛𝘶𝘣𝘦_𝘋𝘭, 𝘣𝘶𝘪𝘭𝘵 𝘸𝘪𝘵𝘩 𝘋𝘪𝘴𝘤𝘰𝘳𝘥.𝘫𝘴
• You are currently in a **DMChannel** and so you have been **restricted** using any **Alice 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
• Add me in your channel and then all commands will be automatically accepted.
🔰- https://github.com/GasComIT/Alice

---------------:lady_beetle:---------------`)
      );
      return;
    }
    const prefixRegex = new RegExp(
      `^(<@!?${ᴀʟɪᴄᴇʍʊֆɨƈ.user.id}>|${escapeRegex(ᴀʟɪᴄᴇʄɨӼ)})\\s*`
    );

    if (!prefixRegex.test(message.content)) {
      return;
    }
    const [matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command =
      ᴀʟɪᴄᴇʍʊֆɨƈ.commands.get(commandName) ||
      ᴀʟɪᴄᴇʍʊֆɨƈ.commands.find(
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
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#e69138")
              .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
              .setAuthor(`🥴 Warning! ⚠️`)
              .setURL("https://github.com/GasComIT?tab=repositories")
              .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
              .setDescription(`
**Ú§êr >** ${message.author}
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
      message.react("❌");
      message.react("🔥");
      message.channel
        .send(
          new MessageEmbed()
            .setColor("#e69138")
            .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
            .setAuthor(`🥴 Warning! ⚠️`)
            .setURL("https://github.com/GasComIT?tab=repositories")
            .setImage(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
            .setDescription(
              `
**Ú§êr >** ${message.author}
---------------:lady_beetle:---------------


There was an error executing that command.`
            )
        )
        .catch(console.error)
        .then((message) => {
          message.delete({ timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}` });
          return;
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
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/gascomit


**🔺Error Caught🔻**
*${ErrorAlice}*`)
    );
    console.error(ErrorAlice);
  }
});
