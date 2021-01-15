module.exports = {
    name: 'welcome',
    description: 'Welcomes and notifies when a user has left.',
    execute(message, args) {
        //Welcome & goodbye messages\\
client.on('guildMemberAdd', member => {
    member.roles.add(member.guild.roles.cache.find(i => i.name === 'Among The Server'))

    const welcomeEmbed = new Discord.MessageEmbed()

    welcomeEmbed.setColor('#5cf000')
    welcomeEmbed.setTitle('**' + member.user.username + '** has joined the server **')
    

    member.guild.channels.cache.find(i => i.name === 'greetings').send(welcomeEmbed)
})

client.on('guildMemberRemove', member => {
    const goodbyeEmbed = new Discord.MessageEmbed()

    goodbyeEmbed.setColor('#f00000')
    goodbyeEmbed.setTitle('**' + member.user.username + '** has left the server. **')
    

    member.guild.channels.cache.find(i => i.name === 'greetings').send(goodbyeEmbed)
})
//Welcome & goodbye messages end\\
    }
}