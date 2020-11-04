module.exports = {
    name: 'help',
    description: "this command prints out all commands",

    execute(message, args){

        //temperary commands
        //named 'help<letter>
        const helpA = '|election2020';

        //permanent commands
        //named 'help<number>
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
        const NO = '|NO'
        var padding = 20;

        message.channel.send(`\`\`\` \
        \n Temporary Commands: \
        \n ${helpA.padEnd(padding, '.')}links to the current polls \
        \n \
        \n Permanent Commands: \
        \n ${blanket.padEnd(padding, '.')}there's a blanket \
        \n ${commandsStr.padEnd(padding, '.')}prints out this menu \
        \n ${fuck.padEnd(padding, '.')}what are you waiting for \
        \n ${fucker.padEnd(padding, '.')}you fucker \
        \n ${garbage.padEnd(padding, '.')}still a piece of garbage \
        \n ${gneurshk.padEnd(padding, '.')}gneurshk \
        \n ${helpStr.padEnd(padding, '.')}prints out this menu \
        \n ${lazer.padEnd(padding, '.')}a deadly lazer \
        \n ${legbone.padEnd(padding, '.')}the leg bone \
        \n ${neckbone.padEnd(padding, '.')}the neck bone \
        \n ${ping.padEnd(padding, '.')}pong \
        \n ${pong.padEnd(padding, '.')}try it out \
        \n ${testStr.padEnd(padding, '.')}a simple test command \
        \n ${what.padEnd(padding, '.')}what \
        \n ${wiggle.padEnd(padding, '.')}prepare to wiggle :) \
        \n ${wolfie.padEnd(padding, '.')}sends the link to wolframAlpha \
        \n ${yeehaw.padEnd(padding, '.')}yeehaw :) \
        \n \`\`\``);
    }

}