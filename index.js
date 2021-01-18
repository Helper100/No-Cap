
//Requires nodes native file system
const fs = require('fs');
//require Discord.js Module
const Discord = require('discord.js');
//Call on config.json
const config = require('./Config.json');
const { execute } = require('./commands/ban');
const unban = require('./commands/unban');
//create a new Discord client
const client = new Discord.Client();
//Extends JS navive map
client.commands = new Discord.Collection();
//Dynamicaly calls on command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//.
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
//This Calls on config.json to get the prefix
const { prefix } = config
const { token } = config

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on( 'message', message => {

	client.user.setActivity(`over ${client.guilds.cache.size} servers`, { type: 'WATCHING' });
	//This should be enabled later
	//client.commands.get('welcome').execute(message);
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(' ');
		const command = args.shift().toLowerCase();
		//!ping 
	 if (command === 'ping') {
		client.commands.get('ping').execute(message, args);
		//!server
	} else if (command === 'server') {
		client.commands.get('server').execute(message, args);
		//!user-info
	} else if (command === 'user-info') {
		client.commands.get('user-info').execute(message, args);
		//!help
	} else if (command === 'help') { 
		client.commands.get('help').execute(message, args);
		//!kick
	} else if (command === 'kick') {
		client.commands.get('kick').execute(message, args);
		//!reload
	} else if (command === 'reload') {
		client.commands.get('reload').execute(message, args);
		//!status
	} else if (command === 'status') {
		client.user.setActivity(`over ${client.guilds.cache.size} servers`, { type: 'WATCHING' });
		//!purge
	} else if (command === 'purge')
	client.commands.get('purge').execute(message, args); {
		//!ban
	} if (command === 'ban')
	client.commands.get('ban').execute(message, args); {
		//!unban
	} if ( command === 'unban')
	client.commands.get("unban").execute(message, args); {
	} if (command === 'stats') 
	client.commands.get("stats").execute(message, args); {
	}
});

//login to Discord with app token
client.login('Nzg4OTIxOTAyMDU1ODE3MjI2.X9qixg.0wb-VCzLnYyeu0fqfXfOorBwm_s');
