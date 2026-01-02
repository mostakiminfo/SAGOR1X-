const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MOSTAKIM", //
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "Admin",
    cooldowns: 1
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃    🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : MD MOSTAKIM ISLAM SAGOR 
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫     : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧    : জন্মগত সিঙ্গেল 🙂💔
┃ 🎂 𝐀𝐠𝐞       : 21+
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧    : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧   : তোমার জানি কাজ কি?
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬    : Bangladesh,Dhaka Rangpur 
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤     : md_mostakim_islam_sagor
┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦   : @SAGOR69X
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤  : MD.MOSTAKIM.ISLAM.SAGOR
┃ ▶️ YOU TUBE : @WEIRD.MOSTAKIM
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒  𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/1245764730701808/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
