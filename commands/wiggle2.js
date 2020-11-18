module.exports = {
    name: 'wiggle2',
    description: "wiggle but modifiable",
    execute(message, args){

        if(!args[3]){
            message.channel.send(`make sure you have a defined text, duration, amplitude, and frequency \
            \nuse \`|help wiggle2\` for usage`)
        }else{
            text = args[0];
            duration = args[1];
            amp = args[2];
            freq = args[3];

            output = "";
            for (i = 0; i < duration; i++) {
                line = "";
                for (j = 0; j < (1-Math.cos(i*freq))*amp; j++) {
                    line += " ";
                }
                line += text;
                output += line + "\n";
            }
            if(output.length > 2000) {
                message.channel.send('exceeds 2000 character limit');
            }else{
                message.channel.send(output);
            }
        }
    }
}
