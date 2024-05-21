/* eslint-disable no-undef */
import 'dotenv/config'
import 'node-telegram-bot-api'
import TelegramBot from 'node-telegram-bot-api'



const bot = new TelegramBot(process.env.TOKEN, { polling: true })
const webAppUrl = 'https://btc25miner.netlify.app'

bot.on('message', async (msg) =>{
    const chatId = msg.chat.id
    const text = msg.text

    if(text === '/start'){
        await bot.sendMessage(chatId, 'Начни майнить BTC25 в этой игре!', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Начать майнить', web_app: { url: webAppUrl } }],
                ],
            },
        })
    }

})