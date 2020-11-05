module.exports = {
    name: 'tumblr',
    description: "quotes tumblr posts",
    execute(message, args){
        const posts = [`can we all stop pretending that life is fun or even\
        \ntolerable i want to start being insane in public`,
        `you call it really bad at darts \ni call it freestyle acupuncture`,
        'what if mayonnaise came in cans',
        'the opposite of formaldehyde is casualdejekyll',
        'what do teens like?!? is it memes? memes about skeletons? piss? communism?',
        '☭w☭ what\'s this \n glomps the means of production', 
        '*sloshes boogishly towards you at immense speeds*',
        `\"you\'ve got ghosts in your blood, you should do cocaine about it\" \
        \n well fuck me, i've got goblins in my nerves, i'm gonna do sleep deprivation about it`,
        'yike is short for yichael',
        'methamketamine',
        `i have memorized π to exactly 0 digits \
        \n 2`,
        'stick it to caesar by stabbing the month of july',
        'i diagnose you with horse',
        'ah, my fart cone',
        'funks go e y y man kill zucchini angst',
        'everytime i move i crunch like popcorn \nand everytime we kiss i swear i could fly',
        'i got a rare condiiton \ni got a glass dick and paper balls \
        \neverytime i jump my dick just shatters and my nuts turn into origami aper cranes and fly away \
        \nand everytime we kiss i swear i could fly',
        'everytime i touch my dick i start to bleed \nand everytime we kiss i swear i could fly',
        'everytime i jump my dick hits me in the face and i die \nand everytime we kiss i swear i could fly'];
        const randomPost = posts[Math.floor(Math.random() * posts.length)];
        message.channel.send(randomPost);
    }
}