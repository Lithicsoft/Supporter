const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Lithicsoft command`,
      "description": `Lithicsoft is a non-profit organization that develops freedom, safe, and light software. Some of our outstanding projects include: UnetOSX, a Unix-like operating system for desktops and servers; LithicAI Education Model, an artificial intelligence system for personalized learning. Lithicsoft was founded in 2018 by Anthony Erosion, who started with the EnderOS project, a predecessor of Unet. Since then, Lithicsoft has launched many new projects and maintained its commitment to the Free-Safe-Lite criterion. Our mission is to provide free software to the community and make it accessible to everyone. We are committed to creating software that is safe, easy to use, and virus-free. We believe that technology should be accessible to everyone, and we strive to make it so.`,
      "color": 0xCCB2FF
    }
  ]
});