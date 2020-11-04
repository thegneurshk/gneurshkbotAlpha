const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '|';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('gneurshkbotAlpha is online');
    client.user.setPresence({activity: {name: 'type \'|help\' for a list of commands'}, status: 'online'})
  .then(console.log)
  .catch(console.error);
});

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.gneurshkbotAlpha) return;
    //breaks if the message does not start with the prefix or if the author is a bot

    const args = message.content.slice(prefix.length).split(/ +/);
    //splits a message after the prefix length to focus only on the command

    const command = args.shift().toLowerCase();
    //shifts the command to lowercase

    //commands
    if(command === 'ping') {
        message.channel.send('pong');
    }else if(command === 'pong'){
        message.channel.send('YOU FUCKING SON OF A BITCH THAT\'S NOT WHAT YOU\'RE SUPPOSED TO SAY!! YOU RUINED EVERYTHING');
    }else if(command === 'help' || command === 'commands') {
        client.commands.get('help').execute(message, args);
    }else if(command === 'gneurshk') {
        message.channel.send({files: ["./images/gneurshk.jpg"]});
    }else if(command === 'wolfie') {
        message.channel.send('https://www.wolframalpha.com');
    }else if(command === 'election2020') {
        message.channel.send('https://www.270towin.com');
    }else if(command === 'test') {
        client.commands.get('test').execute(message, args);
    }else if(command === 'what') {
        client.commands.get('what').execute(message, args);
    }else if(command === 'wiggle') {
        client.commands.get('wiggle').execute(message, args);
    }else if(command === 'yeehaw'){
        client.commands.get('yeehaw').execute(message, args);
    }else if(command === 'fucker'){
        client.commands.get('fucker').execute(message, args);
    }else if(command === 'fuck'){
        message.channel.send('what are you waiting for you dumb stupid fuck');
    }else if(command === 'garbage'){
        message.channel.send({files: ["./images/garbage.jpg"]});
    }else if(command === 'lazer'){
        message.channel.send({files:["./images/lazer.jpg"]});
    }else if(command === 'blanket'){
        message.channel.send({files: ["./images/blanket.png"]});
    }else if (command === 'legbone'){
        message.channel.send('♫ the leg bone\'s connected to the arm bone ♫ ');
        message.channel.send('i am in great pain');
    }else if(command === 'neckbone'){
        client.commands.get('neckbone').execute(message, args);
    }
    
});

//last line
client.login('');
