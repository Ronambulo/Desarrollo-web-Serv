const { IncomingWebhook } = require("@slack/webhook");
const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK);
const loggerStream = {
  write: (text) => {
    webHook.send({
      text: text,
    });
  },
};

module.exports = { loggerStream };
