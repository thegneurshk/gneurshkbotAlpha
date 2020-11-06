module.exports = {
    name: 'ban',
    description: "admin only command, bans a specified user",
    execute(message, args){
        const {member, mentions} = message;
        const target = mentions.users.first();
        if(target) {
            const targetMember = message.guild.members.cache.get(target.id);
            targetMember.ban();
            message.channel.send(`${targetMember} has been banned`)
        }else{
            message.channel.send(`please specify a user to ban`);
        }
        
    }
}