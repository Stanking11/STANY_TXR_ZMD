const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    
 cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('EAT');

// Créer une date et une heure en EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭──────────────────❂
┊❄️╭───*𝗦𝗧𝗔𝗡𝗬-𝗧𝗘𝗖𝗛*────❂
┊❄️┊ *𝐔𝐬𝐞𝐫* : ${s.OWNER_NAME}
┊❄️┊ *𝐌𝐨𝐝𝐞* : ${mode}
┊❄️╰───────────────❂
┊❄️┊ *𝐓𝐢𝐦𝐞* : ${temps}  
┊❄️┊ *𝐑𝐀𝐌* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┊🎄╰───────────────❂
╰──────────────────❂ \n\n`;
 
    let menuMsg=`  
    ©𝗦𝗧𝗔𝗡𝗬-𝗧𝗫𝗥-𝗭𝗠𝗗™
       
🙂───────────────
> ◈┃• Owner : *${config.OWNER_NAME}*
> ◈┃• Baileys : *Multi Device*
> ◈┃• Type : *NodeJs*
> ◈┃• Platform : *Heroku*
> ◈┃• Mode : *[${config.MODE}]*
> ◈┃• Prifix : *[${config.PREFIX}]*
> ◈┃• Version : *1.0.0*
 ────────────────
─────────────────

🙂───〔 *Download Menu* 〕┈⊷
🔥───────────────
> ◈┃ facebook
> ◈┃ mediafire
> ◈┃ tiktok
> ◈┃ twitter
> ◈┃ Insta
> ◈┃ apk
> ◈┃ img
> ◈┃ tt2
> ◈┃ git
> ◈┃ spotify
> ◈┃ play
> ◈┃ play2
> ◈┃ play3
> ◈┃ audio
> ◈┃ video
> ◈┃ video2
> ◈┃ ytmp3
> ◈┃ ytmp4
> ◈┃ song
> ◈┃ darama
> ◈┃ gdrive
> ◈┃ smovie
> ◈┃ baiscope 
> ◈┃ ginisilia 
 ───────────────
 

🙂───〔 *Group Menu* 〕───
🔥───────────────
> ◈┃ grouplink
> ◈┃ kickall
> ◈┃ kickall2
> ◈┃ kickall3
> ◈┃ add
> ◈┃ remove
> ◈┃ kick
> ◈┃ promote 
> ◈┃ demote
> ◈┃ dismiss 
> ◈┃ revoke
> ◈┃ setgoodbye
> ◈┃ setwelcome
> ◈┃ delete 
> ◈┃ getpic
> ◈┃ ginfo
> ◈┃ delete 
> ◈┃ disappear on
> ◈┃ disappear off
> ◈┃ disappear 7D,24H
> ◈┃ allreq
> ◈┃ updategname
> ◈┃ updategdesc
> ◈┃ joinrequests
> ◈┃ senddm
> ◈┃ nikal
> ◈┃ mute
> ◈┃ unmute
> ◈┃ lockgc
> ◈┃ unlockgc
> ◈┃ invite
> ◈┃ tag
> ◈┃ hidetag
> ◈┃ tagall
> ◈┃ tagadmins
 ───────────────


🙂───〔 *Owner Menu* 〕───
🔥───────────────
> ◈┃ owner
> ◈┃ menu
> ◈┃ menu2
> ◈┃ vv
> ◈┃ listcmd
> ◈┃ allmenu
> ◈┃ repo
> ◈┃ block
> ◈┃ unblock
> ◈┃ fullpp
> ◈┃ setpp
> ◈┃ restart
> ◈┃ shutdown
> ◈┃ updatecmd
> ◈┃ alive
> ◈┃ ping 
> ◈┃ gjid
> ◈┃ jid
 ───────────────

🙂───〔 *Fun Menu* 〕━───
🔥───────────────
> ◈┃ insult
> ◈┃ hack
> ◈┃ ship
> ◈┃ character
> ◈┃ pickup 
> ◈┃ joke
> ◈┃ hrt
> ◈┃ hpy
> ◈┃ syd
> ◈┃ anger
> ◈┃ shy
> ◈┃ kiss
> ◈┃ mon
> ◈┃ cunfuzed
> ◈┃ setpp
> ◈┃ hand
> ◈┃ nikal
> ◈┃ hold
> ◈┃ hug
> ◈┃ nikal
> ◈┃ hifi
> ◈┃ poke
 ───────────────

🙂───〔  Convert Menu 〕───
🔥───────────────
> ◈┃ sticker
> ◈┃ sticker2
> ◈┃ fancy
> ◈┃ take
> ◈┃ tomp3
> ◈┃ tts
> ◈┃ trt
 ───────────────


🙂───〔 *Ai Menu* 〕━────
🔥───────────────
> ◈┃ ai
> ◈┃ gpt
> ◈┃ meta
> ◈┃ blackbox
> ◈┃ gpt4
> ◈┃ bing
> ◈┃ copilot
 ───────────────

🙂───〔 *Main Menu* 〕━───
🔥───────────────
> ◈┃ ping
> ◈┃ ping2
> ◈┃ speed
> ◈┃ live 
> ◈┃ alive
> ◈┃ runtime
> ◈┃ uptime 
> ◈┃ repo
> ◈┃ owner
> ◈┃ menu
> ◈┃ menu2
> ◈┃ restart
 ───────────────

🙂───〔 *Anime Menu* 〕━──
🔥───────────────
> ◈┃ fack
> ◈┃ dog
> ◈┃ awoo
> ◈┃ garl
> ◈┃ waifu
> ◈┃ neko
> ◈┃ megnumin
> ◈┃ neko
> ◈┃ maid
> ◈┃ loli
> ◈┃ animegirl
> ◈┃ animegirl
> ◈┃ animegirl1
> ◈┃ animegirl2
> ◈┃ animegirl3
> ◈┃ animegirl4
> ◈┃ animegirl5
> ◈┃ anime1
> ◈┃ anime1
> ◈┃ anime2
> ◈┃ anime3
> ◈┃ anime4
> ◈┃ anime5
> ◈┃ animenews
> ◈┃ foxgirl
> ◈┃ naruto
 ───────────────

🙂───〔  Other Menu 〕────
🔥───────────────
> ◈┃ fact
> ◈┃ pair
> ◈┃ pair2
> ◈┃ fancy
> ◈┃ logo <text>
> ◈┃ define
> ◈┃ news
> ◈┃ movie
> ◈┃ weather
> ◈┃ srepo
> ◈┃ insult
> ◈┃ save
> ◈┃ wikipedia
> ◈┃ gpass
> ◈┃ githubstalk
> ◈┃ yts
> ◈┃ ytv
 ───────────────
> ©𝚂𝚃𝙰𝙽𝚈 𝚃𝚇𝚁 𝚉𝙼𝙳 `;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*popkid*" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
