module.exports = {
    name: 'bill wurtz',
    description: "everything bill wurtz",
    execute(message, args){
        if(!args[1]){
            message.channel.send('https://billwurtz.com/');
        }else if(args[1] === 'youtube'){
            message.channel.send('https://www.youtube.com/user/billwurtz');
        }else if(args[1] === 'twitter'){
            message.channel.send('https://twitter.com/billwurtz?lang=en');
        }else if(args[1] === 'reddit'){
            message.channel.send('https://www.reddit.com/r/billwurtz/');
        }else if(args[1] === 'discord'){
            message.channel.send('https://discord.gg/yXhu4m2');
        }else if(args[1] === 'memes'){
            message.channel.send('https://www.reddit.com/r/billwurtzmemes/');
        }else if(args[1] === 'questions'){
            message.channel.send('https://billwurtz.com/questions/questions.html');
        }else if(args[1] === 'store'){
            message.channel.send('https://billwurtz.myshopify.com/');
        }
    }

}