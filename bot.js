const Discord = require("discord.js");
const settings = require("./settings.json");
const secrets = require("./secret.json");

var bot = new Discord.Client();
var prefix = settings.prefix;

bot.on("ready", () => {
  console.log("-------" + `Bot is ready.` + "-------");
});

bot.on("message", msg => {
  // If the message comes from this or another bot, ignore it.
  // this avoids bots getting stuck in a loop of triggering each other.
  if (msg.author.bot || msg.author === bot.user) return;

  let command = msg.content.toLowerCase().slice(prefix.length).split(" ")[0];

  if (command === "hey" || command === "hello") {
    return msg.channel.sendMessage(`Hello @!${msg.author.id}!`);
  }
});

// warning and error handling
bot.on('error', console.error);
bot.on('warn', console.warn);

bot.login(secrets.token);
