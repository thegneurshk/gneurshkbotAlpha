module.exports = {
    name: 'minesweeper',
    description: "play minesweeper",
    execute(message, args){
        var input1 = parseInt(args[0]);
        var input2 = parseInt(args[1]);
        var x = new Array(input1);
        var chance;
        if(args[2] === 'easy'){
            chance = 0.3;
        }else if(args[2] === 'medium'){
            chance = 0.35;
        }else if(args[2] === 'hard'){
            chance = 0.45;
        }else{
            message.channel.send('make sure you have defined a board size and difficulty');
        }

        output = ``;
        for(i = 0; i < x.length; i++){
            x[i] = new Array(input2);
            line = '';
            for(j = 0; j < x[i].length; j++){
                var rand = Math.random();
                if(rand < chance){
                    var b = true;
                }else{
                    var b = false;
                }
                if(b){
                    x[i][j] = `|| 💥 ||`;
                    //counter++;
                }else{
                    x[i][j] = `||\`   \`||`;
                }
                line += x[i][j];
            }
            output += line + `\n`;
        }
        message.channel.send(output);
        
    }
}