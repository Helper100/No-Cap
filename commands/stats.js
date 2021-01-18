module.exports = {
	name: 'stats',
	description: 'Displays information about the bot',
	execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        message.channel.send(`${client.uptime}`)

	},
};