const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `> *_ᴛʜᴇ ʙᴇsᴛ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ_*
╭─ 「 *\`MINI XTREME\`* 」
│❍ *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*
│❍ *ʀᴇᴀʟ ɴᴀᴍᴇ➭ sɪᴅᴅʜᴀʀᴛʜs*
│❍ *ɴɪᴄᴋɴᴀᴍᴇ➮ ᴘʀɪɴᴄᴇ sɪᴅ*
│❍ *ᴀɢᴇ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
│❍ *ᴄɪᴛʏ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
│❍ *ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ*
╰────────────────❍
╭─ 「 *\`MINI DEV\`* 」
│❍➳ *ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*
│❍➳ *ᴏɴʟʏ ᴏɴᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ*
│❍➳ *ʙᴏᴛ➭ xᴛʀᴇᴍᴇ xᴍᴅ*
│❍➳ *ᴏᴡ➭* +528145550802
╰────────────────❍
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*`
await conn.sendMessage(from, {
    image: { url: 'https://files.catbox.moe/p01dj2.jpg' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363418161689316@newsletter', // ou ton JID actuel
            newsletterName: '𝐌𝐈𝐍𝐈-𝐗𝐓𝐑𝐄𝐌𝐄',
            serverMessageId: 143
        }
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})
