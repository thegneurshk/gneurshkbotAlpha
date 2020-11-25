module.exports = {
    name: 'bc',
    description: "blumpersugget coughkerstam",
    execute(message, args){
        const first = [`biblibong`, `boilderdang`, `Berphremstein`, `boilderdang`, `bumpersticker`, `bimpystiff`,
        `boppybluster`, `bavofsterble`, `blumpersugget`, `bifflyborp`, `bufgersomp`];
        const second = [`custerdang`, `cockledongle`, `cucumberstore`, `crimplesnitch`, `comforter`, `complepot`,
        `cuckorparfk`, `crunchygrop`, `coughkerstam`, `compersant`, `cupplypork`];
        const randFirst = first[Math.floor(Math.random() * first.length)];
        const randSecond = second[Math.floor(Math.random() * second.length)];
        message.channel.send(`${randFirst} ${randSecond}`);
    }
}