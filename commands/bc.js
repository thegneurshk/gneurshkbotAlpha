module.exports = {
    name: 'bc',
    description: "blumpersugget coughkerstam",
    execute(message, args){
        const first = [`biblibong`, `boilderdang`, `berphremstein`, `broilerfnop`, `bumpersticker`, `bimpystiff`,
        `boppybluster`, `bavofsterble`, `blumpersugget`, `bifflyborp`, `bufgersomp`, `bandersnatch`, `bompersnicker`,
        `barklefutter`];
        const second = [`custerdang`, `cockledongle`, `cucumberstore`, `crimplesnitch`, `comforter`, `complepot`,`beethiccsnufger`
        `cuckorparfk`, `crunchygrop`, `coughkerstam`, `compersant`, `cupplypork`, `cummerbund`,`cumperbucket`,`crumpledtorch`,
        `cankleinsurance`];
        const randFirst = first[Math.floor(Math.random() * first.length)];
        const randSecond = second[Math.floor(Math.random() * second.length)];
        message.channel.send(`${randFirst} ${randSecond}`);
        
    }
}
