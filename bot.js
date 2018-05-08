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

Client.on("message", async message => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: auth.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;


//setprefix.js (command)

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You haven't enough permissions.");
  if(!args[0] || args[0 == "help"]) return message.reply(`Usage: ${prefix}setprefix <new prefix>`);

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
