const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Unet command`,
      "description": `Unet is a Unix-like operating system that offers the best compatibility for various platforms. Whether you need a server, a desktop, or an embedded system, Unet can meet your needs. Unet also provides advanced networking, security, and storage features, and supports most popular embedded storage and networking devices.`,
      "color": 0xCCB2FF
    }
  ]
});