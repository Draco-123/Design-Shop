client.on('message', (channel, user, message, self) => {
    var message = '-ygo dark magician';

    const args = message.split(' ') // ['-ygo', 'dark magician']
    const command = args.shift() // '-ygo' => ['dark magician']

    if(message == '-ygo'){
        const target = args.shift();
        client.say(channel, ("https://yugipedia.com/wiki/"+ target.replace(/ /g,'_').replace(/(?:^|_)[a-z]/g,m=>m.toUpperCase())));
    }
});
