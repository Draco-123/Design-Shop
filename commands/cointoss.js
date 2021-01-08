client.on('message', (channel, user, message, self) => {
    let coin = ['Heads', 'Tails']; // Output of what the bot will randomly pick and send
    coin = coin[~~(Math.random() * coin.length)];

    if(message == '-toss'){
        client.say(channel, `Coin Toss Results is: ${coin}.`);
    }
});
