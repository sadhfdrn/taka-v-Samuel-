const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["237690768603@s.whatsapp.net"]
global.nomerOwner = "237690768603"
global.nomorOwner = ['237690768603']
global.namaDeveloper = "ᛕ꠸ꪀᧁꪻꪖᛕꪖ" //jangn diubh bng
global.namaOwner = "ᛕ꠸ꪀᧁꪻꪖᛕꪖ"
global.namaBot = "ꪻꪖᛕꪖ ᥇ꪊᧁ"
global.versionBot = "5.𝟎.𝟎"
global.packname = "Taka"
global.author = "Taka"
global.thumb = fs.readFileSync("./AndraZyy.png")
global.ThM = 'https://files.catbox.moe/rb4a26.jpeg'

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})