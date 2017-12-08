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
  if (msg.content === "//uptime")
    function format(seconds){
        function pad(s){
        return (s < 10 ? '0' : '') + s;
        }
        const hours = Math.floor(seconds / (60*60));
        const minutes = Math.floor(seconds % (60*60) / 60);
        const seconds = Math.floor(seconds % 60);
    
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    
    const uptime = process.uptime();
    msg.reply(`${format(uptime)}`);
});

client.login(env.token);