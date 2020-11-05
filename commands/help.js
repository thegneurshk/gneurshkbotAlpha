module.exports = {
    name: 'help',
    description: "this command prints out all commands",

    execute(message, args){

        //temperary commands
        const helpA = '|election2020';

        //permanent commands
        const gneurshk = '|gneurshk';
        const helpStr = '|help';
        const ping = '|ping';
        const testStr = '|test';
        const what = '|what';
        const wolfie = '|wolfie';
        const pong = '|pong';
        const wiggle = '|wiggle';
        const yeehaw = '|yeehaw';
        const fuck = '|fuck';
        const garbage = '|garbage';
        const lazer = '|lazer';
        const blanket = '|blanket';
        const legbone = '|legbone';
        const neckbone = '|neckbone';
        const photosynthesis = '|photosynthesis';
        const religion = '|religion';
        const communism = '|communism';
        const evos = '|evos';
        const hotewig = '|hotewig';
        const no = '|no';
        const taste = '|taste';
        const speedtest = '|speedtest';
        const bubblewrap = '|bubblewrap';
        const empathy = '|empathy';
        const noose = '|noose';
        const funney = '|funney';
        const eczist = '|eczist';
        const rwa = '|road work ahead';
        const rr = '|ra ra';
        const tweet = '|tweet';
        const billwurtz = '|bill wurtz';
        const carson = '|carson';
        const onion = '|one giant onion';
        const ce = '|ce';
        var padding = 20;

        if(args[0] === '1' || !args[0]){
            message.channel.send(`\`\`\` \
            \n Temporary Commands: \
            \n ${helpA.padEnd(padding, '.')}links to the current polls \
            \n \
            \n Permanent Commands: \
            \n ${blanket.padEnd(padding, '.')}there's a blanket \
            \n ${billwurtz.padEnd(padding, '.')}links to a specified bill wurtz website \
            \n ${bubblewrap.padEnd(padding, '.')}have fun popping \
            \n ${ce.padEnd(padding, '.')}\Casually Explained \
            \n ${carson.padEnd(padding, '.')}links to carson's twitter \
            \n ${communism.padEnd(padding, '.')}in the soviet union \
            \n ${eczist.padEnd(padding, '.')}whi du thez eczist \
            \n ${empathy.padEnd(padding, '.')}empathy banana \
            \n ${evos.padEnd(padding, '.')}evil virus of satan \
            \n ${fuck.padEnd(padding, '.')}what are you waiting for \
            \n ${funney.padEnd(padding, '.')}funney \
            \n ${garbage.padEnd(padding, '.')}still a piece of garbage \
            \n ${gneurshk.padEnd(padding, '.')}gneurshk \
            \n ${helpStr.padEnd(padding, '.')}prints out this menu \
            \n ${hotewig.padEnd(padding, '.')}history of the entire world, i guess \
            \n ${lazer.padEnd(padding, '.')}a deadly lazer \
            \n ${legbone.padEnd(padding, '.')}the leg bone \
            \n ${neckbone.padEnd(padding, '.')}the neck bone \
            \n ${no.padEnd(padding, '.')}why not? \
            \n
            \n Page 1/3 \
            \n type '|help <page number>' to go to a specific page \
            \`\`\``);
        }else if(args[0] === '2'){
            message.channel.send(`\`\`\` \
            \n ${noose.padEnd(padding, '.')}a family-friendly noose song \
            \n ${onion.padEnd(padding, '.')}links to one giant onion's youtube \
            \n ${photosynthesis.padEnd(padding, '.')}taste the sun \
            \n ${ping.padEnd(padding, '.')}pong \
            \n ${pong.padEnd(padding, '.')}try it out \
            \n ${rr.padEnd(padding, '.')}rasputin \
            \n ${religion.padEnd(padding, '.')}no don't \
            \n ${rwa.padEnd(padding, '.')}road work ahead? \
            \n ${speedtest.padEnd(padding, '.')}what is your internet speed? \
            \n ${taste.padEnd(padding, '.')}taste the sun \
            \n ${testStr.padEnd(padding, '.')}a simple test command \
            \n ${tweet.padEnd(padding, '.')}when specified, sends a tweet\
            \n\t\t\t\t\t from bill wurtz, carson, or pakalu papito \
            \n ${what.padEnd(padding, '.')}what \
            \n ${wiggle.padEnd(padding, '.')}prepare to wiggle :) \
            \n ${wolfie.padEnd(padding, '.')}sends the link to wolframAlpha \
            \n ${yeehaw.padEnd(padding, '.')}yeehaw :) \
            \n \
            \n Page ${args[0]}/3 \
            \n type '|help <page number>' to go to a specific page \
            \`\`\` `);
        }else if(args[0] === '3'){
            message.channel.send(` \`\`\` \
            \n Info: \
            \n   Name: gneurshkbotAlpha#3939 \
            \n   Date created: 03/11/2020, tuesday \
            \n   Last modified: 05/11,2020, thursday \
            \n   Source code: https://github.com/lordgneurshk/gneurshkbotAlpha \
            \n   Total commands: 36 \
            \n   Temporary commands: 1 \
            \n   Permanent commands: 35 \
            \n   Total images: 12 \
            \n   Language: english \
            \n \
            \n Page ${args[0]}/3 \
            \n type '|help <page number>' to go to a specific page \
            \`\`\` `)
        };
    }
}
