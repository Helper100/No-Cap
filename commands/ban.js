module.exports = {
    name: 'ban',
    description: 'Ban a user',
    execute(message, args) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            // Ignore messages that aren't from a guild
            if (!message.guild) return;
            
             const user = message.mentions.users.first();
                message.guild.members.ban(user)
                .then(() => {
                    //Notifies that user was banned
                    message.reply("Banned Mentioned User");
                }).catch(err => {
                    // An error happened
                    // This is generally due to the bot not being able to ban the member,
                    // either due to missing permissions or role hierarchy
                    message.reply('I was unable to kick the member. If this keeps happening contact staff at https://discord.gg/kBUvJhZ79h and mention error code `B1`');
                    // Log the error
                    console.error(err);
                }); 

        } else {
            message.reply("You don't have permission to ban members!")
        }
    }
}
