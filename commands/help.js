module.exports = {
    name: 'help',
    description: "this command prints out all commands",

    execute(message, args){

        //temperary commands
        const helpA = '|election2020';

        //permanent commands
        const billwurtz = '|bill wurtz';
        const blanket = '|blanket';
        const bongocat = '|bongocat';
        const bubblewrap = '|bubblewrap';
        const calc = '|calc';
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
        const papito = '|papito';
        const photosynthesis = '|photosynthesis';
        const ping = '|ping';
        const pong = '|pong';
        const rr = '|ra ra';
        const religion = '|religion';
        const rwa = '|road work ahead';
        const speedtest = '|speedtest';
        const taste = '|taste';
        const testStr = '|test';
        const tumblr = '|tumblr';
        const tweet = '|tweet';
        const what = '|what';
        const wiggle = '|wiggle';
        const wiggle2 = '|wiggle2';
        const wolfie = '|wolfie';
        const yeehaw = '|yeehaw';

        //mod commands
        const ban = '|ban';
        const kick = '|kick';

        var padding = 20;
        var totalPages = 4;

        if(args[0] === '1' || !args[0]){
            message.channel.send(`\`\`\` \
            \n Temporary Commands: \
            \n ${helpA.padEnd(padding, '.')}links to the current polls \
            \n \
            \n Permanent Commands: \
            \n ${billwurtz.padEnd(padding, '.')}links to a specified bill wurtz website \
            \n ${bongocat.padEnd(padding, '.')}bongo cat \
            \n ${blanket.padEnd(padding, '.')}there's a blanket \
            \n ${bubblewrap.padEnd(padding, '.')}have fun popping \
            \n ${calc.padEnd(padding, '.')}a basic calculator \
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
            
            \n \
            \n Page 1/${totalPages} \
            \n type '|help <page number>' to go to a specific page \
            \`\`\``);
        }else if(args[0] === '2'){
            message.channel.send(`\`\`\` \
            \n ${mental.padEnd(padding, '.')}it's a mental breakdown \
            \n ${neckbone.padEnd(padding, '.')}the neck bone \
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
            \n ${tumblr.padEnd(padding, '.')}randomly quotes tumblr posts \
            \n ${tweet.padEnd(padding, '.')}when specified, sends a tweet \
            \n\t\t\t\t\t from bill wurtz, carson, or pakalu papito \
            \n ${what.padEnd(padding, '.')}what \
            \n ${wiggle.padEnd(padding, '.')}prepare to wiggle :) \
            \n ${wiggle2.padEnd(padding, '.')}like wiggle, but takes userinput \
            \n\t\t\t\t\t in the form of <text> <duration> <amplitude> <frequency> \
            \n \
            \n Page ${args[0]}/${totalPages} \
            \n type '|help <page number>' to go to a specific page \
            \`\`\` `);
        }else if(args[0] === '3'){
            message.channel.send(` \`\`\` \
            \n ${wolfie.padEnd(padding, '.')}sends the link to wolframAlpha \
            \n ${yeehaw.padEnd(padding, '.')}yeehaw :) \
            \n \
            \n Page ${args[0]}/${totalPages} \
            \n type '|help <page number>' to go to a specific page \
            \`\`\` `)
        }
        else if(args[0] === '4'){
            message.channel.send(` \`\`\` \
            \n Info: \
            \n   Name: gneurshkbotAlpha#3939 \
            \n   Date created: 03/11/2020, tuesday \
            \n   Last modified: 14/11,2020, saturday \
            \n   Source code: https://github.com/lordgneurshk/gneurshkbotAlpha \
            \n   Total commands: 44 \
            \n   Temporary commands: 1 \
            \n   Permanent commands: 41 \
            \n   Administrator commands: 2 \
            \n   Total files: 28 \
            \n   Total images: 12 \
            \n   Language: english \
            \n \
            \n Page ${args[0]}/${totalPages} \
            \n type '|help <page number>' to go to a specific page \
            \`\`\` `)
        }
        else if((args[0] === '5' || args[0] === 'admin') && message.member.hasPermission("ADMINISTRATOR")){
            message.author.send(` \`\`\`
            \n Admin commands: \
            \n ${ban.padEnd(padding, '.')}bans a mentioned user \
            \n ${kick.padEnd(padding, '.')}kicks a mentioned user \
            \n \
            \n only users with the admin permission can open this page \
            \n type '|help <page number>' to go to a specific page \
            \`\`\` `)
        }
    }
}
