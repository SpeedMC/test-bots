const Discord = require('discord.js');
const client = new Discord.Client(); 
const fs = require("fs"); 
const moment = require("moment");

client.on('ready', () => {
	console.log('I am ready!'); 
  });
   
client.on("message", (message) => {
if (message.content.startsWith("make")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel('rules', 'text');
    message.guild.createChannel('welcome', 'text');
    message.guild.createChannel('chat', 'text');
    message.guild.createChannel('bo7', 'text');
    message.guild.createChannel('cuttweet', 'text');
    message.guild.createChannel('bot-command', 'text');
    message.guild.createChannel('pic', 'text');
    message.guild.createChannel('games', 'text');
    message.guild.createChannel('Swalf', 'voice');
    message.guild.createChannel('Coffe', 'voice');
    message.guild.createChannel('Relax', 'voice');
    message.guild.createChannel('Sweet', 'voice');
    message.guild.createChannel('Events', 'voice');
    message.guild.createCategory('Music','category'); 
	 message.guild.createChannel('Music', 'voice');
    message.channel.sendMessage('تـم إنـشاء الرومات')
}
}); 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
