const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `

╔══✦═══✦═══✦══╗
    🤖 ${settings.botName || 'AuraSynk Bot'}  
╚══✦═══✦═══✦══╝
⚡ Version : *${settings.version || '2.0.5'}*  
👑 Owner   : *${settings.botOwner || 'Mr.Amit Sharma'}*  
🎬 YT : ${global.ytch}  

✦───────────────✦
 🌐 GENERAL
✦───────────────✦
📝 .help / .menu  
📶 .ping   
❤️ .alive  
🔊 .tts <text>   
👤 .owner  
😂 .joke   
💡 .quote  
📚 .fact   
🌦️ .weather <city>  
📰 .news   
🎶 .lyrics <song>  
🔮 .8ball <q>   
🖼️ .attp <text>  
🌍 .trt <txt> <lang>  
📸 .ss <link>   
🆔 .jid  
👥 .groupinfo   
🛡️ .staff  
👀 .vv  

✦───────────────✦
 👮 ADMIN
✦───────────────✦
🔨 .ban @user  
⬆️ .promote @user  
⬇️ .demote @user  
🤫 .mute / .unmute  
👢 .kick @user  
⚠️ .warn / .warnings  
⛔ .antilink / .antibadword  
🧹 .clear   
🏷️ .tag <msg>  
📢 .tagall  
🤖 .chatbot  
🔄 .resetlink  
👋 .welcome on/off  
👋 .goodbye on/off  

✦───────────────✦
 🔒 OWNER
✦───────────────✦
🎚️ .mode   
📌 .autostatus  
🧹 .clearsession / .cleartmp  
🛡️ .antidelete  
🖼️ .setpp <reply-img>  
🤩 .autoreact  
⌨️ .autotyping on/off  
👀 .autoread on/off  

✦───────────────✦
 🎨 STICKERS
✦───────────────✦
🌫️ .blur <img>  
🖼️ .sticker / .simage  
🔗 .tgsticker <link>  
😂 .meme   
🎭 .take <pack>  
😍 .emojimix <e1>+<e2>  

✦───────────────✦
 🎮 GAMES
✦───────────────✦
❌⭕ .tictactoe @user  
🪢 .hangman   
🔤 .guess  
📖 .trivia   
✅ .answer  
🎭 .truth   
🎭 .dare  

✦───────────────✦
 🤖 AI
✦───────────────✦
💬 .gpt <q>  
🧠 .gemini <q>  
🎨 .imagine <prompt>  
🌌 .flux <prompt>  

✦───────────────✦
 🎯 FUN
✦───────────────✦
🌹 .roseday   
😘 .flirt  
🤭 .compliment / .insult  
🌙 .goodnight   
📝 .shayari  
💘 .ship @user   
😳 .simp  
🤪 .stupid   
💀 .wasted  
💖 .character  

✦───────────────✦
 🔤 TEXTMAKER
✦───────────────✦
🧊 .ice   
❄️ .snow   
🔥 .fire  
✨ .neon  
👿 .devil  
🌩️ .thunder  
🎮 .arena 
💜 .purple 
🌿 .leaves  
⚡ .glitch 
🕶️ .hacker 
🎬 .1917  
🎨 .matrix 
🖌️ .light 
🌊 .sand  
🎤 .blackpink 
🛡️ .impressive  
🪙 .metallic  

✦───────────────✦
 📥 DOWNLOADER
✦───────────────✦
🎵 .play / .song <name>  
📹 .video <name> 
🎬 .ytmp4  
📸 .instagram <link>  
📘 .facebook <link>  
🎶 .tiktok <link>  

✦───────────────✦
 🧩 MISC
✦───────────────✦
💔 .heart   
🍑 .horny  
🌈 .lgbt   
🔄 .circle  
🐢 .oogway  
📝 .tweet  
📢 .ytcomment 
🚔 .lolice  
🪞 .glass   
🚨 .triggered  
🔒 .jail    
✔️ .passed  
🎭 .comrade 
🎟️ .namecard  
😂 .its-so-stupid 
🌈 .gay  

✦───────────────✦
 🖼️ ANIME
✦───────────────✦
🍜 .nom   
👉 .poke  
😭 .cry   
😘 .kiss  
🤗 .hug   
👏 .pat  
😉 .wink 
🤦 .facepalm  

✦───────────────✦
 💻 GITHUB
✦───────────────✦
🐙 .git   
📦 .github  
📜 .sc    
⚡ .script  
📂 .repo  

🚀 *Stay tuned for latest updates & features!*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363420373343487@newsletter',
                        newsletterName: 'AuraSynk Bot',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363420373343487@newsletter',
                        newsletterName: 'AuraSynk Bot by Amit Sharma',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
