const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "commands",
    description: "Sends the list of commands",
    aliases: ['help', 'command'],
    async execute(client, message, args) {
        const moderation = new Discord.MessageEmbed()
            .setTitle('Moderation')
            .setDescription('My default prefix is [.]. Click the arrows at the bottom to change categories.')
            .addField('Ban', 'Bans a user (ex: -ban @usertag)')
            .addField('Kick', 'Kicks a user (ex: -kick @usertag)')
            .addField('Poll', 'Creates a poll (ex: -poll [#channelname] [Question])')
            .addField('Giveaway', 'Creates a giveaway (ex: -giveaway [#channelname][time{s,m,h}][# of winners][giveaway prize]')
            .addField('Dgiveaway', 'Deletes a giveaway (ex: -dgiveaway [giveaway ID]')
            .addField('Reroll', 'Rerolls the giveaway (ex: -reroll [giveaway ID])')
            .addField('Warn', 'Warns a user (ex: -warn [@usertag or user ID][reason for warn])')
            .addField('Warnings', 'Checks user\'s amount of warnings (ex: -close)')
            .addField('Dwarns', 'Deletes a member\'s warns (ex: -dwarns [@user or user ID])')
            .addField('Setprefix', 'Changes the prefix of the bot (ex: -setprefix [new prefix])')
            .setTimestamp()

        const fun = new Discord.MessageEmbed()
            .setTitle('Fun')
            .setDescription('My default prefix is [.]. Click the arrows at the bottom to change categories.')
            .addField('Meme', 'Sends a meme in the chat (ex: -meme)')
            .addField('Roast', 'Roasts a user (ex: -roast @usertag)')
            .addField('Ascii', 'Sends cool text (ex: -ascii [text])')
            .addField('Advice', 'Gives user advice (ex: -advice)')
            .addField('Joke', 'Sends user a joke (ex: -joke)')
            .addField('Kpop', 'Sends a random kpop artist picture and name (ex: -kpop)')
            .setTimestamp()

        const utility = new Discord.MessageEmbed()
            .setTitle('Utility')
            .setDescription('My default prefix is [.]. Click the arrows at the bottom to change categories.')
            .addField('Cal', 'Calculator (ex: -cal 234+23432)')
            .addField('Info', 'Gets the info of a user (ex: -info @usertag)')
            .addField('Avatar', 'Sends avatar of a user (ex: -avatar)')
            .addField('Weather', 'Sends the weather forecast of a city (ex: -weather [city name])')
            .addField('Server Info', 'Gets the info of the server (ex: -server [members, boosts, joined])')
            .addField('Ping', 'Gets the ping of the bot (ex: -ping)')
            .addField('Imdb', 'Sends user info on movie or tv show (ex: -imdb [movie or show name])')
            .setTimestamp()

        const music = new Discord.MessageEmbed()
            .setTitle('Music')
            .setDescription('My default prefix is [.]. Click the arrows at the bottom to change categories.')
            .addField('Play', 'Searches Youtube and plays a song (ex: -p [song name] {Youtube links do not work yet})')
            .addField('Pause', 'Pauses what is playing (ex: -pause)')
            .addField('Resume', 'Resumes what is playing (ex: -resume)')
            .addField('Stop', 'Stops playing a song (ex: -stop)')
            .addField('Skip', 'Skips a song (ex: -skip)')
            .addField('Queue', 'Sends song queue (ex: -queue)')
            .addField('Volume', 'Sets or views current volume (ex: -vol [number])')
            .addField('Now Playing', 'Shows song that is currently playing (ex: -np)')
            .setTimestamp()

        const pages = [
            fun,
            utility,
            music,
            moderation,
        ]

        const emojiList = ["⏪", "⏩"];
        pagination(message, pages, emojiList)
    }
}