module.exports = {
    name: 'help',
    description: "this command prints out all commands",

    execute(message, args){

        //temperary commands
        const helpA = '|election2020';

        //permanent commands
        const billwurtz = '|bill wurtz';
        const blanket = '|blanket';
        const bubblewrap = '|bubblewrap';
        const carson = '|carson';
        const ce = '|ce';
        const communism = '|communism';
        const eczist = '|eczist';
        const empathy = '|empathy';
        const evos = '|evos';
        const fuck = '|fuck';
        const funney = '|funney';
        const garbage = '|garbage';
        const gneurshk = '|gneurshk';
        const helpStr = '|help';
        const hotewig = '|hotewig';
        const lazer = '|lazer';
        const legbone = '|legbone';
        const mental = '|mental breakdown';
        const neckbone = '|neckbone';
        const no = '|no';
        const noose = '|noose';
        const onion = '|one giant onion';
        const photosynthesis = '|photosynthesis';
        const ping = '|ping';
        const pong = '|pong';
        const rr = '|ra ra';
        const religion = '|religion';
        const rwa = '|road work ahead';
        const speedtest = '|speedtest';
        const taste = '|taste';
        const testStr = '|test';
        const tweet = '|tweet';
        const what = '|what';
        const wiggle = '|wiggle';
        const wolfie = '|wolfie';
        const yeehaw = '|yeehaw';
        
        const papito = '|papito';
        var padding = 20;

        if(args[0] === '1' || !args[0]){
            message.channel.send(`\`\`\` \
            \n Temporary Commands: \
            \n ${helpA.padEnd(padding, '.')}links to the current polls \
            \n \
            \n Permanent Commands: \
            \n ${billwurtz.padEnd(padding, '.')}links to a specified bill wurtz website \
            \n ${blanket.padEnd(padding, '.')}there's a blanket \
            \n ${bubblewrap.padEnd(padding, '.')}have fun popping \
            \n ${carson.padEnd(padding, '.')}links to carson's twitter \
            \n ${ce.padEnd(padding, '.')}\Casually Explained \
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
            \n ${mental.padEnd(padding, '.')}it's a mental breakdown \
            \n ${neckbone.padEnd(padding, '.')}the neck bone \
            \n
            \n Page 1/3 \
            \n type '|help <page number>' to go to a specific page \
            \`\`\``);
        }else if(args[0] === '2'){
            message.channel.send(`\`\`\` \
            \n ${no.padEnd(padding, '.')}why not? \
            \n ${noose.padEnd(padding, '.')}a family-friendly noose song \
            \n ${onion.padEnd(padding, '.')}links to one giant onion's youtube \
            \n ${papito.padEnd(padding, '.')}pakalu papito \
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
            \n   Total commands: 38 \
            \n   Temporary commands: 1 \
            \n   Permanent commands: 37 \
            \n   Total files: 23 \
            \n   Total images: 12 \
            \n   Language: english \
            \n \
            \n Page ${args[0]}/3 \
            \n type '|help <page number>' to go to a specific page \
            \`\`\` `)
        };
    }
}
