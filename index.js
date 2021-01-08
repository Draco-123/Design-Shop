const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `${username} has connected!`);
});

client.on('message', (channel, user, message, self) => {
    if(self) return;
    var message = '-twitch shinigami_9119';

    const args = message.split(' ') // ['-twitch', 'shinigami_9119']
    const command = args.shift(): // '-twitch' => ['shinigami_9119']

    if(command == '-hello') {
        client.say(channel, `Hello, @${user.username}!`);
    } else if(command == '-roll') {
        client.say(channel, `@${user.username} rolled a ${Math.floor(Math.random() * 6) + 1}!`);
    }else if (command == '-twitch') {
        const username = args.shift();

        client.say(channel, `Check out ${username} @ https//www.twitch.tv/${username}`);
    }
});