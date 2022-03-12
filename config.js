

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'fa4d0aa17e',
}

// Other
global.owner = [process.env.MOD]
global.packname = process.env.NAME
global.prefix= [process.env.PREFIX]
global.author = ''
global.sessionName = process.env.SESSION
global.mess = {
    success: '*Here you go...*',
    admin: '*Oops!! sorry dude this is only for admins*',
    botAdmin: '*To use this command make me admin if u trust me...*',
    owner: '*Sorry!! this command is for my darling developers*',
    group: '*Leave me here alone please...*',
    wait: '*Loading... please wait*',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
