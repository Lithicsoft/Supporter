const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Links command`,
      "description": `https://lithicsoft.github.io\nhttps://github.com/Lithicsoft\nhttps://huggingface.co/Lithicsoft\nhttps://www.kickstarter.com/profile/lithicsoft\nhttps://twitter.com/Lithicsoft\nhttps://www.youtube.com/@Lithicsoft`,
      "color": 0xCCB2FF
    }
  ]
});