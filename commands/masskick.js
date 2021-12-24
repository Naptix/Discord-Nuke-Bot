module.exports.run = async (client, message, args) => {

    message.guild.members.cache.forEach(member => {

        member.kick("You Got Hacked lol");

    });

}

module.exports.help = {
    name: "masskick"
}