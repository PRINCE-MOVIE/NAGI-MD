const config = require('../config');

// Pool of fallback images used whenever the bot needs to send/attach
// a picture and no specific one is available (connection banner,
// welcome/goodbye fallback profile picture, etc).
const IMAGE_POOL = [
    config.IMAGE_PATH,
    config.ALIVE_IMG,
    config.MENU_IMAGE_URL,
    'https://files.catbox.moe/lhfop4.png'
].filter(Boolean);

function randomImage() {
    if (!IMAGE_POOL.length) return 'https://files.catbox.moe/lhfop4.png';
    return IMAGE_POOL[Math.floor(Math.random() * IMAGE_POOL.length)];
}

module.exports = { randomImage, IMAGE_POOL };
