import React from 'react';
import axios from 'axios';

function DiscordService(clearForm) {
  const Send = async (data, url) => {
    const body = {
      content: 'Message Received',
      tts: false,
      color: 'white',
      embeds: [
        {
          // title: 'Contact Form',
          image: {
            url: 'https://cdn.dribbble.com/users/4978497/screenshots/14371515/media/05a0e1c418c87d73d66e50990ff27c8c.gif',
          },
          description: data,
        },
      ],
    };

    try {
      const data = await axios.post(
        'https://discord.com/api/webhooks/1178552345089556481/cq1SIWpjNypBxGc78GNOqe9Kr0C5Gla2fv_CKxeMqYFGciHcYRmemmLVaSHnZlXABG_x',
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
