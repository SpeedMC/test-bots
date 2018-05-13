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
    message.guild.createChannel('Music', 'voice');
    message.channel.sendMessage('تـم إنـشاء الرومات')
}
}); 

client.on('message', message => {                      
if(!message.channel.guild) return;
   if(message.content.startsWith(prefix + 'colors')) {
   if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
   message.channel.sendFile(`https://cdn.discordapp.com/attachments/435763332461625354/438321483643879424/5561996-nature-background-images.png`).then(msg => {
   msg.react('❤')
   .then(() => msg.react('💚'))
   .then(() => msg.react('💜'))
   .then(() => msg.react('💛'))
   .then(() => msg.react('🖤'))
   .then(() => msg.react('💙'))
   .then(() => msg.react('❌'))
 
 
   let redFilter = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
   let greenFilter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
   let purpleFilter = (reaction, user) => reaction.emoji.name === '💜' && user.id === message.author.id;
   let yellowFilter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
   let blackFilter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
   let blueFilter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
   let nooneFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
   let red = msg.createReactionCollector(redFilter, { time: 15000 });
   let green = msg.createReactionCollector(greenFilter, { time: 15000 });
   let purple = msg.createReactionCollector(purpleFilter, { time: 15000 });
   let yellow = msg.createReactionCollector(yellowFilter, { time: 15000 });
   let black = msg.createReactionCollector(blackFilter, { time: 15000 });
   let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
   let noone = msg.createReactionCollector(nooneFilter, { time: 15000 });
 
   red.on("collect", r => {
       message.member.addRole(message.guild.roles.find("name", "red"));
       message.member.removeRole(message.guild.roles.find("name", "black"));
       message.member.removeRole(message.guild.roles.find("name", "yellow"));
       message.member.removeRole(message.guild.roles.find("name", "purple"));
       message.member.removeRole(message.guild.roles.find("name", "green"));
       message.member.removeRole(message.guild.roles.find("name", "blue"));
       msg.delete();
       message.channel.send(`**تم اعطائك اللون __الاحمر__.**`).then(m => m.delete(5000));
 
       })
     
       green.on("collect", r => {
           message.member.addRole(message.guild.roles.find("name", "green"));
           message.member.removeRole(message.guild.roles.find("name", "black"));
           message.member.removeRole(message.guild.roles.find("name", "yellow"));
           message.member.removeRole(message.guild.roles.find("name", "purple"));
           message.member.removeRole(message.guild.roles.find("name", "red"));
           message.member.removeRole(message.guild.roles.find("name", "blue"));
           msg.delete();
           message.channel.send(`**تم اعطائك اللون __الاخضر__.**`).then(m => m.delete(5000));
 
           })
         
           purple.on("collect", r => {
               message.member.addRole(message.guild.roles.find("name", "purple"));
               message.member.removeRole(message.guild.roles.find("name", "black"));
               message.member.removeRole(message.guild.roles.find("name", "yellow"));
               message.member.removeRole(message.guild.roles.find("name", "green"));
               message.member.removeRole(message.guild.roles.find("name", "red"));
               message.member.removeRole(message.guild.roles.find("name", "blue"));
               msg.delete();
               message.channel.send(`**تم اعطائك اللون __البنفسجي__.**`).then(m => m.delete(1000));
 
               })
             
               yellow.on("collect", r => {
                   message.member.addRole(message.guild.roles.find("name", "yellow"));
                   message.member.removeRole(message.guild.roles.find("name", "black"));
                   message.member.removeRole(message.guild.roles.find("name", "purple"));
                   message.member.removeRole(message.guild.roles.find("name", "green"));
                   message.member.removeRole(message.guild.roles.find("name", "red"));
                   message.member.removeRole(message.guild.roles.find("name", "blue"));
                   msg.delete();
                   message.channel.send(`**تم اعطائك اللون __الاصفر__.**`).then(m => m.delete(1000));
 
                   })
                 
                   black.on("collect", r => {
                       message.member.addRole(message.guild.roles.find("name", "black"));
                       message.member.removeRole(message.guild.roles.find("name", "yellow"));
                       message.member.removeRole(message.guild.roles.find("name", "purple"));
                       message.member.removeRole(message.guild.roles.find("name", "green"));
                       message.member.removeRole(message.guild.roles.find("name", "red"));
                       message.member.removeRole(message.guild.roles.find("name", "blue"));
                       msg.delete();
                       message.channel.send(`**تم اعطائك اللون __الاسود__.**`).then(m => m.delete(1000));
 
                       })
                       noone.on("collect", r => {
                           message.member.removeRole(message.guild.roles.find("name", "yellow"));
                           message.member.removeRole(message.guild.roles.find("name", "purple"));
                           message.member.removeRole(message.guild.roles.find("name", "green"));
                           message.member.removeRole(message.guild.roles.find("name", "red"));
                           message.member.removeRole(message.guild.roles.find("name", "blue"));
                           message.member.removeRole(message.guild.roles.find("name", "black"));
                           msg.delete();
                           message.channel.send(`**تم ازالة جميع الالوان منك.**`).then(m => m.delete(1000));
 
                           })                                                          
                           blue.on("collect", r => {
                               message.member.addRole(message.guild.roles.find("name", "blue"));
                               message.member.removeRole(message.guild.roles.find("name", "yellow"));
                               message.member.removeRole(message.guild.roles.find("name", "purple"));
                               message.member.removeRole(message.guild.roles.find("name", "green"));
                               message.member.removeRole(message.guild.roles.find("name", "red"));
                               message.member.removeRole(message.guild.roles.find("name", "black"));
                               msg.delete();
                               message.channel.send(`**تم اعطائك اللون __الازرق__.**`).then(m => m.delete(1000));
 
 
                               })
                               })
                               }
                               });
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
