/* eslint-disable no-undef */
import 'dotenv/config'
import 'node-telegram-bot-api'
import TelegramBot from 'node-telegram-bot-api'
import axios from axios


const bot = new TelegramBot(process.env.TOKEN, { polling: true })
const webAppUrl = 'https://btc25miner.netlify.app'


import axios from 'axios';

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    const chat = await bot.getChat(chatId);
    const userId = chat.from.id;


    axios.post('http://localhost:3000/auth', { userId })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    await bot.sendMessage(chatId, 'Начни майнить BTC25 в этой игре!', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Начать майнить', web_app: { url: webAppUrl } }],
        ],
      },
    });
  }
});