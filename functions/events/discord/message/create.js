const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

//clear status
if (context.params.event.content.includes("supporterbotadmin-off")) {
  await lib.discord.users['@0.2.1'].me.status.clear();
}


//set status
if (context.params.event.content.includes("supporterbotadmin-new")) {
  await lib.discord.users['@0.2.1'].me.status.update({
    activity_name: `Help`,
    activity_type: 'LISTENING',
    status: 'ONLINE'
  });
  //Extra bot reply thingy
  return await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `Changed setting!`,
    message_reference: {
      message_id: context.params.event.id
    }
  })
}
