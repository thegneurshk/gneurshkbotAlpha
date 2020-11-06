module.exports = {
    name: 'wiggle2',
    description: "wiggle but modifiable",
    execute(message, args){

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
    console.log(output);
    message.channel.send(output);
    }
}