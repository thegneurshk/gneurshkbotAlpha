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
        const commandsStr = '|commands';
        const pong = '|pong';
        const wiggle = '|wiggle';
        const yeehaw = '|yeehaw';
        const fucker = '|fucker';
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
        var padding = 20;

        message.channel.send(`\`\`\` \
        \n Temporary Commands: \
        \n ${helpA.padEnd(padding, '.')}links to the current polls \
        \n \
        \n Permanent Commands: \
        \n ${blanket.padEnd(padding, '.')}there's a blanket \
        \n ${bubblewrap.padEnd(padding, '.')}have fun popping \
        \n ${commandsStr.padEnd(padding, '.')}prints out this menu \
        \n ${communism.padEnd(padding, '.')}in the soviet union \
        \n ${eczist.padEnd(padding, '.')}whi du thez eczist \
        \n ${empathy.padEnd(padding, '.')}empathy banana \
        \n ${evos.padEnd(padding, '.')}evil virus of satan \
        \n ${fuck.padEnd(padding, '.')}what are you waiting for \
        \n ${fucker.padEnd(padding, '.')}you fucker \
        \n ${funney.padEnd(padding, '.')}funney \
        \n ${garbage.padEnd(padding, '.')}still a piece of garbage \
        \n ${gneurshk.padEnd(padding, '.')}gneurshk \
        \n ${helpStr.padEnd(padding, '.')}prints out this menu \
        \n ${hotewig.padEnd(padding, '.')}history of the entire world, i guess \
        \n ${lazer.padEnd(padding, '.')}a deadly lazer \
        \n ${legbone.padEnd(padding, '.')}the leg bone \
        \n ${neckbone.padEnd(padding, '.')}the neck bone \
        \n ${no.padEnd(padding, '.')}why not? \
        \n ${noose.padEnd(padding, '.')}a family-friendly noose song \
        \n ${photosynthesis.padEnd(padding, '.')}tast the sun \
        \n ${ping.padEnd(padding, '.')}pong \
        \n ${pong.padEnd(padding, '.')}try it out \
        \n ${speedtest.padEnd(padding, '.')}what is your internet speed? \
        \n ${religion.padEnd(padding, '.')}no don't \
        \n ${rwa.padEnd(padding, '.')}road work ahead? \
        \n ${taste.padEnd(padding, '.')}taste the sun \
        \n ${testStr.padEnd(padding, '.')}a simple test command \
        \n ${what.padEnd(padding, '.')}what \
        \n ${wiggle.padEnd(padding, '.')}prepare to wiggle :) \
        \n ${wolfie.padEnd(padding, '.')}sends the link to wolframAlpha \
        \n ${yeehaw.padEnd(padding, '.')}yeehaw :) \
        \n \`\`\``);
    }

}
