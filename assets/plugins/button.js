const { command, isPrivate } = require("../../lib");

command(
  {
    pattern: "epzi",
    fromMe: true,
    desc: "send a button message",
    usage: "#button",
    type: "message",
  },
  async (message, match, m) => {
    let data = {
      jid: message.jid,
      button: [
        {
          type: "list",
          params: {
            title: "Epzi ~ List",
            sections: [
              {
                title: "Epzi ~ Menu",
                rows: [
                  {
                    header: "Epzi Menu",
                    title: "Menu",
                    description: "Tap Here For Menu",
                    id: "#menu",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "reply",
          params: {
            display_text: "MENU",
            id: "#menu",
          },
        },
        {
          type: "link",
          params: {
            display_text: "Github: Epzi",
            url: "https://github.com/HaCkr-EPZI-public/CuduNona/",
            merchant_url: "https://github.com/HaCkr-EPZI-public/",
          },
        },
        {
          type: "insta",
          params: {
            display_text: "Insta: Epzi",
            url: "https://www.instagram.com/yuren.sasanka",
            merchant_url: "https://www.instagram.com/yuren.sasanka",
          },
        },
        {
          type: "location",
          params: {},
        },
        {
          type: "copy",
          params: {
            display_text: "copy",
            id: "+94759554531",
            copy_code: "message",
          },
        },
        {
          type: "call",
          params: {
            display_text: "Call",
            phone_number: "+94759554531",
          },
        },
      ],
      header: {
        title: "Epzi-V2",
        subtitle: "WhatsApp Bot",
        hasMediaAttachment: false,
      },
      footer: {
        text: ">By Queen D ~ Epzi-V2",
      },
      body: {
        text: "Interactive Message",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);
