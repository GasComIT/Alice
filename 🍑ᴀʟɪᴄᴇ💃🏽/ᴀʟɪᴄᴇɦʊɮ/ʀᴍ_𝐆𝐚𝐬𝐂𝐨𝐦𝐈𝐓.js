// πα΄ΚΙͺα΄α΄ππ½by π GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const { MessageEmbed } = require('../πππ¬ππ¨π¦ππ/src');
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
const { α΄ΚΙͺα΄α΄ΚΚΙ¨ΣΌ, α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ, canModifyQueue } = require('../α΄ΚΙͺα΄α΄ΥΌΙΚ/Κα΄α΄α΄α΄Κ');
module.exports = {
    name: 'rm',
    cooldown: 3,
    execute(message, args) {
        try {
            if (message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + 'rm') && message.channel.name !== "α΄ΚΙͺα΄α΄πα΄α΄κ±Ιͺα΄") {
                message.react('β');
                message.react('π₯');
                message.channel
                    .send(new MessageEmbed()
                        .setColor('#FF5F15')
                        .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                        .setAuthor(`π₯΄ Warning! β οΈ`)
                        .setURL("https://github.com/GasComIT?tab=repositories")
                        .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                        .setFooter('π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ')
                        .setDescription(`**ΓΒ§Γͺr >** ${message.author}

**Category:** \`π±Gascomit\`
**Channel:** \`α΄ΚΙͺα΄α΄β£οΈΚΚΦΙ¨Ζ\`
β οΈPlease use ππ» for any **α΄ΚΙͺα΄α΄** commands.`))
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                        });
                    });
                return;
            }
            if (message.content.startsWith(α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ + 'rm') && message.channel.name === "α΄ΚΙͺα΄α΄πα΄α΄κ±Ιͺα΄") {
                const queue = message.client.queue.get(message.guild.id);
                if (!queue) {
                    message.react('β');
                    message.react('π₯');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                            .setAuthor(`π₯΄ Warning! β οΈ`)
                            .setURL("https://github.com/GasComIT?tab=repositories")
                            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                            .setFooter('π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ')
                            .setDescription(`**ΓΒ§Γͺr >** ${message.author}

There is nothing in queue.`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                            });
                        });
                    return;
                }
                if (!canModifyQueue(message.member)) {
                    message.react('β');
                    message.react('π₯');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                            .setAuthor(`π₯΄ Warning! β οΈ`)
                            .setURL("https://github.com/GasComIT?tab=repositories")
                            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                            .setFooter('π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ')
                            .setDescription(`**ΓΒ§Γͺr >** ${message.author}

*You need to* **join** *a voice channel first!*`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                            });
                        });
                    return;
                }
                if (!args.length) {
                    message.react('β');
                    message.react('π₯');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                            .setAuthor(`π₯΄ Warning! β οΈ`)
                            .setURL("https://github.com/GasComIT?tab=repositories")
                            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                            .setFooter('π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ')
                            .setDescription(`**ΓΒ§Γͺr >** ${message.author}

βοΈ**usage:**${α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ}rm <Queue Number>`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`
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
                    message.react('ππ½');
                    message.react('π');
                    queue.textChannel
                        .send(
                            new MessageEmbed()
                                .setColor('#660000')
                                .setAuthor(`π₯΄ Warning! β οΈ`)
                                .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                                .setURL("https://github.com/GasComIT?tab=repositories")
                                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                                .setFooter(
                                    'π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ'
                                ).setDescription(`**ΓΒ§Γͺr >** ${message.author}

βΊ Removed **${removed.map((music) => music.title).join(`\n`)}** from the queue.`)
                        )
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                            });
                        });
                } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
                    console.log(`we got elsed!`);
                    message.react('ππ½');
                    message.react('π');
                    queue.textChannel
                        .send(
                            new MessageEmbed()
                                .setColor('#660000')
                                .setAuthor(`π₯΄ Warning! β οΈ`)
                                .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                                .setURL("https://github.com/GasComIT?tab=repositories")
                                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                                .setFooter(
                                    'π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ'
                                ).setDescription(`**ΓΒ§Γͺr >** ${message.author}

βΊ Removed **${queue.songs.splice(args[0] - 1, 1)[0].title}** from the queue.`)
                        )
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                            });
                        });
                    return;
                } else {
                    console.log(`we got the last one`);
                    message.react('β');
                    message.react('π₯');
                    message.channel
                        .send(new MessageEmbed()
                            .setColor('#FF5F15')
                            .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
                            .setAuthor(`π₯΄ Warning! β οΈ`)
                            .setURL("https://github.com/GasComIT?tab=repositories")
                            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                            .setFooter('π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ')
                            .setDescription(`**ΓΒ§Γͺr >** ${message.author}
**usage:**${α΄ΚΙͺα΄α΄ΚΙ¨ΣΌ}rm <Queue Number>`))
                        .catch(console.error)
                        .then((message) => {
                            message.delete({
                                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`
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
π°**In telegram group** = https://t.me/Gascomit


**πΊError Caughtπ»**
*${ErrorAlice}*`)
            );
            console.error(ErrorAlice);
        }
    },
};
