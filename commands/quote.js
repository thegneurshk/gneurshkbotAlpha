module.exports = {
    name: 'quote',
    description: "sends a random quote",
    execute(message, args){
        const quotes = [
        `master have given dobby a taste for human flesh`,
        `do you vore your mother with that mouth`,
        `liam go cry on a paintbrush`,
        `the maraca man has deemed you untrustworthy`,
        `you fucking sopping zucchini`,
        `dishwasher soup`,
        `your hand sauce is loud`,
        `corn can be found`,
        `don't do that, you're gonna catch athlete's mouth`,
        `recessive horse genes`,
        `i don't like this child....it's got the wrong bones`,
        `shredded cheese is a plot by the government to steal our women`,
        `*while upside down* all the pee is going to my head`,
        `honey? you mean BEE syrup??`,
        `my gigabytes are ticklish`,
        `your pickles are leaking`,
        `chicken nuggest?`,
        `i burp, therefore i am`,
        `i snort kiwis whole`,
        `feel the meat on the tangerine`,
        `i am going to solidify in your nasal cavity`,
        `hepatitis E`,
        `tax fraud? i commit gravity fraud`,
        `Richard is my father's name, call me Penis`,
        `the roof is peeing!!`,
        `i'm injecting the chantidote`,
        `for legal reasons my lawyer is not letting me say this....`,
        `Britain’s kryptonite, except instead of throwing green rocks at the man in spandex, \
you have to throw 6 ravens out of the country`,
        `i will unslice your bread`,
        `an atrocity a day keeps god at bay`,
        `:( i got blue in my coffee`,
        `i diagnose you with BEES`,
        `it's time to drain the baby's swamp`,
        `the five elements are earth, water, fire, air, and ear`,
        `prepare for floor donuts`,
        `ask me a purple question`,
        `let's play 'fix that spaghetti'`,
        `whatever türks your gök`,
        `stop putting cheese on my thigh`,
        `why is the tick clocking`,
        `i'm going to sinusoidal you`,
        `Θ cheese`,
        `my toes are squeaky`,
        `eyeball milk \nfresh from the orb`,
        `what're you gonna do? lick my teeth`,
        `if van gogh can lose his ears so can you`,
        `ya, i pee lobsters`,
        `birds need toes and i sneeze whiskey`,
        `bath and body parts`,
        `i'm writing you up for strudels`,
        `it's not robbery, it's surprise communism`,
        `it's not wwiii, it's surprise thermonuclear war`,
        `your pants can't wait for my pee`,
        `TRENT NO!! you can't seduce the troll`,
        `is it raining or is it small intestines`,
        `chicken nuggets are just bird cookies`,
        `who peed in your cereal this morning`,
        `milk is cereal sauce`,
        `my teeth itch`,
        `cheese minecraft`,
        `no?? the carpet is not a tomato`,
        `jacop's glass carpet`,
        `this mexican cheese terrorist looks at money like quentin tarantino looks at feet`,
        `popcorn is short for popular cornelius`,
        `dictator is short for richard potato`,
        `my brother's brother is my grandbrother`,
        `a sond of the droombil dum`,
        `australians eat toilets`,
        `i don't succ, i swaccow`,
        `tater tots is short for potato toddlers`,
        `do whales hear better in milkshakes?`,
        `want my gently used orange`,
        `it's free, like twitter, or theft`,
        `she screwed up on purples`,
        `i have 15 spoons on my person at all times`,
        `i was using my zebra`,
        `arson is tasty`,
        `4379323687532315432324790743211568538589319537739437395319327947585766787654444`,
        `do you ever hear the sound of distressed febreze?`,
        `the element of ketchup is Ke`,
        `this room smells like my mom's bread`,
        `i love to touch pianos`,
        `suck my konnichiweiner`,
        `it's raining anvils and pianos outside`,
        `you incompetent rutabega`,
        `bad penguins get placed in the no dance orb`,
        `your smile can snap the sun's neck`,
        `you absolute burger, that's not how you boil toast`,
        `omae wa mou scooby doo`,
        `i run on chaos and sheer fucking will`,
        `nothing is sacred, not even your teeth`,
        `peepee poopoo`,
        `does life insurance pay me if i'm the accident?`,
        `i'm not slim shady, i'm thicc sunny`,
        `it's a seeing eye car`,
        `give me the smooth regular`,
        `willy shakes is the name, yo mamma jokes is the game`,
        `my mom ate my homework`,
        `INKEN CHUMGET?!`,
        `naughty girls get sent to the jesus closet`,
        `i don't think, therefore i amn't`,
        `i put the sexy in dyslexia`,
        `i put an egg in my clarinet`,
        `things spontaneously combust in the boys bathroom, it's fine`, 
        `i've seen irish famines with more potatoes than this farm`,
        `i've memorized your fingers`,
        `i don't give up on yoghurt`,
        `i'm not sweating, i showered in the drinking fountain`,
        `i hope you've enjoyed your symmetrical face, because that's about to change`,
        `i can't go to chuck e cheese, the rat's got a restraining order on me`,
        `every time i walk my head punches me \nand every time we kiss i swear i could fly`,
        `go suck on a soggy baguette`,
        `god may judge you, but his sins outnumber your own`,
        `the bar was so low it was practically a tripping hazard in hell, yet here you are, limbo dancing with the devil`];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        message.channel.send(randomQuote);
        //message.channel.send(quotes[quotes.length - 1]);
    }
}
