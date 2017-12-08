const Discord = require("discord.js");
const client = new Discord.Client();

const env = require("./token.json")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '//hello') {
    msg.reply("Hi, I am Valiant. I am currently in development.");
  }
});

client.login(env.token);