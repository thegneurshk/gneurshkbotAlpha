module.exports = {
    name: 'kick',
    description: "admin only command, kicks a specified user",
    execute(message, args){
        const {member, mentions} = message;
        const target = mentions.users.first();
        if(target) {
            const targetMember = message.guild.members.cache.get(target.id);
            targetMember.kick();
            message.channel.send(`${targetMember} has been kicked`)
        }else{
            message.channel.send(`please specify a user to kick`);
        }
        
    }
}