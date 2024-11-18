/* Copyright (C) 2024 ESI Devs.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
ESI-MD ~ ESI Devs
*/


const Base = require("./Base");
const ReplyMessage = require("./ReplyMessage");

class Message extends Base {
  constructor(client, data) {
    super(client, data);
  }

  _patch(data) {
    super._patch(data);
    this.prefix = data.prefix;
    this.message = { key: data.key, message: data.message };
    this.text = data.body;
    const contextInfo = data.message.extendedTextMessage?.contextInfo;
    this.mention = contextInfo?.mentionedJid || false;
    if (data.quoted) {
      this.reply_message = new ReplyMessage(this.client, contextInfo, data);
    } else {
      this.reply_message = false;
    }
    return this;
  }

  async edit(text, opt = {}) {
    await this.client.sendMessage(this.jid, { text, edit: this.key, ...opt });
  }

}

module.exports = Message;
