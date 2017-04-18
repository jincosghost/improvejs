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

  let command = msg.content.toLowerCase().slice(prefix.length).split(" ");

  if (command[0] == "hey" || command[0] == "hello") {
    return msg.channel.sendMessage(`Hello @!${msg.author.id}!`);
  }
});

bot.login(secrets.token);
