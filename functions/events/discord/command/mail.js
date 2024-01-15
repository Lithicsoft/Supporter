const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Mail command`,
      "description": `Lithicsoft contact email: lithicsoft@gmail.com`,
      "color": 0xCCB2FF
    }
  ]
});