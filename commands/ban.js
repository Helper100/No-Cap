module.exports = {
    name: 'ban',
    description: 'Ban a user',
    execute(message, args) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            // Ignore messages that aren't from a guild
            if (!message.guild) return;

            let user = client.users.find(u => u.tag === "someUser#1234");
            user.send("You have been banned from", message.guild.name);
            then(() => {
                    const user = message.mentions.users.first();
                    message.guild.members.ban(user);
                })
                .then(() => {
                    message.reply("Banned Mentioned User. User has been notified");
                })

        } else {
            message.reply("You don't have permission to ban members!")
        }
    }
}