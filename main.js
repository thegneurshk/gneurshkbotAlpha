const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '|';
const fs = require('fs');
const { normalize } = require('path');
const config = require('./config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('gneurshkbotAlpha is online');
    client.user.setPresence({activity: {name: 'type \'|help\' for a list of commands', url: 'https://github.com/lordgneurshk/gneurshkbotAlpha'}, status: 'online'})
  .then(console.log)
  .catch(console.error);
});

client.on('guildMemberAdd', message  =>{
    const channelid = message.guild.channels.get('CHANNEL ID');
    channelid.send('welcome to the server');
    message.guild.channels.get('CHANNEL ID').send('welcome');
});

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.gneurshkbotAlpha || message.author.bot) return;
    //breaks if the message does not start with the prefix or if the author is a bot

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    //splits a message after the prefix length to focus only on the command

    const command = args.shift().toLowerCase();
    //shifts the command to lowercase

    //commands

    //link commands
    if(command === 'bill' && args[0] === 'wurtz'){
        client.commands.get('bill wurtz').execute(message, args);
    }else if(command === 'bongocat'){
        message.channel.send('https://www.bongo.cat/');
    }else if(command === 'carson'){
        message.channel.send('https://twitter.com/CallMeCarsonYT');
    }else if(command === 'ce'){
        client.commands.get('ce').execute(message, args);
    }else if(command === 'eczist'){
        message.channel.send('https://www.youtube.com/playlist?list=PLZFtpTfOvng3XrtVlJFw7Ax4zU63m8DIc');
    }else if(command === 'funney'){
        message.channel.send('https://www.youtube.com/playlist?list=PLPoHPVSGv6h4Lj_yVhyCswGCySqK7Inqc');
    }else if(command === 'hotewig'){
        message.channel.send('https://youtu.be/xuCn8ux2gbs');
    }else if(command === 'noose'){
        message.channel.send('https://youtu.be/VJe6LLoGgR8');
    }else if(command === 'one' && args[0] === 'giant' && args[1] === 'onion'){
        message.channel.send('https://www.youtube.com/channel/UCNXYrTl3Rc03bRBplYaz7yg');
    }else if(command === 'papito'){
        message.channel.send('https://twitter.com/pakalupapitow');
    }else if(command === 'wolfie') {
        message.channel.send('https://www.wolframalpha.com');
    }
    
    //image commands
    else if(command === 'blanket'){
        message.channel.send({files: ["./images/blanket.png"]});
    }else if(command === 'communism'){
        message.channel.send({files: ['./images/communism.gif']});
    }else if(command === 'empathy'){
        message.channel.send('have an empathy banana', {files: ['./images/banana.jpg']});
    }else if(command === 'evos'){
        message.channel.send({files: ['./images/evos.jpg']});
    }else if(command === 'fuck'){
        message.channel.send({files: ['./images/fuck.gif']});
    }else if(command === 'garbage'){
        message.channel.send({files: ["./images/garbage.jpg"]});
    }else if(command === 'gneurshk') {
        message.channel.send({files: ["./images/gneurshk.jpg"]});
    }else if(command === 'lazer'){
        message.channel.send({files:["./images/lazer.jpg"]});
    }else if(command === 'no'){
        message.channel.send({files: ['./images/no.png']});
    }else if(command === 'photosynthesis'){
        message.channel.send({files: ['./images/sunlight.jpg']});
    }else if(command === 'religion'){
        message.channel.send({files: ['./images/religion.jpg']});
    }else if(command === 'taste'){
        message.channel.send({files: ['./images/taste.gif']});
    }
    
    //text commands 1
    else if(command === 'bc'){
        client.commands.get('bc').execute(message, args);
    }else if(command === 'bubblewrap'){
        client.commands.get('bubblewrap').execute(message, args);
    }else if(command === 'calc'){
        client.commands.get('calc').execute(message, args);
    }else if(command === 'help') {
        client.commands.get('help').execute(message, args);
    }else if (command === 'legbone'){
        message.channel.send('♫ the leg bone\'s connected to the arm bone ♫ ');
        message.channel.send('i am in great pain');
    }else if(command === 'mental' && args[0] === 'breakdown'){
        message.channel.send('it\'s a mental breakdown *off key kazoo*');
    }else if(command === 'neckbone'){
        client.commands.get('neckbone').execute(message, args);
    }else if(command === 'ping') {
        message.channel.send('pong');
    }else if(command === 'pong'){
        message.channel.send('YOU FUCKING SON OF A BITCH THAT\'S NOT WHAT YOU\'RE SUPPOSED TO SAY!! YOU RUINED EVERYTHING');
    }else if(command === 'quote'){
        client.commands.get('quote').execute(message, args);
    }else if(command === 'ra' && args[0] === 'ra'){
        message.channel.send('rasputin');  
    }else if (command === 'road' && args[0]==='work' && args[1] === 'ahead') {
        message.channel.send(`uhh ya, i sure hope it does`);
    }

    //text commands 2
    else if(command === 'speedtest'){
        message.channel.send('your internet speed is nyoooooom');
    }else if(command === 'test') {
        client.commands.get('test').execute(message, args);
    }else if(command === 'tumblr'){
        client.commands.get('tumblr').execute(message, args);
    }else if(command === 'tweet'){
        client.commands.get('tweet').execute(message, args);
    }else if(command === 'what') {
        client.commands.get('what').execute(message, args);
    }else if(command === 'wiggle') {
        client.commands.get('wiggle').execute(message, args);
        message.delete();
    }else if(command === 'wiggle2'){
        client.commands.get('wiggle2').execute(message, args);
    }else if(command === 'yeehaw'){
        client.commands.get('yeehaw').execute(message, args);
    }

    //temp commands
    else if(command === 'embed'){
        client.commands.get('embed').execute(message, args);
    }

    //admin commands
    else if(command === 'kick'){
        if(message.member.hasPermission("ADMINISTRATOR")) {
            client.commands.get('kick').execute(message, args);
        }else{
            message.channel.send('you do not have permission to use this command')
        }
    }else if(command === 'ban'){
        if(message.member.hasPermission("ADMINISTRATOR")){
            client.commands.get('ban').execute(message, args);
        }else{
            message.channel.send('you do not have permission to use this command')
        }
    }
    
});

//last line
client.login(config.token);
 
