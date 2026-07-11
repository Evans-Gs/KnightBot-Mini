
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./lib/configdb');
const settings = require('./settingss');

if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

module.exports = {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rFGBGhASM6YgGVi203KDfd2IcSCqiWm0WB4IT/vkFftudhd6L3rchK8pw8eSp/grLCDdqgASx+gprgDlI0HulQI7AAapskiIAJiCGFYAE4Q+9FzEavkhJtl127urzAgL8ct0/xcCuubBIG1jzLGmN9eAT3CajbU46j3xT09KBxrDTZFeTipWUmEA8fs9Cetq1ocXu5ksLWdDPbH7aP4D5WhJjgMl3VGSoQgfkGDTbE5Hv0NbsqVGt5RYx24AwOysxTTJxBCxq9D0qeF3fTXJG3x8aXvkd/dnMNRfdSikpeNgrfDByjvzRPstzsHhKvKB3vFqWWhAPnnX6D0xLFZoxKiunwbd2hhpiBd1+ey1ZlExc+HPQZkzeDEKzipWqbkrBjTnK9mYfm94jfirN5cmEQOn2ZxLmVFdPCv6nroD7nhnc+b4/x+kEt0pla/UrcJp9eOf8f3ZERL6UUZlPRbTc5XgsVt5JWh+h6uBxE6Rjt5n29Ql188Zzv0bfwS7/rWbz20XG6N0Nnhy1Xt5mUmB57y8XpwECsNQ5RzS/6kLbkdywxWa6FtTT0brSnYZG8Xk4uWvqva7UW/OEsBYostEsRBafNxTYO5bO/iaLZNmrE0j1JtkNT34uGqYnyiOmMaSOlgqA6j28dndFgxmAxu08AQSluKIEUV+UY4ycAxt0eRQTRN3GBIdnZclVngua9PO87pFETR4MyqIatsYpI5cCooktAEIkewQTUpIpQ06DYwA2tyLBFTQNT1IDFn39NQIl6+j62EWw+m4AEk4Z6ZVvnFYw/Z/p5CaOoaku6H8pIGw+IgAX7FUaU4jJtRhXbEpIowx3SMkgbsEhg3qB/+kMExR+xCSBVO/5mlkn1u9epmqaSpuao1wfemB0jCnHejAnbRCtlabWyN8teNnVdcVJFSxXwxe9zzO9C7oKu9cqT6t9494Hh5gaHeIbo3FSdRfVl2lOr04wz0x7x+fFfiowLL1CoSZ/UZ0fYv2ZsYpgsf3APOuS1LYwI7I+6od/m26ftBgnhRrNfZM45hHuL7HbW8MSLqqYcLDcJA2dqcHz1fDqbivI4osWowxH6FexKWU0I9V7eeIXnb1hUm7T2KmKogi7vQvZwfiHbpCLKOumoXBwLFrlrZx866LgOKn9tnfk9s3zuUfyEh+yKVL42lOu7AYs35+N47Gk+5wRR5h8EQVhw8h/Nj+s4QVjXP0pEwQTkb2mzB1Fm56LMs7w8E/kxc7z4fEz5xxLDb0YbS4+fCUZvO6GEBfoO1LsIo/nY++SXGh9b5j+cono+EXOLu/oRs2I6Snu5bO1LT7trHG5gJ532p2sm2KQ41OB+/2sC6hzSpCLFuEvLmFQ4HvuEDVW+/O7iAjUUFjVYzERpLvKcLM7ufwPjGwpuIwcAAA==",
  PREFIX: getConfig("PREFIX") || "." || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "GHOST-BOT",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Tomilucky218/Lucky-XD2",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "233257946555",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Evans",
  DEV: process.env.DEV || "233257946555",
  DEVELOPER_NUMBER: '256789966218@s.whatsapp.net',
  MENU_AUDIO_URL: process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/3v5i11.mp3',
NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363420656466131@newsletter',

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📵 Calls are not allowed on this number unless you have permission. 🚫*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ʟᴜᴄᴋʏ xᴅ✦ ғʀᴏᴍ ʟᴜᴄᴋʏ ᴛᴇᴄʜ ʜᴜʙ  ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",

  // ===== REACTION & STICKER SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,",
  STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",

  // ===== MEDIA & AUTOMATION =====
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/4itzeu.jpg",

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_VV: process.env.ANTI_VV || "true",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  PM_BLOCKER: process.env.PM_BLOCKER || "true",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  version: process.env.version || "1.5.0",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Africa/Kampala",

  // ===== CATEGORY-SPECIFIC IMAGE URLs =====
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Download Menu
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Group Menu
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",       // Fun Menu
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Owner Menu
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",         // AI Menu
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Anime Menu
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Convert Menu
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Other Menu
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Reaction Menu
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",    // Main Menu
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Logo Maker Menu
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Settings Menu
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",  // Audio Menu
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg" // Privacy Menu
  }
};
