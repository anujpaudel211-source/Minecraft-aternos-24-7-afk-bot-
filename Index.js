# Minecraft-aternos-24-7-afk-bot-
const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'Schoolonlyfriends.aternos.me',
        port: 11084,
        username: 'Wspeed21123_'
    });

    bot.on('spawn', () => {
        console.log('Wspeed21123_ has successfully joined the server and is now active!');
        
        // Anti-AFK loop running every 60 seconds (1 minute)
        setInterval(() => {
            const yaw = Math.random() * Math.PI - (Math.PI / 2);
            bot.look(yaw, 0);

            bot.setControlState('forward', true);
            setTimeout(() => {
                bot.setControlState('forward', false);
                bot.setControlState('back', true);
                setTimeout(() => {
                    bot.setControlState('back', false);
                    bot.swingArm('right');
                }, 1500);
            }, 1500);

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
