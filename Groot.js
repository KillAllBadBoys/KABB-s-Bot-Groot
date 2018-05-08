

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
var A=0,B=0,C=0;
var BRB=false
// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '!vote') {
    // Send "pong" to the same channel
    message.channel.send("＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿");
    message.channel.send("| Windows Dialog　　　　　　　　　　　　　　　　　　    [－] [口] [×]  |");
    message.channel.send("| ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣      ");
    message.channel.send("|　Windows has detected that mice are awesome! ");
    message.channel.send("|     Do you agree? 　　　　　　   ");
    message.channel.send("|　 　　＿＿＿＿＿＿　　　　＿＿＿＿＿＿　　　　＿＿＿＿＿　　       　　                                                                                  ");
    message.channel.send("| 　 　｜　YES　　     |　　　｜　Yes          　｜ 　 　 | 　   Ofc  　  |   ");
    message.channel.send("|　 　　￣￣￣￣￣￣　　　　￣￣￣￣￣￣　　　　￣￣￣￣￣　    ");
    message.channel.send("|＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿ __  ");
  }
    if (message.content === '!VOTE') {
    // Send "pong" to the same channel
    message.channel.send("＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿\n| Windows Dialog　　　　　　　　　　　　　　　　　　    [－] [口] [×]  |\n| ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣      \n|　Windows has detected that mice are awesome! \n|     Do you agree? 　　　　　　   \n|　 　　＿＿＿＿＿＿　　　　＿＿＿＿＿＿　　　　＿＿＿＿＿　　       　　            \n| 　 　｜　YES　　     |　　　｜　Yes          　｜ 　 　 | 　   Ofc  　  |   \n|　 　　￣￣￣￣￣￣　　　　￣￣￣￣￣￣　　　　￣￣￣￣￣　    \n|＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿ __  ");
  }
  
//     var x = 0
//     var y = 0
//parseInt(x);
//parseInt(x);	 
// if (message.content === '!test') 
// {
//	 {
//    message.channel.send("sarmale");
//    message.channel.send("ardei");
//	}
// if (message.content === 'YES')
//    x+=1
// else if (message.content === 'NO')
//    y++
// //message.channel.send(x+" "+y)
// if (message.content === '!SCRIE')
//	 message.channel.send(x+" "+y)
// }
// 
// if (message.content === '!SCRIE')
//	 message.channel.send(x+" "+y)
 
 
//var w = 1;
//// if (message.content === '!DACA'){ 
// var w = false
//var x = 0
// message.channel.send('arabasdas');
////while (w=1){
// if (message.content === '!sarmale')
//	w = 0
//	message.channel.send(w);
// else if (message.content === '!ardei')
//	w = 1
// message.channel.send(w); 
//// if (message.content === 'YES')
//   x++
// message.channel.send(x)
//// message.channel.send('sdsa');
//  if (false) {            
//  break;}
////}
////}
////  if (message.content === '!A') {
//	  w++
////  message.channel.send(w); } 
////}

//var A = 1;
//if (message.content === '!DACA') {
//  if (message.content === '!B') {
//      message.channel.send(A)
//  } 
//} 


//var DACA = true
//if (message.content === '!DACA') {
//while (DACA = true) {
//    message.channel.send('ase')
//    if (DACA = false) {            
//        break;
//    } 
//}
//}


//var n = A.toString();
//var P = B.toString();
//var z = rezultat.toString();
//var t = numar.toString();

//var O = 2;
//var H = 1;
//if (O > H) {message.channel.send("You took cap in gura" , {tts:true});}


var rezultat
var numar
//var CAUT = false;
if (message.content === '!voteaza')  {  
//	CAUT = true; 
    message.channel.send("Voting starts NOW!" , {tts:true});
	message.channel.send("   ");
	message.channel.send("＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿\n| Windows Dialog　　　　　　　　　　　　　　　　　　    [－] [口] [×]  |\n| ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣      \n|　Windows has detected that mice are awesome! \n|     Do you agree? 　　　　　　   \n|　 　　＿＿＿＿＿＿　　　　＿＿＿＿＿＿　　　　＿＿＿＿＿　　       　　            \n| 　 　 ｜ Fuck Yeah   |　　　    ｜       Yes      ｜ 　 　     | 　   Ofc　   |   \n|　 　　￣￣￣￣￣￣　　　　￣￣￣￣￣￣　　　　￣￣￣￣￣　    \n|＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿ __  ");	
	
	setTimeout(function(){
//		    if (A>B && A>C) message.channel.send("And the winner is 'Fuck Yeah' with"+" "+A+" "+"votes!" , {tts:true}); 
//	        else if (B>C) message.channel.send("And the winner is 'Yes' with"+" "+B+" "+"votes!" , {tts:true}); 
//			else message.channel.send("And the winner is 'Of course' with"+" "+C+" "+"votes!" , {tts:true});	
	message.channel.send("   ");	                     
            if (A==B && B==C && C==0) message.channel.send("Unfortunately there are no winners." , {tts:true});
			else if (A==C && C==B && A!=0) {message.channel.send("And the winners are 'Fuck Yeah' , 'Yes' and 'Of course' with"+" "+A+" "+","+" "+B+" "+"and"+" "+C+" "+"votes!" , {tts:true});}
		    else if (A==B && B>C) {message.channel.send("And the winners are 'Fuck Yeah' and 'Yes' with"+" "+A+" "+"and"+" "+B+" "+"votes!" , {tts:true});} 
			else if (A==B && C>B) {message.channel.send("And the winner is 'Of course' with"+" "+C+" "+"votes!" , {tts:true});}
			else if (B==C && B>A) {message.channel.send("And the winners are 'Yes' and 'Of course' with"+" "+B+" "+"and"+" "+C+" "+"votes!" , {tts:true});} 
			else if (B==C && A>B) {message.channel.send("And the winner is 'Fuck Yeah' with"+" "+A+" "+"votes!" , {tts:true});}
			else if (A==C && C>B) {message.channel.send("And the winners are 'Fuck Yeah' and 'Of course' with"+" "+A+" "+"and"+" "+C+" "+"votes!" , {tts:true});} 
			else if (A==C && B>C) {message.channel.send("And the winner is 'Yes' with"+" "+B+" "+"votes!" , {tts:true});}
			else if (A>B && A>C) message.channel.send("And the winner is 'Fuck Yeah' with"+" "+A+" "+"votes!" , {tts:true}); 
            else if (B>C) message.channel.send("And the winner is 'Yes' with"+" "+B+" "+"votes!" , {tts:true}); 
            else if (C>B) message.channel.send("And the winner is 'Of course' with"+" "+C+" "+"votes!" , {tts:true});					
			
	message.channel.send("Fuck Yeah ="+" "+A+" ; "+"Yes ="+" "+B+" ; "+"Ofc ="+" "+C);
	A=0,B=0,C=0;
		}, 60000); 
    }
//	if A>B message.channel.send("And the winner is YES with"+A+"votes!" , {tts:true}) else message.channel.send("And the winner is"+NO+"with B votes!" , {tts:true});
if (message.content === 'Fuck Yeah') A=A+1; 
else if (message.content === 'Yes') B=B+1; 
else if (message.content === 'Ofc') C=C+1;

	
    if (message.content === '/help') {
    // Send "pong" to the same channel
    message.channel.send("!voteaza !tts !gura !spam");
//!vote !VOTE
	}


      if (message.content === '!tts') {
    // Send "pong" to the same channel
    message.channel.send("SARMALE IS THE BEST" , {tts:true});

  }
        if (message.content === '!gura') {
    // Send "pong" to the same channel
    message.channel.send("You took cap in gura" , {tts:true});

  }
//var member= message.mentions.members.first();  
//          if (message.content.startsWith('!A')) {
    // Send "pong" to the same channel
//    message.channel.send(" "+member);
//    message.delete(1000);
//  }

//var C = "@Rythm#3722"  
//            if (message.content === '!B') {
//    C.kick()
//    C.kick("dejaba")
//      .catch(error => message.reply('Sorry ${message.author} I couldnt kick because of : ${error}'));
//    message.reply('${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}');
//  }
  
 
//if (message.content.includes.toLowerCase("muie la cai")) {
//	message.channel.send("SCRIE !kick @Rares#5565 EJT PROST")
//}
 
     if (message.content === "!spam") {	 
      var interval = setInterval (function () {
        message.channel.send("The early bird may get the worm, but its the second mouse that gets the cheese.")
		message.channel.send("")
      }, 60000 * 60); 
	  	 message.channel.send("Spam will start soon!");	
    }
	
	     if (message.content === "!matei") {	 
      var interval = setInterval (function () {
        message.channel.send("Matei" , {tts:true});
		message.channel.send("")
      }, 1000); 
	  	 message.channel.send("Spam will start soon!" , {tts:true});	
    }
	
	if (message.content === "BRB") {
    BRB = true;		
    message.channel.send("Be Right Back" , {tts:true});
    message.channel.send("Be Right Back" , {tts:true});
    var interval = setInterval (function () {
    message.channel.send("Be Right Back" , {tts:true});
		message.channel.send("")
      }, 10000 * 5); 	
    }
	if (message.content === "BACK") 
    BRB = false;		

	
	
//	if (message.content === '!D') 
//	{	userRoles.forEach(function(role)
//        client.removeMemberFromRole('@cezieu#9901', 'III - Subofițeri - Butonubi') )
//	}
	
});
// Log our bot in
client.login(process.env.token);
