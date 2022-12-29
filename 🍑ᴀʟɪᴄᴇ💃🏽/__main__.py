try:
    import disnake
    import asyncio
    import logging
    from loguru import *
    from os import getenv
    from dotenv import load_dotenv
    from disnake.ext import commands
    # ================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓
    # 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
    # ================================
    load_dotenv("./.env")
    AliceES = getenv("AliceES")
    ᴀʟɪᴄᴇʄɨӼ = getenv("BOTFIX")
    ᴀʟɪᴄᴇʍʊֆɨƈ = commands.Bot(command_prefix=ᴀʟɪᴄᴇʄɨӼ,
                              test_guilds=[889786523426373632])
    # ================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓 
    # 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
    # ================================
    @ᴀʟɪᴄᴇʍʊֆɨƈ.slash_command(name="ping", description="🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
    async def ping(speaker):
        await speaker.response.send_message(
            f"Pong! {round(ᴀʟɪᴄᴇʍʊֆɨƈ.latency * 1000)}ms")

    # ===============================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓 
    # 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
    # ===============================
    @ᴀʟɪᴄᴇʍʊֆɨƈ.slash_command(name="help", description="🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
    async def help(speaker):
        embed = disnake.Embed(
            title="🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT",
            description=f"""
*💃🏽•♪•♪𝐌𝐚𝐧𝐮𝐚𝐥-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•🍑*
• **{ᴀʟɪᴄᴇʄɨӼ}filter** = Music filters when playing audio.
• **{ᴀʟɪᴄᴇʄɨӼ}help** = Display this commands and descriptions.
• **{ᴀʟɪᴄᴇʄɨӼ}alice** = Display the  license and a few more info.
• **{ᴀʟɪᴄᴇʄɨӼ}np** = Show now playing song.
• **{ᴀʟɪᴄᴇʄɨӼ}ping** = Check server ping of ᴀʟɪᴄᴇʍʊֆɨƈ.
• **{ᴀʟɪᴄᴇʄɨӼ}play** = Plays audio from YouTube.
• **{ᴀʟɪᴄᴇʄɨӼ}list** = Play a playlist from YouTube.
• **{ᴀʟɪᴄᴇʄɨӼ}queue** = Show the music queue and now playing.
• **{ᴀʟɪᴄᴇʄɨӼ}remove** = Remove song from the queue.
• **{ᴀʟɪᴄᴇʄɨӼ}resume** = Resume currently playing music.
• **{ᴀʟɪᴄᴇʄɨӼ}shuffle** = Shuffle music queue.
• **{ᴀʟɪᴄᴇʄɨӼ}skipto** = Skip to the selected queue number.

*📌•♪•♪𝐏𝐥𝐚𝐲𝐞𝐫-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•*
• **⏭** = Skip the currently playing song.
• **⏸** = Pause/Resume the currently playing music.
• **🔇** = Mute/Unmute the currently playing music.
• **🔁** = Toggle music loop.
• **⏺** = Stops the currently playing music queue.
• **🔊|🔉 {ᴀʟɪᴄᴇʄɨӼ}vol** = Change volume of currently playing music.

**⚜️Coded Using:**
• Discord.js_Node=v16+
• Disnake.py_Python=3.9""",
            color=disnake.Color.blurple(),
        )
        embed.set_thumbnail(
            url="https://i.postimg.cc/sXLzq8k1/Alice.jpg")
        embed.set_image(url="https://i.postimg.cc/sXLzq8k1/Alice.jpg")
        embed.set_footer(text="🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2023 GasComIT")
        if speaker.channel.name == "ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ":
            await speaker.response.send_message(embed=embed)
        else:
            await speaker.author.send(embed=embed)

    # =================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓
    # 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
    # =================================
    @ᴀʟɪᴄᴇʍʊֆɨƈ.slash_command(name="Alice", description="🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT")
    async def Alice(speaker):
        embed = disnake.Embed(
            title="🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT",
            description=f"""=========⚜️=========

•> **Alice** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.

•> **Alice** is licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓

•> use **{ᴀʟɪᴄᴇʄɨӼ}help** to learn how to use **Alice**

**⚜️Coded Using:**
• Discord.js_Node=v16+
• Disnake.py_Python=3.9""",
            color=disnake.Color.blurple(),
        )
        embed.set_thumbnail(
            url="https://i.postimg.cc/sXLzq8k1/Alice.jpg")
        embed.set_image(url="https://i.postimg.cc/sXLzq8k1/Alice.jpg")
        embed.set_footer(text="🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2023 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓")
        if speaker.channel.name == "ᴀʟɪᴄᴇ❣️ʍʊֆɨƈ":
            await speaker.response.send_message(embed=embed)
        else:
            await speaker.author.send(embed=embed)

    # =================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓
    # 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT 
    # =================================
    class InterceptHandler(logging.Handler):
        LEVELS_MAP = {
            logging.CRITICAL: "CRITICAL",
            logging.ERROR: "ERROR",
            logging.WARNING: "WARNING",
            logging.INFO: "INFO",
            logging.DEBUG: "DEBUG"
        }

        def _get_level(self, record):
            return self.LEVELS_MAP.get(record.levelno, record.levelno)

        def emit(self, record):
            logger_opt = logger.opt(depth=6,
                                    exception=record.exc_info,
                                    ansi=True,
                                    lazy=True)
            logger_opt.log(self._get_level(record), record.getMessage())

    logging.basicConfig(handlers=[InterceptHandler()], level=logging.INFO)
    AliceLog = logging.getLogger(__name__)
    # =============================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 2023 | 𝐆𝐚𝐬𝐂𝐨𝐦𝐈𝐓 
    # 🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT
    # ============================
    AliceLog.info(
        "~~~~~~~~~~~~~~~~~~~~~~~>  🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT <~~~~~~~~~~~~~~~~~~~~~~~"
    )
    AliceLog.info("💃🏽Alice Discord Handler Started")
    AliceLog.info(
        "~~~~~~~~~~~~~~~~~~~~~~~>  🍑ᴀʟɪᴄᴇ💃🏽by 🍃 GasComIT <~~~~~~~~~~~~~~~~~~~~~~~"
    )
    ᴀʟɪᴄᴇʍʊֆɨƈ.run(AliceES)
except Exception as e:
    print(e)
