module.exports = {
    name: 'wiggle',
    description: "this is a wiggle command",
    execute(message, args){
        const blankStr = '';
        const freq = 1;
        const amp = 41;
        for (i = 0; i < 41; i++) {
            message.channel.send(
                `\n${blankStr.padEnd((1 - Math.cos(freq*i)) * amp)}text`
            );
        }
    }
}
