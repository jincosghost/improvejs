const Discord = require("discord.js");
const settings = require("./settings.json");
const secrets = require("./secret.json");

var bot = new Discord.Client({
  autorun: true
});
var prefix = settings.prefix;

bot.on("ready", () => {
  console.log("-------" + `Bot is ready.` + "-------");
});

bot.on("message", msg => {
  let command = msg.content.toLowerCase().slice(prefix.length).split(" ");

  if (command[0] == "hey" || command[0] == "hello") {
    return msg.channel.sendMessage(`Hello @!${msg.author.id}!`);
  }
});

bot.login(secrets.token);
