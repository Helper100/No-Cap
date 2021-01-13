module.exports = {
    name: 'ban',
    description: 'Ban a user',
    execute(message, args) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            // Ignore messages that aren't from a guild
            if (!message.guild) return;

            //DM's user that they have been banned
            async function banBefore(message, args) {

                let member = message.guild.members.cache.get("id") || message.guild.members.cache.get(args[0])
                // to send a message to the user
                if (member !== undefined) {
                  await member.user.send("You have been banned from", message.guild.name)
                }
                await member.ban()
                }
                .then(() => {
                //Ban's User
                    const user = message.mentions.users.first();
                    message.guild.members.ban(user);
                })
                .then(() => {
                    //Notifies that user was banned
                    message.reply("Banned Mentioned User. User has been notified");
                })

        } else {
            message.reply("You don't have permission to ban members!")
        }
    }
}