const Discord = require('discord.js');
const bot = new Discord.Client();

//Command #1
bot.on('message', (message)=>{
    if(message.content == "*Events"){
        message.channel.sendMessage('https://www.instagram.com/p/BoiFHScHGJ0is4gSZkSxXdeDYzy8VyXqhy7LTU0/?taken-by=honk4lcse');
    }
});
//Command #2
{
bot.on('message', (message)=>{
    if(message.content == "*Help"){
        message.channel.sendMessage('Coming Soon');
    }
});
};
//Command #3
{
    bot.on('message',(message)=>{
        if(message.content== "*News"){
            message.channel.sendMessage('https://twitter.com/NPSchools/status/1051517390155075585')
        }
    });
};
//command #4
{
    bot.on('message',(message)=>{
        if(message.content== "*Test"){
            message.channel.sendMessage('Success!')
        }
    });
};

bot.on('ready', function(){
    console.log("Ready");
});

bot.login('NTAwMzIwMzk1NjY5NDA1NzE2.DqfSuA.IfKoVNlThenkYyemzPwU-i9mxZM');
