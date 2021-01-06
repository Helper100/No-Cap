module.exports = {
	name: 'user-info',
	description: 'User-information Command',
	execute(message, args) {
		message.channel.send('Your username: ' + message.author.username + '\nYour ID: ' + message.author.id);
	},
};