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
          description: data,
        },
      ],
    };

    try {
      const data = await axios.post(
        'https://discord.com/api/webhooks/1277660866002817097/P12G7HpoeX8AgdkKLo5ElZhkcV9WTcrDjMYKKhlbOFCtSjT_5GfRXOR6mhqiBsZ5DTkn',
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
