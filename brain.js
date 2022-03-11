

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp,  formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const yts= require("yt-search")
db = require('quick.db')
tb = new db.table('exp')
gp= new db.table('grp')
const canvacord=require('canvacord')
module.exports = ichi = async (ichi, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
      const icmd=body.startsWith(prefix)
     const isCmd = prefix.includes(body != '' && body.slice(0, 1)) && body.slice(1) != ''
     const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ichi.decodeJid(ichi.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const isGroup=  m.chat.endsWith("@g.us");
        const groupMetadata = m.isGroup ? await ichi.groupMetadata(m.chat).catch(e => {}) : ''

        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
        //db fetch
    let _exp = tb.get(`${m.sender}.exp`)
    let _items = tb.get(`${m.sender}.items`)
    let anti=gp.get(`${m.chat}.link`)
//db validation
let _anti= (anti)? anti : []
let expa = (_exp) ? _exp : 0
  let items = (_items) ? _items : []
_exp = tb.get(`${m.sender}.exp`)
 expa = (_exp) ? _exp : 0
exps = tb.get(`${m.sender}.exp`)

//Exp
let charm = (items.includes('Exp Charm 💫️')) ? 2 : 1
    let rx = charm*Math.floor(Math.random() * 20) + 5
    const addxp = (expa) ? expa+rx : rx
    tb.set(`${m.sender}.exp`, addxp)  

     function expc(exps) {

    
        if (exps < 500) {
                    var role = '⭐️ Citizen'
            var maxExp = 500
                } else if (exps < 1500) {
                    var role = '🔍️ Cleric'
            var maxExp = 1500
                } else if (exps < 4000) { 
                    var role = '🔮️Wizard'
            var maxExp = 4000
                } else if (exps < 7500) {
                    var role = '♦️ Mage'
            var maxExp = 7500
                } else if (exps < 10000) {
                    var role = '🎯️ Noble'
            var maxExp = 10000
                } else if (exps < 35000) {
                    var role = '✨️ Elite'
            var maxExp = 35000
                } else if (exps < 50000) {
                    var role = '🔶️ Ace'
            var maxExp = 50000
                } else if (exps < 100000) {
                    var role = '💎️ Supreme' 
            var maxExp = 100000
        } else if (exps < 250000) {
                    var role = '🛡️ Legendary' 
            var maxExp = 250000
        } else if (exps < 375000) {
                    var role = '🛡️ Legendary II' 
            var maxExp = 375000
            } else if (exps < 500000) {
                    var role = '🛡️ Legendary III' 
            var maxExp = 500000
        } else if (exps < 750000) {
                    var role = '❄️ Mystic' 
            var maxExp = 750000
        } else if (exps < 875000) {
                    var role = '❄️ Mystic II' 
            var maxExp = 875000
        } else if (exps < 1000000) {
                    var role = '❄️ Mystic III' 
            var maxExp = 1000000
        } else if (exps < 1250000) {
                    var role = '🔺️ Areo' 
            var maxExp = 125000
         } else if (exps < 1500000) {
                    var role = '🔺️ Areo II' 
            var maxExp = 150000
                } else if (exps < 1750000) {
                    var role = '🔺️ Areo III' 
            var maxExp = 1750000
        } else if (exps < 2000000) {
                    var role = '⚔️ Master' 
            var maxExp = 2000000
        } else if (exps < 225000) {
                    var role = '⚔️ Master' 
            var maxExp = 2250000
        } else if (exps < 250000) {
                    var role = '⚔️ Master II' 
            var maxExp = 2500000
        } else if (exps < 2750000) {
                    var role = '⚔️ Master III' 
            var maxExp = 2750000
        } else { 
                    var role = 'None'
            var maxExp = 1000000
                }
        return { role: role, maxE : maxExp }
}    
    if (isGroup && _anti.includes(`${m.chat}`)) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isAdmins) return m.reply("*You are admin I wont remove you,cool*");
        m.reply("*Group Link Detected!!!*");
        await ichi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }
        // Push Message To Console && Auto Read
        if (m.message) {
            ichi.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ ICHIKA ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> MSG'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	


        switch(command) {
case 'hi':
    m.reply('hello')
       break
case '':
    if(icmd){
        m.reply('Did You mean Help?')
    }
break

case 'help':
const hlp=`
 ᴜ^ｪ^ᴜ ♡ 𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 ${pushname} 𝐒𝐞𝐧𝐩𝐚𝐢, ɪ'ᴍ 𝐌𝐢𝐳𝐮𝐡𝐚𝐫𝐚 

🎋ʜᴇʀᴇ ᴀʀᴇ ᴍʏ ʟɪsᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs, ʜᴀᴠᴇ ғᴜɴ ᴜsɪɴɢ ᴛʜᴇᴍ :-

❄️ 𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 ❄️

🎯 𝚙𝚒𝚗𝚐

🎯 𝚊𝚍𝚍

🎯 𝚔𝚒𝚌𝚔

🎯 𝚙𝚛𝚘𝚖𝚘𝚝𝚎

🎯 𝚍𝚎𝚖𝚘𝚝𝚎

🎯 𝚐𝚛𝚘𝚞𝚙 𝚘𝚙𝚎𝚗

🎯 𝚐𝚛𝚘𝚞𝚙 𝚌𝚕𝚘𝚜𝚎

🎯 𝚕𝚒𝚗𝚔𝙶𝙲

🎯 𝚜𝚎𝚝𝚏𝚙𝚏𝚙

🍁 𝐔𝐓𝐈𝐋𝐒 🍁

🎯 𝚜𝚝𝚒𝚌𝚔𝚎𝚛

🎯 𝚝𝚘𝚒𝚖𝚐

🎯 𝚝𝚘𝚐𝚒𝚏

🏷️ 𝐌𝐄𝐃𝐈𝐀 🏷️

🎯 𝚢𝚝𝚜

🎯 𝚢𝚝𝚟

🎯 𝚢𝚝𝚊

🎯 𝚙𝚕𝚊𝚢

🎯 𝚐𝚘𝚘𝚐𝚕𝚎

🎯 𝚒𝚖𝚊𝚐𝚎
`
ichi.sendMessage(m.chat,{video:{url:"https://a.uguu.se/VpvferWA.mp4"},caption:hlp,gifPlayback:true},{quoted:m})
break
//////////////////////////GENERAL\\\\\\\\\\\\\\\\\\\\\\\\\\
  case'rank':
                                

        if(m.isGroup){
          const canvacord = require('canvacord')
          const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
  const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
  const randomHexz = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
 //  const contact = await msg.getContact()
  //  foto1= await contact.getProfilePicUrl([sender]);
try {
        
    pfp=await ichi.profilePictureUrl(m.sender, 'image')

      } catch (e) {
  //let [pfp ] = await Promise.all([ contacts.getProfilePicUrl(contacts)])
  pfp ='https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
// 
}
bgp=await getBuffer('https://www.wallpapermaiden.com/wallpaper/36472/download/1920x1080/kanojo-okarishimasu-mizuhara-chizuru-lying-down-pretty-anime-girl-sweater-anime.jpeg')
  const o = tb.get(`${m.sender}.exp`)
  var exps = (o) ? o : 0
  const rdata = expc(exps)
  var maxExp = rdata.maxE
  var status = 'online' 
  const rank = new canvacord.Rank()
        .setBackground("IMAGE",bgp)
        .renderEmojis(true)
        .setAvatar(pfp)
        .setCurrentXP(Number(exps))
        .setRequiredXP(Number(maxExp))
        .setStatus(status)
        .setRankColor('#2c2f33', '#2c2f33')
        .setProgressBar([randomHexs, randomHex], 'GRADIENT',true)
        .setUsername(pushname )
       .setDiscriminator("0007")
        .setLevel(0, '1', false)
        .setRank(2, '1', false)

  rank.build().then(async(data)=>{
   // const rjpg=await getBuffer(data)
const rcpt=`*🍁 ${pushname}\'s rank 🍁*


*🔖 Rank: ${exps}/${maxExp}*


*🧮 Role: ${rdata.role}*
`
ichi.sendMessage(m.chat,{image:data,caption:rcpt},{quoted:m})
  })

}
break
case 'profile':
 const o = tb.get(`${m.sender}.exp`)
var exps = (o) ? o : 0
const rdata = expc(exps)
var maxExp = rdata.maxE
const bio= await ichi.fetchStatus(m.sender)
console.log(bio)
const adn= isAdmins? "True":"False"
try {
        
    pfp=await ichi.profilePictureUrl(m.sender, 'image')

      } catch (e) {
 
  pfp ='https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
}
 const   profile = `
🏷️ _*USERNAME 🏷️ :*_ ${pushname}


💥 _*BIO 💥 :*_ ${bio.status}


🧧 _*GROUP 🧧 :*_ ${groupName}


♠️ _*ADMIN ♠️ :*_ ${adn}


🧮 _*EXP 🧮 :*_ ${exps}/${maxExp}


🎗️ _*ROLE 🎗️ :*_ ${rdata.role}
` 
const buttonsd = [
{buttonId: '=rank', buttonText: {displayText: '🎋 Rank'}, type: 1},
{buttonId: '=help', buttonText: {displayText: '🍂 Help'}, type: 1}
]
let buttonMessage = {
        image: { url: pfp },
        caption: profile,
        footer: '©MIZUHARA~ARUS',
        buttons: buttonsd,
        headerType: 4
    }
ichi.sendMessage(m.chat,buttonMessage,{quoted:m})
break
//////////////////////////UTILS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
case  'sticker': case 's': case 'stickergif': case 'sgif':
 {
    if (!quoted) m.reply(`*Tag/Reply a image/video*`)

    m.reply(mess.wait)
            if (/image/.test(mime)) {
        let media = await quoted.download()
        let encmedia = await ichi.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return m.reply('*OOps I cant\'s make sticker of videos more than 10sec !*')
        let media = await quoted.download()
        let encmedia = await ichi.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
    } else {
        throw `*Please caption or tag a video/image*`
        }
    }
    break
case  'take':
 {
    if (!quoted) m.reply(`*Tag/Reply a image/video*`)

    m.reply(mess.wait)
 if (/sticker/.test(mime)) {
    const hamma_sticker = require('wa-sticker-hamma')
   mediaa = await ichi.downloadAndSaveMediaMessage(quoted)
                anu = args.join(' ').split('|')
                satu = anu[0] !== '' ? anu[0] : `lol`
                dua = typeof anu[1] !== 'undefined' ? anu[1] : `${pushname}`  
                const webpWithMetadata = await hamma_sticker.setMetadata(`${satu}`, `${dua}`,mediaa) 
ichi.sendMessage(m.chat,{sticker:{url: webpWithMetadata}},{quoted:m})
            }
  }
  break    
  case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Reply to a sticker`
                m.reply(mess.wait)
                let media = await ichi.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    ichi.sendMessage(m.chat, { image: buffer,caption:'©MIZUHARA-2022' }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }    
break
case 'tourl': {
                m.reply(mess.wait)
        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await ichi.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
 case 'togif': {
                if (!quoted) throw 'Reply to a sticker'
                if (!/webp/.test(mime)) throw `Reply to a sticker`
                m.reply(mess.wait)
        let { webp2mp4File } = require('./lib/uploader')
                let media = await ichi.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ichi.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '©MIZUHARA-2022' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'tsticker': {
        if (!quoted) throw `Reply to a image`
        if (!/image/.test(mime)) throw `Reply to a image`
        if (/webp/.test(mime)) throw `Reply to a image`
        let remobg = require('remove.bg')
        let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
        let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
        hmm = await './src/remobg-'+getRandom('')
        localFile = await ichi.downloadAndSaveMediaMessage(quoted, hmm)
        outputFile = await './src/hremo-'+getRandom('.png')
        m.reply(mess.wait)
        remobg.removeBackgroundFromImageFile({
          path: localFile,
          apiKey: apinobg,
          size: "regular",
          type: "auto",
          scale: "100%",
          outputFile 
        }).then(async result => {
        ichi.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
        ///await ichi.sendImageAsSticker(m.chat,fs.readFileSync(outputFile), m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(localFile)
        await fs.unlinkSync(outputFile)
        })
        }
        break
        case 'chatid':
        m.reply(`${m.chat}`)
        break
//////////////////////////GROUP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    case 'kick': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await ichi.groupParticipantsUpdate(m.chat, [users], 'remove')
 ichi.sendMessage(m.chat,{text:`Kicked @${users.split("@")[0]} successfuly `,contextInfo: { mentionedJid: [users] }})
    }
    break
    case 'add': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await ichi.groupParticipantsUpdate(m.chat, [users], 'add')
        ichi.sendMessage(m.chat,{text:`Added @${users.split("@")[0]} successfuly `,contextInfo: { mentionedJid: [users] }})
    }
    break
    case 'promote': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await ichi.groupParticipantsUpdate(m.chat, [users], 'promote')
         ichi.sendMessage(m.chat,{text:`woh woh!! looks like someone promoted @${users.split("@")[0]}`,contextInfo: { mentionedJid: [users] }})
    }
    break
    case 'demote': {
        if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        await ichi.groupParticipantsUpdate(m.chat, [users], 'demote')
        ichi.sendMessage(m.chat,{text:`OOPs!! looks like someone demoted @${users.split("@")[0]}`,contextInfo: { mentionedJid: [users] }})
   }
    break
  case 'setdesc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await ichi.groupUpdateDescription(m.chat, text)
            m.reply('*Group Description Changed successfuly*')
            }
            break 
case 'setppgroup': case 'setppgrup': case 'setgpfp': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `*reply to a image/video* ${prefix + command}`
                if (!/image/.test(mime)) throw `*reply to a image/video* ${prefix + command}`
                if (/webp/.test(mime)) throw `*reply to a image/video* ${prefix + command}`
                let media = await ichi.downloadAndSaveMediaMessage(quoted)
                await ichi.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply('Group pfp has been changed...')
                }
                break 
case 'tagall':
case 'ping':
  if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin 

if(q) { var Text =`📌 *Message - ${q}*\n*🍁 Group name - ${groupName}*` } else {  var Text = `*${groupName}*`}

let menText = `${Text}\n*💫 ping by - ${pushname}*\n*🕛 time - ${time}*\n\n`
for (let memNum of participants) {
    
    if( groupAdmins.includes(memNum.id) === true ) { var emo = '👑'} else { var emo = '❄️'} 
    menText += `${emo} *@${memNum.id.split('@')[0]}*\n`
    //members_id.push(memNum.jid)
}
ichi.sendMessage(m.chat,{text:menText,mentions: participants.map(a => a.id)},{quoted:m})
break

  case 'group': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await ichi.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Group open*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await ichi.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Group closed*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: '=group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: '=group close', buttonText: { displayText: 'Close' }, type: 1 },
                        { buttonId: '=linkgc', buttonText: { displayText: 'Group link' }, type: 1 }
                    ]
                    await ichi.sendButtonText(m.chat, buttons, `*Group Open/Close*`, '©MIZUHARA-BOTTO 2022', m)

            }
}
         
             break
case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await ichi.groupInviteCode(m.chat)
         //   m.reply('Has been sent to you in peronal message')
         await       ichi.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
 break
  case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'only my messages can be deleted'
                ichi.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
  case 'enable':
                                  
                                      if (!m.isGroup) return m.reply("Only groups");
                                      if (!isAdmins && !m.key.fromMe) return m.reply("Only group admins");
                                      if (args[0] == "antilink") {
                                        if (_anti.includes(`${m.chat}`)) return m.reply("Activated!!");
                                      gp.set(`${m.chat}.link`,anti+`${m.chat}`)
                                      m.reply('Activated,feeling sorry for those link senders.')
                                      } else{
                                        m.reply("No such options")
                                      }                                    
                                
  break
 case 'disable':
 if (!m.isGroup) return m.reply("Only groups");
if (!isAdmins && !m.key.fromMe) return m.reply("Only group admins");
  if (args[0] == "antilink") {
gp.delete(`${m.chat}.link`,`${m.chat}`)
m.reply("Successfully deactivated antilink!");  
 }else{
    m.reply("No such options")
 }
break
//////////////////////////YOUTUBE\\\\\\\\\\\\\\\\\\\\\\\\\\\\
case  'play': case 'ytplay': {
    if (!text) throw `Example : ${prefix + command} story wa anime`
    let yts = require("yt-search")
    let search = await yts(text)
    let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
    let buttons = [
        {buttonId: `=ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
        {buttonId: `=ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
    ]
    let buttonMessage = {
        image: { url: anu.thumbnail },
        caption: `
🎯 Title : ${anu.title}
🎗️ ID : ${anu.videoId}
⏱️ Duration : ${anu.timestamp}
🌸 Viewers : ${anu.views}
🍁 Upload At : ${anu.ago}
📌 Author : ${anu.author.name}
📓 Channel : ${anu.author.url}
🎬 Description : ${anu.description}
🌐 Url : ${anu.url}`,
        footer: '©ICHIKA-BOTTO 2022',
        buttons: buttons,
        headerType: 4
    }
    ichi.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ytmp3': case 'ytaudio': case 'yta': {
    let { yta  } = require('./lib/y2mate')
    if (!text) throw `*Where is the yt-link dude?*`
   
    var search = await yts(text)
    //console.log(search)
    // anu = search.videos[Math.floor(Math.random() * search.videos.length)]
    search=search.all
    let quality = args[1] ? args[1] : '128kbps'
    let media = await yta(text, quality)
    if (media.filesize >= 100000) return m.reply('Oops too big '+util.format(media))
    const ycp=`*🎬YOUTUBE MUSIC🎬*
          
0:04 ━━●──────────── 3:15     
              
⇆ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻
                     
*📓Title* : ${search[0].title}
*🎤Type* : MP3
*🎬Description* : ${search[0].description}
*🌐Link* : ${text}`
ichi.sendMessage(m.chat,{image:{url:search[0].thumbnail},caption:ycp},{quoted:m,})
ichi.sendMessage(m.chat, { audio: { url: media.dl_link }, contextInfo: {
                    externalAdReply: {
                        title: search[0].title.substr(0, 30),
                        body: `author : ${search[0].author.name.substr(0, 20)}`,
                        mediaType: 2,
                        thumbnail: await getBuffer(`https://i.ytimg.com/vi/${search[0].videoId}/hqdefault.jpg`),
                        mediaUrl: media.url
                    }
                }, mimetype: 'audio/mpeg', fileName: `${search[0].title}.mp3` }, { quoted: m})
}
break
case 'ytmp4': case 'ytvideo': case 'ytv': {
    let { ytv } = require('./lib/y2mate')
    if (!text) throw `*Where is the yt-link dude?*`
    let quality = args[1] ? args[1] : '360p'
    let media = await ytv(text, quality)
    if (media.filesize >= 100000) return m.reply('Oops!!'+util.format(media))

ichi.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🎯 Title : ${media.title}\n🎗️ File Size : ${media.filesizeF}\n📓 Url : ${isUrl(text)}\n📌 Ext : MP3\n🏷️ Resolution : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'yts': case 'ytsearch': {
    if (!text) throw `Example : ${prefix + command} story wa anime`
    let yts = require("yt-search")
    let search = await yts(text)
    let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
    let no = 1
    for (let i of search.all) {
        teks += `📓 No : ${no++}\n🎬 Type : ${i.type}\n📌 Video ID : ${i.videoId}\n🎯 Title : ${i.title}\n🌸 Views : ${i.views}\n🎗️ Duration : ${i.timestamp}\n🍁 Upload At : ${i.ago}\n🏷️ Author : ${i.author.name}\n🌐 Url : ${i.url}\n\n────────────────────────────\n\n`
    }
    ichi.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },jpegThumbnail:fs.readFileSync('./lib/hisoka.jpg'),  caption: teks, }, { quoted: m, })
}
break
case 'gimage':case 'image': {
        if (!text) m.reply(`Baka!! what image you wnt?`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `${prefix}gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `
💥 *Query* : ${text}
`,
                    footer: '©MIZUHARA-2022',
                    buttons: buttons,
                    headerType: 4
                }
                ichi.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
 case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `📒 *Title* : ${g.title}\n`
                teks += `🎯 *Description* : ${g.snippet}\n`
                teks += `🌐 *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
               
            default:
               
			
	
			

        }
        

    } catch (err) {
        const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
        ichi.sendMessage("120363041582995306@g.us",{text:`*Time:* ${time}\n\n`+`*ERROR:* ${util.format(err)}`})
        ichi.sendMessage(m.chat,{ 
        video: fs.readFileSync('./src/error.mp4'), 
        caption: "Oops an Unknown Error occured will be fixed soon!!!",
        gifPlayback: true
    })
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
