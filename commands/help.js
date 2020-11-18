const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    description: "this command prints out all commands",

    execute(message, args){

        var totalPages = 8;

        if(args[0] === 'menu' || !args[0] || args[0] === '0'){
            const helpPage = new MessageEmbed()
	        .setColor('#000000')
            .setTitle(`Help Menu`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|help /0/menu/...................................this page\` \
                \n\`|help 1/info..........................................info\` \
                \n\`|help 2/colours....................................colours\` \
                \n\`|help 3/links.........................link commands (1-11)\` \
                \n\`|help 4/images.......................image commands (1-12)\` \
                \n\`|help 5/text 1.....................text commands 1  (1-12)\` \
                \n\`|help 6/text 2.....................text commands 2 (13-18)\` \
                \n\`|help 7/temp......................temporary commands (1-2)\` \
                \n\`|help 8/admin.................administrator commands (1-2)\` \
                \n`}
            )
            .addFields(
                {name: '\u200B', value: ` \
                \nPage 0/${totalPages} \
                \ntype \`|help <page number>\` to go to a specific page \
                \ntype \`|help <command>\` for help with a specific command (WIP) \
                `}
            )
	        .setTimestamp()
            .setFooter('created by lordgneurshk', 'https://64.media.tumblr.com/77a0542d39aaad6e3dbeb6ff5a9c9e46/tumblr_psjm9i3Fyp1u18swpo6_1280.png')

            message.channel.send(helpPage);
        }else if(args[0] === '1' || args[0] === 'info'){
            const helpPage = new MessageEmbed()
	        .setColor('#00ff00')
            .setTitle(`Help 1 | Info`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`name.................................gneurshkbotAlpha#3939\` \
                \n\`date created.............................03/11/20, tuesday\` \
                \n\`last modified............................17/11/20, tuesday\` \
                \n\`total commands..........................................46\` \
                \n\`link commands...........................................11\` \
                \n\`image commands..........................................12\` \
                \n\`text commands...........................................19\` \
                \n\`temporary commands.......................................2\` \
                \n\`administrator commands...................................2\` \
                \n\`total files.............................................30\` \
                \n\`language...........................................english\` \
                \n`}
            )
            .addFields(
                {name: '\u200B', value: ` \
                \nPage 1/${totalPages} \
                \ntype \`|help <page number>\` to go to a specific page \
                \ntype \`|help <command>\` for help with a specific command (WIP) \
                `}
            )
	        .setTimestamp()
            .setFooter('created by lordgneurshk', 'https://64.media.tumblr.com/77a0542d39aaad6e3dbeb6ff5a9c9e46/tumblr_psjm9i3Fyp1u18swpo6_1280.png')

            message.channel.send(helpPage);
        }else if(args[0] === '2' || args[0] === 'colours'){
            const helpPage = new MessageEmbed()
	        .setColor('#fff430')
            .setTitle(`Help 2 | Colours`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`black....(#000000)....................................menu\` \
                \n\`green....(#00ff00)....................................info\` \
                \n\`yellow...(#fff430)...................................other\` \
                \n\`orange...(#ff6600)...........................link commands\` \
                \n\`grey.....(#a4a4a4)..........................image commands\` \
                \n\`purple...(#810081)...........................text commands\` \
                \n\`red......(#ff0000)......................temporary commands\` \
                \n\`blue.....(#0000ff)...................................admin\` \
                \n`}
            )
            .addFields(
                {name: '\u200B', value: ` \
                \nPage 2/${totalPages} \
                \ntype \`|help <page number>\` to go to a specific page \
                \ntype \`|help <command>\` for help with a specific command (WIP) \
                `}
            )
	        .setTimestamp()
            .setFooter('created by lordgneurshk', 'https://64.media.tumblr.com/77a0542d39aaad6e3dbeb6ff5a9c9e46/tumblr_psjm9i3Fyp1u18swpo6_1280.png')

            message.channel.send(helpPage);
        }else if(args[0] === '3' || args[0] === 'links'){
            const helpPage = new MessageEmbed()
	        .setColor('#ff6600')
            .setTitle(`Help 3 | Link Commands`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|bill wurtz...................'|help bill wurtz' for usage\` \
                \n\`|bongocat........................................bongo cat\` \
                \n\`|carson...................................carson's twitter\` \
                \n\`|ce.....................................casually explained\` \
                \n\`|eczist.................................whi du thez eczist\` \
                \n\`|funney..............................sooooooooooooo funney\` \
                \n\`|hotewig..............history of the entire world, i guess\` \
                \n\`|noose........................a family friendly noose song\` \
                \n\`|one giant onion.........one giant onion's youtube channel\` \
                \n\`|papito......................................pakalu papito\` \
                \n\`|wolfie.......................................wolframAlpha\` \
                \n`}
            )
            .addFields(
                {name: '\u200B', value: ` \
                \nPage 3/${totalPages} \
                \ntype \`|help <page number>\` to go to a specific page \
                \ntype \`|help <command>\` for help with a specific command (WIP) \
                `}
            )
	        .setTimestamp()
            .setFooter('created by lordgneurshk', 'https://64.media.tumblr.com/77a0542d39aaad6e3dbeb6ff5a9c9e46/tumblr_psjm9i3Fyp1u18swpo6_1280.png')

            message.channel.send(helpPage);
        }else if(args[0] === '4' || args[0] === 'images'){
            const helpPage = new MessageEmbed()
	        .setColor('#a4a4a4')
            .setTitle(`Help 4 | Image Commands`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|blanket.................................there's a blanket\` \
                \n\`|communism.............................in the soviet union\` \
                \n\`lempathy....................................empathy banana\` \
                \n\`|evos..................................evil virus of satan\` \
                \n\`|fuck.............................what are you waiting for\` \
                \n\`|garbage................................a piece of garbage\` \
                \n\`|gneurshk.........................................gneurshk\` \
                \n\`|lazer......................................a deadly lazer\` \
                \n\`|no.....................................................no\` \
                \n\`|photosynthesis...................now you can eat sunlight\` \
                \n\`|religion............you could make a religion out of this\` \
                \n\`|taste.......................................taste the sun\` \
                \n`}
            )
            .addFields(
                {name: '\u200B', value: ` \
                \nPage 4/${totalPages} \
                \ntype \`|help <page number>\` to go to a specific page \
                \ntype \`|help <command>\` for help with a specific command (WIP) \
                `}
            )
	        .setTimestamp()
            .setFooter('created by lordgneurshk', 'https://64.media.tumblr.com/77a0542d39aaad6e3dbeb6ff5a9c9e46/tumblr_psjm9i3Fyp1u18swpo6_1280.png')

            message.channel.send(helpPage);
        }else if(args[0] === '5' || (args[0] === 'text' && args[1] === '1')){
            const helpPage = new MessageEmbed()
	        .setColor('#810081')
            .setTitle(`Help 5 | Text Commands 1`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|bubblewrap...............................have fun popping\` \
                \n\`|calc...................................a basic calculator\` \
                \n\`|help.................pulls up a specified page or command\` \
                \n\`|legbone......................................the leg bone\` \
                \n\`|minesweeper........................play minesweeper (WIP)\` \
                \n\`|mental breakdown..................it's a mental breakdown\` \
                \n\`|neckbone....................................the neck bone\` \
                \n\`|ping.................................................pong\` \
                \n\`|pong...........................................try it out\` \
                \n\`|ra ra............................................rasputin\` \
                \n\`|road work ahead..................................the vine\` \
                \n\`|speedtest.........................it's a mental breakdown\` \
                \n`}
            )
            .addFields(
                {name: '\u200B', value: ` \
                \nPage 5/${totalPages} \
                \ntype \`|help <page number>\` to go to a specific page \
                \ntype \`|help <command>\` for help with a specific command (WIP) \
                `}
            )
	        .setTimestamp()
            .setFooter('created by lordgneurshk', 'https://64.media.tumblr.com/77a0542d39aaad6e3dbeb6ff5a9c9e46/tumblr_psjm9i3Fyp1u18swpo6_1280.png')

            message.channel.send(helpPage);
        }else if(args[0] === '6' || (args[0] === 'text' && args[1] === '2')){
            const helpPage = new MessageEmbed()
	        .setColor('#810081')
            .setTitle(`Help 6 | Text Commands 2`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|test................................a simple test command\` \
                \n\`|tumblr........................quotes a random tumblr post\` \
                \n\`|tweet...............................quotes a random tweet\` \
                \n\`|what.................................................what\` \
                \n\`|wiggle..................................prepare to wiggle\` \
                \n\`|wiggle2.................use '|help wiggle2' for more info\` \
                \n\`|yeehaw..........................................yeehaw :)\` \
                \n`}
            )
            .addFields(
                {name: '\u200B', value: ` \
                \nPage 6/${totalPages} \
                \ntype \`|help <page number>\` to go to a specific page \
                \ntype \`|help <command>\` for help with a specific command (WIP) \
                `}
            )
	        .setTimestamp()
            .setFooter('created by lordgneurshk', 'https://64.media.tumblr.com/77a0542d39aaad6e3dbeb6ff5a9c9e46/tumblr_psjm9i3Fyp1u18swpo6_1280.png')

            message.channel.send(helpPage);
        }else if(args[0] === '7' || args[0] === 'temp'){
            const helpPage = new MessageEmbed()
	        .setColor('#ff0000')
            .setTitle(`Help ${args[0]} | Temporary Commands`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|election2020...................links to the current polls\` \
                \n\`|embed..........................................test embed\` \
                \n`}
            )
            .addFields(
                {name: '\u200B', value: ` \
                \nPage ${args[0]}/${totalPages} \
                \ntype \`|help <page number>\` to go to a specific page \
                \ntype \`|help <command>\` for help with a specific command (WIP) \
                `}
            )
	        .setTimestamp()
            .setFooter('created by lordgneurshk', 'https://64.media.tumblr.com/77a0542d39aaad6e3dbeb6ff5a9c9e46/tumblr_psjm9i3Fyp1u18swpo6_1280.png')

            message.channel.send(helpPage);
        }else if((args[0] === '8' || args[0] === 'admin') && message.member.hasPermission("ADMINISTRATOR")){
            const helpPage = new MessageEmbed()
	        .setColor('#0000ff')
            .setTitle(`Help 8 | Administrator Commands`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|ban.................................bans a mentioned user\` \
                \n\`|kick...............................kicks a mentioned user\` \
                \n`}
            )
            .addFields(
                {name: '\u200B', value: ` \
                \nPage 8/${totalPages} \
                \ntype \`|help <page number>\` to go to a specific page \
                \ntype \`|help <command>\` for help with a specific command (WIP) \
                `}
            )
	        .setTimestamp()
            .setFooter('created by lordgneurshk', 'https://64.media.tumblr.com/77a0542d39aaad6e3dbeb6ff5a9c9e46/tumblr_psjm9i3Fyp1u18swpo6_1280.png')

            message.author.send(helpPage);
        }else if(args[0] === 'wiggle2'){
            message.channel.send(`takes inputs in order of <text> <duration> <amplitude> <frequency> and send out a custom wiggle \
            \nexample: \`|wiggle2 wiggle 12 12 12\``)
        }else if(args[0] === 'bill' && args[1] === 'wurtz'){
            message.channel.send(`when specified, links to something bw related\
            \nexamples:\n\`|bill wurtz\` \n\`|bill wurtz youtube\`\n\`|bill wurtz twitter\` \n\`|bill wurtz questions\` \
            \n\`|bill wurtz store\` \n\`|bill wurtz reddit\` \n\`|bill wurtz discord\` \n\`|bill wurtz memes\``)
        }else if(args[0] === 'minesweeper'){
            message.channel.send(`define a board size and difficulty (easy/medium/hard) \
            \nexample: \`|minesweeper 10 10 easy\``)
        }else if(args[0] === 'bubblewrap'){
            message.channel.send(`sends a piece of bubblewrap with specified size and text, text input is optional and can be left blank\
            \nexample: \`|bubblewrap 10 10 pop\``)
        }else{
            message.channel.send(`no help available for that argument`)
        }
        
    }
}
