client.on('message', (channel, user, message, self) => {
    if(target.length > 0) {
    var message = '-eso vampire build';

    const args = message.split(' ') // ['-eso', 'vampire build']
    const command = args.shift() // '-eso' => ['vampire build']

    if(message == '-eso'){
        const target = args.shift();
        client.say(channel, ("https://alcasthq.com/?s="+ target.replace(/ /g,'-').replace(/(?:^|-)[a-z]/g,m=>m.toUpperCase())));
    }else if (command == '-skill') {
        client.say(channel, ("https://eso-skillbook.com/skill/"+ target.replace(/ /g,'-').replace(/(?:^|-)[a-z]/g,m=>m.toUpperCase())));
    }
}
});
