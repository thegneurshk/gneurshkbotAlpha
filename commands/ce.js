module.exports = {
    name: 'ce',
    description: "Casually Explained",
    execute(message, args){
        if(!args[0] || args[0] === 'youtube'){
            message.channel.send('https://www.youtube.com/channel/UCr3cBLTYmIK9kY0F_OdFWFQ');
        }else if(args[0] === 'twitter'){
            message.channel.send('https://twitter.com/casuallye?lang=en');
        }else if(args[0] === 'store'){
            message.channel.send('https://casuallyexplained.com/collections/frontpage');
        }else if(args[0] === 'website'){
            message.channel.send('https://casuallyexplained.com/');
        }
    }

}