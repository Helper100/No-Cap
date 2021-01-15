module.exports = {
	name: 'unban',
	description: 'Unban a user',
	execute(message, args) {
		if (message.member.hasPermission("BAN_MEMBERS")) {
			const user = message.mentions.users.first();
			if (user) { 
				const id = args[0];
				message.guild.members.unban(id).then (() =>{
				//Lets user know that the user was unbanned sucessfully
				message.reply("Sucessfully unbanned user!");
				})
			} else {
				message.reply("You didn't mention anyone to unban!")
			}
		} else { 
			message.reply("You don't have permission to unban members")
		}
	}
}