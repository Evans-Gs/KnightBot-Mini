/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','233257946555'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Evans'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Ghost Bot',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUW5OiOBj9L3nVGgUR0KquWkFUxAu2N3RrHwIEiEKISbjYU/73Lezp6XnYne19y63Od75zzpfvgOSYIwfdwfA7oAyXUKBmKe4UgSEwiihCDLRBCAUEQzB1qNfpLqr9QrfdpPfWsy5hLI82aqCfEsaPI/s4JzdltenlL+DRBrTwUxz8BtBaZDfPgdvT6+1tkc7xHKrJuiV5aecwSNyJNAtX2sI/7Oc9/gIeDSLEDJPYognKEIOpg+4uxOxr9O1prVzxPVYJxJpBaRzjrRb3l5Uzv2wm3WPiHQ3VOTob7/Q1+vMLbmmsX5u6uU7TFQr06161p/i0lF7dXJNsz4wRCWE9Pr3T5zgmKLRDRAQW9y/rDhd+kkwGy7Mxh8TP3Ruf2YNWeogrZ1KFiPuKcbiVyapjWV8jLq2TVCZGns3fijJfZUnv5l4CI9FsV1HSBbqp8elsHwur2vxK3GUfWbn+H931KZZ8/5AtLSi/bsbcmN42aJxYZ7Ypb3UV0rtcD6ixkuTR1+j7nuiz5cVm140yO/qBuJzte9c5G16ihbTalOP9eL/x01M9+qQPRcF+x/Lsa/Lu5OtC3rn2rJO1OnT5Fllv5+OsxIfOlBPsWnPLZrrjuNct9bfRqb/oGuOCteIuzEcbmyaX9eQi8EEqjbOqbTs4fnl2dEV3OwRD6dEGDMWYCwYFzsnzTNXaAIblFgUMiae8gDpa7aUmJQHSg3Nrd7yuJ9HBQ5lmxvOom6avurST7+vCrV5AG1CWB4hzFM4wFzm7LxHnMEYcDP/8qw0IqsW7cU25ntQGEWZc7ElB0xyGH65+XMIgyAsitncSmM0CMTDsfh4jITCJeaNjQSALElwiM4GCg2EEU45+dogYCsFQsAL9nFozDxvhx9OFspuZJ9AG2dMQHIIhkHs9ua8NFLXf7w9l/Q/+rWpgIaXfCBKgDdLnM0nVBt2eNlC6ykDSlOZlc/H4ybABDJGAOOVgCMxlZJKBblnuDtfCnk5Hy3hkxiPw2dFHNN6lfz2WxZ74xuFN2aktuTeTkdJiU7ljSAG9dWoxL83ZtVWc8fXlH0DAENQH0ikN47705llXcYpOmNN9iAg/Sqc62Nb7TMnkATm6JE5zql5nt4vYLy2+e51O+uokLLxp7aDs3AlXKKlG26myUIzNS1MtRCUO0K/FJuc+pYcZnWheROZ032rlceQgjjE1/dAUPPKLy5apnDvZKllMrT3DkRmNOsbStO5n7zUTOLMJC8dhvLaZQRaD/FK9h/Y5NOmPzwo/49R41WwjjJ6zT2Dj4H979068iVj30f4F48dv8i8TaewPTEvncnUIWlarFKIekMK91aKsQs+Bpe5v/Srpuyw7UfB4/NUGNIUiylnW/JkkZDkOQRuwvGgya5Mo/00x07DtURzbTecp5GL0OQc7nCEuYEbBUNL0ntbTNUV//A1R+miDPQcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Africa/Ghana',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
