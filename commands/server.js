module.exports = {
	name: 'server',
	description: 'Server information command.',
	execute(message, args) {
		message.channel.send('Guild name: ' + message.guild.name + '\nTotal members: ' + message.guild.memberCount);
	},
};