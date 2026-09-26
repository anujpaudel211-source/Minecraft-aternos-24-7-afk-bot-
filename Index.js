# Minecraft-aternos-24-7-afk-bot-
  const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'Schoolonlyfriends.aternos.me',
        port: 11084,
        username: 'Wspeed21123_'
    });

    bot.on('spawn', () => {
        console.log('Wspeed21123_ has joined successfully and is safe from movement kicks!');
        
        // Safe Anti-AFK loop every 60 seconds (Only looks around and swings arm)
        setInterval(() => {
            // Gently change head orientation randomly
            const yaw = Math.random() * Math.PI - (Math.PI / 2);
            const pitch = (Math.random() * 0.5) - 0.25;
            bot.look(yaw, pitch, true);

            // Swing hand to show server it's active
            bot.swingArm('right');
        }, 60000);
    });

    bot.on('error', (err) => {
        console.log('Connection error encountered:', err);
    });

    bot.on('end', () => {
        console.log('Bot disconnected. Reconnecting in 30 seconds...');
        setTimeout(createBot, 30000);
    });
}

createBot();

