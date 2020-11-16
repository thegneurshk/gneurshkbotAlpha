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
                \n\`|help 3........................permanent commands 1 (1-12)\` \
                \n\`|help 4.......................permanent commands 2 (13-24)\` \
                \n\`|help 5.......................permanent commands 3 (25-36)\` \
                \n\`|help 6.......................permanent commands 4 (37-41)\` \
                \n\`|help 7...........................temporary commands (1-2)\` \
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
            .setTitle(`Help ${args[0]} | Info`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`name.................................gneurshkbotAlpha#3939\` \
                \n\`date created.............................03/11/20, tuesday\` \
                \n\`last modified.............................15/11/20, sunday\` \
                \n\`total commands..........................................45\` \
                \n\`temporary commands.......................................2\` \
                \n\`permanent commands......................................41\` \
                \n\`administrator commands...................................2\` \
                \n\`total files.............................................29\` \
                \n\`total images............................................12\` \
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
            .setTitle(`Help ${args[0]} | Colours`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`black....(#000000)....................................menu\` \
                \n\`violet...(#810081)......................permanent commands\` \
                \n\`red......(#ff0000)......................temporary commands\` \
                \n\`green....(#00ff00)....................................info\` \
                \n\`blue.....(#0000ff)...................................admin\` \
                \n\`yellow...(#fff430)...................................other\` \
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
        }else if(args[0] === '3'){
            const helpPage = new MessageEmbed()
	        .setColor('#810081')
            .setTitle(`Help ${args[0]} | Permanent Commands 1`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|bill wurtz................links to a specified bw website\` \
                \n\`|bongocat........................................bongo cat\` \
                \n\`|blanket.................................there's a blanket\` \
                \n\`|bubblewrap...............................have fun popping\` \
                \n\`|calc...................................a basic calculator\` \
                \n\`|carson...................................carson's twitter\` \
                \n\`|ce.....................................casually explained\` \
                \n\`|communism.............................in the soviet union\` \
                \n\`|eczist.................................whi du thez eczist\` \
                \n\`lempathy....................................empathy banana\` \
                \n\`|evos..................................evil virus of satan\` \
                \n\`|fuck.............................what are you waiting for\` \
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
        }else if(args[0] === '4'){
            const helpPage = new MessageEmbed()
	        .setColor('#810081')
            .setTitle(`Help ${args[0]} | Permanent Commands 2`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|funney..............................sooooooooooooo funney\` \
                \n\`|garbage.........................................bongo cat\` \
                \n\`|gneurshk................................there's a blanket\` \
                \n\`|help.................pulls up a specified page or command\` \
                \n\`|hotewig..............history of the entire world, i guess\` \
                \n\`|lazer......................................a deadly lazer\` \
                \n\`|legbone......................................the leg bone\` \
                \n\`|mental breakdown..................it's a mental breakdown\` \
                \n\`|neckbone....................................the neck bone\` \
                \n\`|no.....................................................no\` \
                \n\`|noose........................a family friendly noose song\` \
                \n\`|one giant onion.........one giant onion's youtube channel\` \
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
        }else if(args[0] === '5'){
            const helpPage = new MessageEmbed()
	        .setColor('#810081')
            .setTitle(`Help ${args[0]} | Permanent Commands 3`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|papito......................................pakalu papito\` \
                \n\`|photosynthesis...................now you can eat sunlight\` \
                \n\`|ping.................................................pong\` \
                \n\`|pong...........................................try it out\` \
                \n\`|ra ra............................................rasputin\` \
                \n\`|religion............you could make a religion out of this\` \
                \n\`|road work ahead..............................the leg bone\` \
                \n\`|speedtest.........................it's a mental breakdown\` \
                \n\`|taste.......................................taste the sun\` \
                \n\`|test................................a simple test command\` \
                \n\`|tumblr........................quotes a random tumblr post\` \
                \n\`|tweet.....................use '|help tweet' for more info\` \
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
        }else if(args[0] === '6'){
            const helpPage = new MessageEmbed()
	        .setColor('#810081')
            .setTitle(`Help ${args[0]} | Permanent Commands 4`)
            .setAuthor('gneurshkbotAlpha', 'https://pbs.twimg.com/profile_images/1266879435220762624/9Cb4kS-P_400x400.jpg',
            'https://github.com/lordgneurshk/gneurshkbotAlpha')
            .setThumbnail('https://pbs.twimg.com/profile_images/867433918286491654/zC_Zd2Fw_400x400.jpg')
        	.addFields(
                { name: '\u200B', value: ` \
                \n\`|what.................................................what\` \
                \n\`|wiggle..................................prepare to wiggle\` \
                \n\`|wiggle2.................use '|help wiggle2' for more info\` \
                \n\`|wolfie.................................. ....wolframAlpha\` \
                \n\`|yeehaw...................................... ...yeehaw :)\` \
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
        }else if(args[0] === '7'){
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
            .setTitle(`Help ${args[0]} | Administrator Commands`)
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
                \nPage ${args[0]}/${totalPages} \
                \ntype \`|help <page number>\` to go to a specific page \
                \ntype \`|help <command>\` for help with a specific command (WIP) \
                `}
            )
	        .setTimestamp()
            .setFooter('created by lordgneurshk', 'https://64.media.tumblr.com/77a0542d39aaad6e3dbeb6ff5a9c9e46/tumblr_psjm9i3Fyp1u18swpo6_1280.png')

            message.author.send(helpPage);
        }else if(args[0] === 'tweet'){
            message.channel.send(`sends a tweet from bill wurtz, carson, or papito when specified \
            \nexample: \`|tweet bill\``)
        }else if(args[0] === 'wiggle2'){
            message.channel.send(`takes inputs in order of <text> <duration> <amplitude> <frequency> and send out a custom wiggle \
            \nexample: \`|wiggle2 wiggle 12 12 12\``)
        }else{
            message.channel.send(`no help available for that argument`)
        }
        
    }
}
