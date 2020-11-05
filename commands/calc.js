module.exports = {
    name: 'calc',
    description: "basic calculator",
    execute(message, args){
        if(args[1] === '+'){
            var term1 = parseInt(args[0]);
            var term2 = parseInt(args[2]);
            var result = term1 + term2;
            message.channel.send(`${term1} ${args[1]} ${term2} = ${result}`);
        }else if(args[1] === '-'){
            var term1 = parseInt(args[0]);
            var term2 = parseInt(args[2]);
            var result = term1 - term2;
            message.channel.send(`${term1} ${args[1]} ${term2} = ${result}`);
        }else if(args[1] === '*'){
            var term1 = parseInt(args[0]);
            var term2 = parseInt(args[2]);
            var result = term1 * term2;
            message.channel.send(`${term1} ${args[1]} ${term2} = ${result}`);
        }else if(args[1] === '/'){
            var term1 = parseInt(args[0]);
            var term2 = parseInt(args[2]);
            var result = term1 / term2;
            message.channel.send(`${term1} ${args[1]} ${term2} = ${result}`);
        }
    }
}