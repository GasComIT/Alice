#   =============================================================================================================================
#   GNU GENERAL PUBLIC LICENSE
#   Version 3, 29 June 2007
#   Copyright (C) 2007 Free Software Foundation
#   Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
#   of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
#   ❣️April
#   Discord Music YouTube player
#   has been licensed under GNU General Public License
#   𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓
#   =============================================================================================================================
FROM kalilinux/kali-rolling
RUN apt update && apt upgrade -y && apt install git -y 
RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
RUN apt install nodejs
RUN npm install -g yarn
RUN git clone https://github.com/GasComIT/Alice.git
RUN cd Alice
RUN yarn
WORKDIR /Alice
CMD nodemon 🍑ᴀʟɪᴄᴇ💃🏽/ᴀʟɪᴄᴇ🍃ʍʊֆɨƈ.js
#   =============================================================================================================================
#   GNU GENERAL PUBLIC LICENSE
#   Version 3, 29 June 2007
#   Copyright (C) 2007 Free Software Foundation
#   Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
#   of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
#   ❣️April
#   Discord Music YouTube player
#   has been licensed under GNU General Public License
#   𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓
#   =============================================================================================================================
