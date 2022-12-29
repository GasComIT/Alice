// 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { MessageEmbed } = require('../𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓/src');
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { ᴀʟɪᴄᴇʟʄɨӼ, ᴀʟɪᴄᴇքʊʀɢɛʀ, canModifyQueue } = require('../ᴀʟɪᴄᴇռɛʋ/ʟᴏᴀᴅᴇʀ');
module.exports = {
    name: 'rm',
    cooldown: 3,
    execute(message, args) {
        try {
            if (message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + 'rm') && message.channel.name !== "ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ") {
                message.react('❌');
                message.react('🔥');
                message.channel
                    .send(new MessageEmbed()
                        .setColor('#FF5F15')
                        .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                        .setAuthor(`🥴 Warning! ⚠️`)
                        .setURL("https://github.com/GasComIT?tab=repositories")
                        .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                        .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓')
                        .setDescription(`**Ú§êr >** ${message.author}

**Category:** \`🔱Gascomit\`
**Channel:** \`ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀʟɪᴄᴇ** commands.`))
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                        });
                    });
                return;
            }
            if (message.content.startsWith(ᴀʟɪᴄᴇʄɨӼ + 'rm') && message.channel.name === "ᴀʟɪᴄᴇ💖ᴍᴜꜱɪᴄ") {
                const queue = message.client.queue.get(message.guild.id);
                if (!queue) {
                    message.react('❌');
                    message.react('🔥');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                            .setAuthor(`🥴 Warning! ⚠️`)
                            .setURL("https://github.com/GasComIT?tab=repositories")
                            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓')
                            .setDescription(`**Ú§êr >** ${message.author}

There is nothing in queue.`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                            });
                        });
                    return;
                }
                if (!canModifyQueue(message.member)) {
                    message.react('❌');
                    message.react('🔥');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                            .setAuthor(`🥴 Warning! ⚠️`)
                            .setURL("https://github.com/GasComIT?tab=repositories")
                            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓')
                            .setDescription(`**Ú§êr >** ${message.author}

*You need to* **join** *a voice channel first!*`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                            });
                        });
                    return;
                }
                if (!args.length) {
                    message.react('❌');
                    message.react('🔥');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                            .setAuthor(`🥴 Warning! ⚠️`)
                            .setURL("https://github.com/GasComIT?tab=repositories")
                            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓')
                            .setDescription(`**Ú§êr >** ${message.author}

⚓️**usage:**${ᴀʟɪᴄᴇʄɨӼ}rm <Queue Number>`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`
                            });
                        });
                    return;
                }
                const arguments = args.join(``);
                const songs = arguments.split(`,`).map((arg) => parseInt(arg));
                let removed = [];
                if (pattern.test(arguments)) {
                    queue.songs = queue.songs.filter((item, index) => {
                        if (songs.find((songIndex) => songIndex - 1 === index)) removed.push(item);
                        else return true;
                    });
                    message.react('💃🏽');
                    message.react('🍑');
                    queue.textChannel
                        .send(
                            new MessageEmbed()
                                .setColor('#660000')
                                .setAuthor(`🥴 Warning! ⚠️`)
                                .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                                .setURL("https://github.com/GasComIT?tab=repositories")
                                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                                .setFooter(
                                    '🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓'
                                ).setDescription(`**Ú§êr >** ${message.author}

⏺ Removed **${removed.map((music) => music.title).join(`\n`)}** from the queue.`)
                        )
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                            });
                        });
                } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
                    console.log(`we got elsed!`);
                    message.react('💃🏽');
                    message.react('🍑');
                    queue.textChannel
                        .send(
                            new MessageEmbed()
                                .setColor('#660000')
                                .setAuthor(`🥴 Warning! ⚠️`)
                                .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                                .setURL("https://github.com/GasComIT?tab=repositories")
                                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                                .setFooter(
                                    '🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓'
                                ).setDescription(`**Ú§êr >** ${message.author}

⏺ Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`)
                        )
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`,
                            });
                        });
                    return;
                } else {
                    console.log(`we got the last one`);
                    message.react('❌');
                    message.react('🔥');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle("🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
                            .setAuthor(`🥴 Warning! ⚠️`)
                            .setURL("https://github.com/GasComIT?tab=repositories")
                            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                            .setFooter('🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓')
                            .setDescription(`**Ú§êr >** ${message.author}
**usage:**${ᴀʟɪᴄᴇʄɨӼ}rm <Queue Number>`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${ᴀʟɪᴄᴇքʊʀɢɛʀ}`
                            });
                        });
                    return;
                }
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
