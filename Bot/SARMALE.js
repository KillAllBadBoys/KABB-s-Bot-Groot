

const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'your bot token here';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am Groot!');
});


// Create an event listener for messages
client.on('message', message => {

    //if (message.content.startsWith("/kick")) {
  //      // Easy way to get member object though mentions.
//        var member= message.mentions.members.first();
      //  // Kick
    //    member.kick().then((member) => {
  //          // Successmessage
//            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
      //  }).catch(() => {
    //         // Failmessage
  //          message.channel.send("Access Denied");
//        });
//    }
var kickable = true 	
	if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
   // if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
  //    return message.reply("Sorry, you don't have permissions to use this!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");

    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply('Sorry ${message.author} I couldnt kick because of : ${error}'));
    message.reply('${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}');

  }
	
	
	if (message.content === '!D')
         member.kick(reason)
	
});
// Log our bot in
client.login("NDEyMjg0MzU3ODE0OTExMDE2.DWID1w.uDeA8KSbDhlQbs1j1ljsOIoiH_c");