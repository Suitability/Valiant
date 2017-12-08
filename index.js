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
    if (msg.content === "//uptime") {
        function format(sec){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            let hours = Math.floor(sec / (60*60));
            let minutes = Math.floor(sec % (60*60) / 60);
            let seconds = Math.floor(sec % 60);
        
            return `${pad(hours)} hours ${pad(minutes)} minutes ${pad(seconds)} seconds`;
        }
        
        const uptime = process.uptime();
        msg.reply(`${format(uptime)}`);
    }
});

client.login(env.token);