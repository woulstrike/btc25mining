/* eslint-disable no-undef */
bot.on('message', async (msg) =>{
    const chatId = msg.chat.id
    const text = msg.text

    if(text === '/start'){
        const chat = await bot.getChat(chatId)
        const userId = chat.from.id 

        await bot.sendMessage(chatId, 'Начни майнить BTC25 в этой игре!', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Начать майнить', web_app: { url: webAppUrl } }],
                ],
            },
        })
    }

})