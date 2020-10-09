const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {default_prefix} = require('./config.json');
const db = require('quick.db');
client.queue = new Map();
const { badwords } = require("./data.json")
//giveaways
const config = require('./config.json');
client.config = config;
const {GiveawaysManager} = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: '#FF0000',
        reaction: '🎉',
    }
});
//Loading commands
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
//bot status
client.once('ready', async() => {
    try {
        let serverIn = client.guilds.size;
        console.log('I am ready!');

        function pickStatus() {
            let status = ['The Shop', 'https://shoppy.gg/@Topnotch', 'Message TopNotchShop']; //change change status
            let Status = Math.floor(Math.random() * status.length);

            client.user.setActivity(status[Status], {
                type: "WATCHING"
            });
        };
        setInterval(pickStatus, 5000);
    } catch (err) {
        console.log(error)
    }
});
//checks for certain words
client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        let confirm = false;
        var i;
        for (i = 0; i < badwords.length; i++) {
            if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
                confirm = true;
        }
        if (confirm) {
            message.delete()
            message.channel.send('You have been warned for using certain words');
        }
    }
});
//command handler
client.on('message', async message => {
    //gets prefix from default
    let prefix = await db.get(`prefix_${message.guild.id}`);
    //sets prefix default
    if (prefix === null) prefix = default_prefix;
    //ignores messages that do not start with prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    //looks for correct commands
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    try {
        command.execute(client, message, args);
    } catch (error) {
        console.error(error);
    }
});
//Getting bot token
client.login(process.env.token);