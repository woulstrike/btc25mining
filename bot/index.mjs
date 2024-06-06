/* eslint-disable no-undef */
import "dotenv/config";
import "node-telegram-bot-api";
import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.TOKEN, { polling: true });
const webAppUrl = "https://btc25miner.netlify.app";

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    const chat = await bot.getChat(chatId);
    const userId = chat.from.id;

    // Отправляем запрос к серверу
    const response = await axios.post(
      "https://your-nestjs-app.com/users/farm",
      {
        userId: userId,
      }
    );

    // Обрабатываем ответ от сервера
    if (response.data.success) {
      await bot.sendMessage(chatId, "Вы начали майнить BTC25!");
    } else {
      await bot.sendMessage(chatId, "Ошибка при начале майнинга BTC25");
    }
  }
});
