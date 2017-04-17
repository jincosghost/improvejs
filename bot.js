const Discord = require("discord.js");
const settings = require("./settins.json");

var bot = new Discord.Client({
	autorun: true
});
var prefix = settings.prefix

bot.on("ready", () => {
	console.log("-------" + `Bot is ready.` + "-------");
});

bot.on("message", msg => {
  let command = msg.content.toLowerCase().slice(prefix.length).split(" ");

  if (command[0] == "hey" || "hello") {
    return msg.channel.sendMessage(`Hello @${msg.user}!`);
  }
}

bot.login(settings.token);
