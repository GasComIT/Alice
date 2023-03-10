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
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) 2023 | ๐๐๐ฌ๐๐จ๐ฆ๐๐
    # ๐แดสษชแดแด๐๐ฝby ๐ GasComIT
    # ================================
    load_dotenv("./.env")
    AliceES = getenv("AliceES")
    แดสษชแดแดสษจำผ = getenv("BOTFIX")
    แดสษชแดแดสสึษจฦ = commands.Bot(command_prefix=แดสษชแดแดสษจำผ,
                              test_guilds=[889786523426373632])
    # ================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) 2023 | ๐๐๐ฌ๐๐จ๐ฆ๐๐ 
    # ๐แดสษชแดแด๐๐ฝby ๐ GasComIT
    # ================================
    @แดสษชแดแดสสึษจฦ.slash_command(name="ping", description="๐แดสษชแดแด๐๐ฝby ๐ GasComIT")
    async def ping(speaker):
        await speaker.response.send_message(
            f"Pong! {round(แดสษชแดแดสสึษจฦ.latency * 1000)}ms")

    # ===============================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) 2023 | ๐๐๐ฌ๐๐จ๐ฆ๐๐ 
    # ๐แดสษชแดแด๐๐ฝby ๐ GasComIT
    # ===============================
    @แดสษชแดแดสสึษจฦ.slash_command(name="help", description="๐แดสษชแดแด๐๐ฝby ๐ GasComIT")
    async def help(speaker):
        embed = disnake.Embed(
            title="๐แดสษชแดแด๐๐ฝby ๐ GasComIT",
            description=f"""
*๐๐ฝโขโชโขโช๐๐๐ง๐ฎ๐๐ฅ-๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌโชโขโชโข๐*
โข **{แดสษชแดแดสษจำผ}filter** = Music filters when playing audio.
โข **{แดสษชแดแดสษจำผ}help** = Display this commands and descriptions.
โข **{แดสษชแดแดสษจำผ}alice** = Display the  license and a few more info.
โข **{แดสษชแดแดสษจำผ}np** = Show now playing song.
โข **{แดสษชแดแดสษจำผ}ping** = Check server ping of แดสษชแดแดสสึษจฦ.
โข **{แดสษชแดแดสษจำผ}play** = Plays audio from YouTube.
โข **{แดสษชแดแดสษจำผ}list** = Play a playlist from YouTube.
โข **{แดสษชแดแดสษจำผ}queue** = Show the music queue and now playing.
โข **{แดสษชแดแดสษจำผ}remove** = Remove song from the queue.
โข **{แดสษชแดแดสษจำผ}resume** = Resume currently playing music.
โข **{แดสษชแดแดสษจำผ}shuffle** = Shuffle music queue.
โข **{แดสษชแดแดสษจำผ}skipto** = Skip to the selected queue number.

*๐โขโชโขโช๐๐ฅ๐๐ฒ๐๐ซ-๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌโชโขโชโข*
โข **โญ** = Skip the currently playing song.
โข **โธ** = Pause/Resume the currently playing music.
โข **๐** = Mute/Unmute the currently playing music.
โข **๐** = Toggle music loop.
โข **โบ** = Stops the currently playing music queue.
โข **๐|๐ {แดสษชแดแดสษจำผ}vol** = Change volume of currently playing music.

**โ๏ธCoded Using:**
โข Discord.js_Node=v16+
โข Disnake.py_Python=3.9""",
            color=disnake.Color.blurple(),
        )
        embed.set_thumbnail(
            url="https://i.postimg.cc/sXLzq8k1/Alice.jpg")
        embed.set_image(url="https://i.postimg.cc/sXLzq8k1/Alice.jpg")
        embed.set_footer(text="๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2023 GasComIT")
        if speaker.channel.name == "แดสษชแดแดโฃ๏ธสสึษจฦ":
            await speaker.response.send_message(embed=embed)
        else:
            await speaker.author.send(embed=embed)

    # =================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) 2023 | ๐๐๐ฌ๐๐จ๐ฆ๐๐
    # ๐แดสษชแดแด๐๐ฝby ๐ GasComIT
    # =================================
    @แดสษชแดแดสสึษจฦ.slash_command(name="Alice", description="๐แดสษชแดแด๐๐ฝby ๐ GasComIT")
    async def Alice(speaker):
        embed = disnake.Embed(
            title="๐แดสษชแดแด๐๐ฝby ๐ GasComIT",
            description=f"""=========โ๏ธ=========

โข> **Alice** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.

โข> **Alice** is licensed under GNU General Public License ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) 2023 | ๐๐๐ฌ๐๐จ๐ฆ๐๐

โข> use **{แดสษชแดแดสษจำผ}help** to learn how to use **Alice**

**โ๏ธCoded Using:**
โข Discord.js_Node=v16+
โข Disnake.py_Python=3.9""",
            color=disnake.Color.blurple(),
        )
        embed.set_thumbnail(
            url="https://i.postimg.cc/sXLzq8k1/Alice.jpg")
        embed.set_image(url="https://i.postimg.cc/sXLzq8k1/Alice.jpg")
        embed.set_footer(text="๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2023 ๐๐๐ฌ๐๐จ๐ฆ๐๐")
        if speaker.channel.name == "แดสษชแดแดโฃ๏ธสสึษจฦ":
            await speaker.response.send_message(embed=embed)
        else:
            await speaker.author.send(embed=embed)

    # =================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) 2023 | ๐๐๐ฌ๐๐จ๐ฆ๐๐
    # ๐แดสษชแดแด๐๐ฝby ๐ GasComIT 
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
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) 2023 | ๐๐๐ฌ๐๐จ๐ฆ๐๐ 
    # ๐แดสษชแดแด๐๐ฝby ๐ GasComIT
    # ============================
    AliceLog.info(
        "~~~~~~~~~~~~~~~~~~~~~~~>  ๐แดสษชแดแด๐๐ฝby ๐ GasComIT <~~~~~~~~~~~~~~~~~~~~~~~"
    )
    AliceLog.info("๐๐ฝAlice Discord Handler Started")
    AliceLog.info(
        "~~~~~~~~~~~~~~~~~~~~~~~>  ๐แดสษชแดแด๐๐ฝby ๐ GasComIT <~~~~~~~~~~~~~~~~~~~~~~~"
    )
    แดสษชแดแดสสึษจฦ.run(AliceES)
except Exception as e:
    print(e)
