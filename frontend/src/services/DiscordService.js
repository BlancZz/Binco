import React from "react";
import axios from "axios";

function DiscordService(clearForm) {
  const Send = async (data) => {
    const body = {
      content: "Message Received",
      tts: false,
      color: "white",
      embeds: [
        {
          title: "Contact Form",
          description: data,
        },
      ],
    };

    try {
      const data = await axios.post(
        "https://discord.com/api/webhooks/1178552345089556481/cq1SIWpjNypBxGc78GNOqe9Kr0C5Gla2fv_CKxeMqYFGciHcYRmemmLVaSHnZlXABG_x",
        body
      );
      console.log(data);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    Send,
  };
}

export default DiscordService;