/*
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║              𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞 𝐁𝐨𝐭                          ║
 * ║   Owner    : 𝐓𝐡𝐚𝐫𝐮𝐧 𝐏𝐫𝐚𝐛𝐡𝐚𝐬𝐡𝐰𝐚𝐫𝐚                                ║
 * ║   Version  : 1.0.0                                              ║
 * ║   License  : MIT                                                ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

import 'dotenv/config';

const _prefixes = process.env.PREFIXES ? process.env.PREFIXES.split(',') : ['.', '!', '/', '#'];

const config = {
    // 𝐁𝐎𝐓 𝐈𝐃𝐄𝐍𝐓𝐈𝐓𝐘
    botName     : process.env.BOT_NAME    || '𝐓𝐡𝐚𝐫𝐮𝐧-𝐌𝐃',
    botOwner    : process.env.BOT_OWNER   || '𝐓𝐡𝐚𝐫𝐮𝐧 𝐏𝐫𝐚𝐛𝐡𝐚𝐬𝐡𝐰𝐚𝐫𝐚',
    ownerNumber : process.env.OWNER_NUMBER || '',
    author      : process.env.AUTHOR      || '𝐓𝐡𝐚𝐫𝐮𝐧 𝐏𝐫𝐚𝐛𝐡𝐚𝐬𝐡𝐰𝐚𝐫𝐚',
    packname    : process.env.PACKNAME    || '𝐓𝐡𝐚𝐫𝐮𝐧-𝐌𝐃',
    description : process.env.DESCRIPTION || '𝐓𝐡𝐚𝐫𝐮𝐧-𝐌𝐃 — High Performance WhatsApp Bot',
    version     : '1.0.0',

    // 𝐁𝐎𝐓 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐓𝐈𝐎𝐍
    prefixes    : _prefixes,
    prefix      : _prefixes[0],
    commandMode : process.env.COMMAND_MODE || 'public',
    timeZone    : process.env.TIMEZONE     || 'Asia/Colombo',

    // 𝐋𝐈𝐍𝐊𝐒 & 𝐔𝐏𝐃𝐀𝐓𝐄𝐒
    channelLink : process.env.CHANNEL_LINK || '',
    ytChannel   : process.env.YT_CHANNEL   || '𝐓𝐡𝐚𝐫𝐮𝐧 𝐏𝐫𝐚𝐛𝐡𝐚𝐬𝐡𝐰𝐚𝐫𝐚',

    // 𝐒𝐄𝐒𝐒𝐈𝐎𝐍
    sessionId     : process.env.SESSION_ID     || '',
    pairingNumber : process.env.PAIRING_NUMBER || '',

    // 𝐏𝐄𝐑𝐅𝐎𝐑𝐌𝐀𝐍𝐂𝐄
    port                : Number(process.env.PORT)                || 5000,
    maxStoreMessages    : Number(process.env.MAX_STORE_MESSAGES)  || 20,
    tempCleanupInterval : Number(process.env.CLEANUP_INTERVAL)    || 3600000,
    storeWriteInterval  : Number(process.env.STORE_WRITE_INTERVAL) || 10000,

    // 𝐀𝐏𝐈 𝐊𝐄𝐘𝐒
    giphyApiKey : process.env.GIPHY_API_KEY || '',
    removeBgKey : process.env.REMOVEBG_KEY  || '',

    // 𝐖𝐀𝐑𝐍 𝐒𝐘𝐒𝐓𝐄𝐌
    warnCount : 3,

    // 𝐄𝐗𝐓𝐄𝐑𝐍𝐀𝐋 𝐀𝐏𝐈𝐒
    APIs: {
        xteam     : 'https://api.xteam.xyz',
        dzx       : 'https://api.dhamzxploit.my.id',
        lol       : 'https://api.lolhuman.xyz',
        violetics : 'https://violetics.pw',
        neoxr     : 'https://api.neoxr.my.id',
        zenzapis  : 'https://zenzapis.xyz',
        akuari    : 'https://api.akuari.my.id',
        akuari2   : 'https://apimu.my.id',
        nrtm      : 'https://fg-nrtm.ddns.net',
        fgmods    : 'https://api-fgmods.ddns.net'
    },

    APIKeys: {
        'https://api.xteam.xyz'       : 'd90a9e986e18778b',
        'https://api.lolhuman.xyz'    : '85faf717d0545d14074659ad',
        'https://api.neoxr.my.id'     : process.env.NEOXR_KEY     || 'yourkey',
        'https://violetics.pw'        : 'beta',
        'https://zenzapis.xyz'        : process.env.ZENZAPIS_KEY  || 'yourkey',
        'https://api-fgmods.ddns.net' : 'fg-dylux'
    }
};

export default config;
