module.exports = {
  name: 'purge',
  description: 'Deletes a set amount of messages.',
  async execute(message, args) {
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
          const amount = args[0]
          if (isNaN(amount)) {
              return message.channel.send('You must put in a number.') // Checks to see if the amount is not a number
          } else {
              let hasError = false
              await message.channel.bulkDelete(amount).catch(err => {
                  console.error(err);
                  hasError = true;
                  message.reply('Unable to delete message because ' + err + '. If this keeps happening contact staff in our support server and mention error code P1')
              })
              if (hasError) {
                  return
              }
              hasError = false
              const msg = await message.channel.send('Deleted messages!').catch(err => {
                  console.error(err);
                  hasError = true
              })
              if (!hasError) {
                  await msg.delete({
                      timeout: 5000
                  })
              }
          }
      } else {
        message.reply("You don't have permission to delete messages!")
  } 
}
}
