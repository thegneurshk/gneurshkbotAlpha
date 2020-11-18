module.exports = {
    name: 'bubblewrap',
    description: "have fun popping",
    execute(message, args){
        len = args[0];
        height = args[1];
        text = args[2];

        output = "";
        if(args[2]) {
            for (i = 0; i < height; i++) {
                line = "";
                for (j = 0; j < len; j++) {
                    line += `||${text}||`;
                }
                output += line + "\n";
            }
            if(output.length > 2000) {
                message.channel.send('exceeds 2000 character limit');
            }else{
                message.channel.send(output);
            }
        }else{
            for (i = 0; i < height; i++) {
                line = "";
                for (j = 0; j < len; j++) {
                    line += `||     ||`;
                }
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
