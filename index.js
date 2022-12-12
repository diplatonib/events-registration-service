const { Telegraf } = require("telegraf");
const { BOT_NAME, BOT_TOKEN, HOST_NAME, PORT } = process.env;


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
        console.log(bot.secretPathComponent());
    },
);

bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch({

    webhook: {
    // Public domain for webhook; e.g.: example.com
    domain: HOST_NAME,

    // Port to listen on; e.g.: 8080
    port: PORT ,

    // Optional path to listen for.
    // `bot.secretPathComponent()` will be used by default
    hookPath: "/webhook",

    // Optional secret to be sent back in a header for security.
    // e.g.: `crypto.randomBytes(64).toString("hex")`
    // secretToken: randomAlphaNumericString,
  },
});