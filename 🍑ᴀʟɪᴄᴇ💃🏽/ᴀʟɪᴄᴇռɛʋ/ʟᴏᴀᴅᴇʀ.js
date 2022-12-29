// ============================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// 🍑 ᴀʟɪᴄᴇ 💃🏽by 🍃 GasComIT
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓
// https://github.com/GasComIT/Alice
// ============================================

require("dotenv").config();
exports.canModifyQueue = (member) => {
  const { channelID } = member.voice;
  const botChannel = member.guild.voice.channelID;
  if (channelID !== botChannel) {
    return;
  } else {
    return true;
  }
};
exports.ᴀʟɪᴄᴇȶʊɮɛ = process.env.AliceYT;
exports.ᴀʟɪᴄᴇʄɨӼ = process.env.AliceFIX;
exports.ᴀʟɪᴄᴇӄɛռ = process.env.AliceES;
exports.ᴀʟɪᴄᴇᴍᴀx = process.env.AliceMAX;
exports.ᴀʟɪᴄᴇᴠᴏʟ = process.env.AliceVOL;
exports.ᴀʟɪᴄᴇᴡᴀᴋᴇ = process.env.AliceWAKE;
exports.ᴀʟɪᴄᴇքʊʀɢɛʀ = process.env.AliceCLEANER;
