// πα΄ΚΙͺα΄α΄ππ½by π GasComIT
// https://github.com/GasComIT/Alice
// https://i.postimg.cc/sXLzq8k1/Alice.jpg

const ytdl = require("ytdl-core-discord");
const {
  canModifyQueue,
  α΄ΚΙͺα΄α΄α΄‘α΄α΄α΄,
  α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ,
} = require("../α΄ΚΙͺα΄α΄ΥΌΙΚ/Κα΄α΄α΄α΄Κ");
const { MessageEmbed } = require("../πππ¬ππ¨π¦ππ/src");
const getVideoId = require("get-video-id");
module.exports = {
  async play(music, message) {
    try {
      const queue = message.client.queue.get(message.guild.id);
      if (!music) {
        setTimeout(function () {
          if (queue.connection.dispatcher && message.guild.me.voice.channel) {
            return;
          }
          queue.channel.leave();
          queue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#ff0000")
                .setAuthor(`π₯΄ Warning! β οΈ`)
                .setURL("https://github.com/GasComIT?tab=repositories")
                .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                .setDescription(`**α΄ΚΙͺα΄α΄β£οΈΚΚΦΙ¨Ζ has left the voice channel!**`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
        }, α΄α΄ΚΙͺΚα΄‘α΄α΄α΄);
        const queue = message.client.queue.get(message.guild.id);
        message.client.queue.delete(message.guild.id);
        return;
      }
      let musicfetcher = null;
      let musicfetchergenre = music.url.includes("youtube.com")
        ? "opus"
        : "ogg/opus";
      try {
        if (music.url.includes("youtube.com")) {
          musicfetcher = await ytdl(music.url, {
            highWaterMark: 1 << 25,
          });
        } else {
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
**Only YouTube playing/streaming is allowed**`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
              });
            });
          return;
        }
      } catch (error) {
        if (queue) {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
        console.error(error);
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
**Error:** 
*${error}*`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
            });
          });
        return;
      }
      const dispatcher = queue.connection
        .play(musicfetcher, { type: musicfetchergenre })
        .on("finish", () => {
          if (collector && !collector.ended) collector.stop();
          queue.connection.removeAllListeners("disconnect");
          if (queue.loop) {
            let lastSong = queue.songs.shift();
            queue.songs.push(lastSong);
            module.exports.play(queue.songs[0], message);
          } else {
            queue.songs.shift();
            module.exports.play(queue.songs[0], message);
          }
        })
        .on("error", (err) => {
          console.error(err);
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        });
      dispatcher.setVolumeLogarithmic(queue.volume / 100);
      try {
        const { id } = getVideoId(`${music.url}`);
        message.react("ππ½");
        message.react("π");
        var AlicePlayingMessage = await queue.textChannel.send(
          new MessageEmbed()
            .setColor("#ff0000")
            .setTitle("πα΄ΚΙͺα΄α΄ππ½by π GasComIT")
            .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
            .setImage(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
            .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
            .setDescription(`*π―Direct Streaming from ππ¨π?ππ?ππ*

TΖ¬IΖ¬ILΞ£π·**[${music.title}](${music.url})**
RΞ£QUΞ£SΖ¬Ξ£D_BYπ\`${message.author}\``)
        );
        await queue.textChannel
          .send(
            new MessageEmbed().setColor("#ff0000").setDescription(`
*ππ½β’βͺβ’βͺππ₯ππ²ππ«-ππ¨π¦π¦ππ§ππ¬βͺβ’βͺβ’π*
---------------:lady_beetle:---------------

β’ β­ = **Skip the currently playing music.**
β’ βΈ = **Pause/Resume the currently playing music.**
β’ π = **Mute/Unmute the currently playing music.**
β’ π = **Change volume of currently playing music.**
β’ π = **Toggle music loop.**
β’ βΊ = **Stops the currently playing music queue.**
`)
          )
          .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: 30000,
            });
          });
        await AlicePlayingMessage.react("β­");
        await AlicePlayingMessage.react("βΈ");
        await AlicePlayingMessage.react("π");
        await AlicePlayingMessage.react("π");
        await AlicePlayingMessage.react("π");
        await AlicePlayingMessage.react("π");
        await AlocePlayingMessage.react("βΊ");
      } catch (error) {
        console.error(error);
      }
      const filter = (reaction, user) => user.id !== message.client.user.id;
      var collector = AlicePlayingMessage.createReactionCollector(filter, {
        time: music.duration > 0 ? music.duration * 1000 : 600000,
      });
      collector.on("collect", (reaction, user) => {
        if (!queue) {
          return;
        }
        const member = message.guild.member(user);
        switch (reaction.emoji.name) {
          case "β­":
            queue.playing = true;
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
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
**You need to join a voice channel first!**`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                  });
                });
              return;
            }
            queue.connection.dispatcher.end();
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`π₯΄ Warning! β οΈ`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                  .setDescription(`**ΓΒ§Γͺr >** ${message.author}
β© **Skipped the music**`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                });
              });
            collector.stop();
            break;
          case "βΈ":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
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

**You need to join a voice channel first!**`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                  });
                });
              return;
            }
            if (queue.playing) {
              queue.playing = !queue.playing;
              queue.connection.dispatcher.pause(true);
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#ff0000")
                    .setAuthor(`π₯΄ Warning! β οΈ`)
                    .setURL("https://github.com/GasComIT?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                    .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                    .setDescription(`**ΓΒ§Γͺr >** ${message.author}
π¦ **Paused the music.**`)
                )
                .catch(console.error);
            } else {
              queue.playing = !queue.playing;
              queue.connection.dispatcher.resume();
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#ff0000")
                    .setAuthor(`π₯΄ Warning! β οΈ`)
                    .setURL("https://github.com/GasComIT?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                    .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                    .setDescription(`**ΓΒ§Γͺr >** ${message.author}
βΆ **Resumed the music!**`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                  });
                });
            }
            break;
          case "π":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
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

**You need to join a voice channel first!**`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                  });
                });
              return;
            }
            queue.muted = !queue.muted;
            if (queue.muted) {
              queue.connection.dispatcher.setVolumeLogarithmic(0);
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#ff0000")
                    .setAuthor(`π₯΄ Warning! β οΈ`)
                    .setURL("https://github.com/GasComIT?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                    .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                    .setDescription(`**ΓΒ§Γͺr >** ${message.author}

π Muted the music!`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                  });
                });
            } else {
              queue.connection.dispatcher.setVolumeLogarithmic(
                queue.volume / 100
              );
              queue.textChannel
                .send(
                  new MessageEmbed()
                    .setColor("#ff0000")
                    .setAuthor(`π₯΄ Warning! β οΈ`)
                    .setURL("https://github.com/GasComIT?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                    .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                    .setDescription(`**ΓΒ§Γͺr >** ${message.author}

π Unmuted the music!`)
                )
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                  });
                });
            }
            break;
          case "π":
            reaction.users.remove(user).catch(console.error);
            if (queue.volume == 0) {
              return;
            }
            if (!canModifyQueue(member)) {
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
            queue.volume = Math.max(queue.volume - 10, 0);
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`π₯΄ Warning! β οΈ`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                  .setDescription(`**ΓΒ§Γͺr >** ${message.author}

π Decreased the volume, 
Volume now at = **${queue.volume}%**`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                });
              });
            break;
          case "π":
            reaction.users.remove(user).catch(console.error);
            if (queue.volume == 100) {
              return;
            }
            if (!canModifyQueue(member)) {
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
            queue.volume = Math.min(queue.volume + 10, 100);
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`π₯΄ Warning! β οΈ`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                  .setDescription(`**ΓΒ§Γͺr >** ${message.author}

π Increased the volume, the volume is now ${queue.volume}%`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                });
              });
            break;
          case "π":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
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
            queue.loop = !queue.loop;
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#ff0000")
                  .setAuthor(`π₯΄ Warning! β οΈ`)
                  .setURL("https://github.com/GasComIT?tab=repositories")
                  .setThumbnail(`https://i.postimg.cc/sXLzq8k1/Alice.jpg`)
                  .setFooter("π°ππΆπ°π²π»ππ²: Ι’Ι΄α΄(α΄)2023 πππ¬ππ¨π¦ππ")
                  .setDescription(`**ΓΒ§Γͺr >** ${message.author}

Loop is now ${queue.loop ? "**Turned On**" : "**Turned Off**"}`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${α΄ΚΙͺα΄α΄ΦΚΚΙ’ΙΚ}`,
                });
              });
            message.client.queue.delete(message.guild.id);
            break;
          case "βΊ":
            reaction.users.remove(user).catch(console.error);
            if (!canModifyQueue(member)) {
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
            queue.songs = [];
            try {
              queue.connection.dispatcher.end();
            } catch (error) {
              console.error(error);
              queue.connection.disconnect();
            }
            collector.stop();
            break;
          default:
            reaction.users.remove(user).catch(console.error);
            break;
        }
      });
      collector.on("end", () => {
        AlicePlayingMessage.reactions.removeAll().catch(console.error);
      });
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
