const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
const { exec } = require('child_process');
exec(`java -jar ')
pause`, (error, stdout, stderr) => {
});


if(host == null){
  message.channel.send("Host or port provider null")
}

console.log('An Attack Launched Discord ID:' +  message.guild.id)

console.log(exec)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **MCSPAM BOTNET ** 🔥')
	.setTimestamp()
	.setDescription("**Attack started**! \n**IP**: **" + host + "** \n**Port**: **" + port + "**")
	.setFooter('© Developer Salleah#3002.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")


 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lagger'],
  permLevel: 0
}

exports.help = {
  name: 'lagger',
  description: 'Özel',
  usage: 'lagger'
}
