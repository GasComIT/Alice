// ============================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to ๐ฐ๐ผ๐ฝ๐ ๐ฎ๐ป๐ฑ ๐ฑ๐ถ๐๐๐ฟ๐ถ๐ฏ๐๐๐ฒ verbatim copies
// of this license document, ๐ฏ๐๐ ๐ฐ๐ต๐ฎ๐ป๐ด๐ถ๐ป๐ด ๐ถ๐ ๐ถ๐ ๐ป๐ผ๐ ๐ฎ๐น๐น๐ผ๐๐ฒ๐ฑ.
// ๐ แดสษชแดแด ๐๐ฝby ๐ GasComIT
// Discord Music YouTube player
// has been licensed under GNU General Public License
// ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) 2023 | ๐๐๐ฌ๐๐จ๐ฆ๐๐
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
exports.แดสษชแดแดศถสษฎษ = process.env.AliceYT;
exports.แดสษชแดแดสษจำผ = process.env.AliceFIX;
exports.แดสษชแดแดำษีผ = process.env.AliceES;
exports.แดสษชแดแดแดแดx = process.env.AliceMAX;
exports.แดสษชแดแดแด แดส = process.env.AliceVOL;
exports.แดสษชแดแดแดกแดแดแด = process.env.AliceWAKE;
exports.แดสษชแดแดึสสษขษส = process.env.AliceCLEANER;
