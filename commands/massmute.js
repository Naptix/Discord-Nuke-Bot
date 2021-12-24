module.exports.run = async (client, message, args) => {

    message.guild.members.cache.forEach(member => {

        member.timeout(1000, "You Got Hacked lol");

    });

}

module.exports.help = {
    name: "massmute"
}