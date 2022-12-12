const { Telegraf } = require("telegraf");
const { BOT_NAME, BOT_TOKEN } = process.env;

const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.on(
    "message",
    (ctx) => {
        console.dir(JSON.parse(JSON.stringify(ctx)));
        // console.log("FROM :", ctx.update.message.from);
        console.log("CHAT :", ctx.update.message.chat);
        // console.log("AGENT :", ctx.telegram.options.agent);
        // console.log("DATE :", new Date(ctx.update.message.date));
    },
);
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();