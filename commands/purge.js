const Discord = require('discord.js');

module.exports = {
    name: 'purge',
    description: "deletes messages",
    aliases: ['clear'],
    async execute(client, message, args) {
        const messageArray = message.content.split(' ');
        const args1 = messageArray.slice(1);

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You do not have permissions for this command.');

        let deleteAmount;

        if (isNaN(args1[0]) || parseInt(args1[0]) <= 0) { return message.reply('Please put a number lower than 100 after the command')}

        if (parseInt(args1[0]) >= 100) {
            return message.reply('You can only delete 99 messages at a time.')
        } else {
            deleteAmount = parseInt(args1[0]);
        }
        message.channel.bulkDelete(deleteAmount + 1, true);
    }
}