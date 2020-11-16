module.exports = {
    name: 'tweet',
    description: "sends tweets from certain users",
    execute(message, args){
        const messages = ['is slef', 
        `trickle down flamingoes\
        \nlet's say the flamingo lord gets an unlimited amount of flamingos,\
        \nthat means you and me will also probably get some flamingoes as well.\ `, 
        'dinner is very difficult to uncook', 
        `\n Ok guys,, try this math trick \ntake the number 0 \
        \n add 5 \nmultiply by 3 \nmultiply by 200 \nsubtract 15 \nadd 16 \nmultiply by 0 \
        \n Do you see it? th number you get isthe same one you started \
        \n please tell others`, 
        `i put a blindfold on and now i can't see the tutorial on how to get the \
        \nblindfold off because there's a blindfold in the way`, 
        `i'm too scared to touch potatoes because i could get the potato famine`, 
        `imagine if one day, we unlock the other 98\% of milk`,
        `moon pee`,
        'if i swallow magnets will i become attractive',
        'home is where you trust the toilet seat',
        'blood pressure too high to catch these hoes',
        `don't throw hate at me \nthrow money`,
        `i'm not like other teenagers \ni'm 51`,
        `yeah, i've got a WAP \n \u200B \nW- \nA- :sparkles: abandonment issues :sparkles: \
        \nP-`,
        `the tie your tooth to a doorknob trick except it pulls your whole skeleton out`]
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(randomMessage);
        //message.channel.send(messages[messages.length - 1]);
    }
}
