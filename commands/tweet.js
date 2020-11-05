module.exports = {
    name: 'tweet',
    description: "sends tweets from certain users",
    execute(message, args){
        if(args[0] === 'bill' || args[0] === 'bw' || !args[0]){
            const messages = ['is slef', 
            `trickle down flamingoes\
            \nlet's say the flamingo lord gets an unlimited amount of flamingos,\
            \nthat means you and me will also probably get some flamingoes as well.\ `, 
            'dinner is very difficult to uncook'];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(randomMessage);
        }else if(args[0] === 'carson'){
            const messages = [`\n Ok guys,, try this math trick \ntake the number 0 \
            \n add 5 \nmultiply by 3 \nmultiply by 200 \nsubtract 15 \nadd 16 \nmultiply by 0 \
            \n Do you see it? th number you get isthe same one you started \
            \n please tell others`, 
            `i put a blindfold on and now i can't see the tutorial on how to get the \
            \nblindfold off because there's a blindfold in the way`, 
            `i'm too scared to touch potatoes because i could get the potato famine`, 
            `imagine if one day, we unlock the other 98\% of milk`,
            `moon pee`];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(randomMessage);
        }else if(args[0] === 'papito'){
            const messages = ['if i swallow magnets will i become attractive',
            'home is where you trust the toilet seat',
            'blood pressure too high to catch these hoes',
            `don't throw hate at me \nthrow money`,
            `i'm not like other teenagers \ni'm 51`];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(randomMessage);
        }
    }
}