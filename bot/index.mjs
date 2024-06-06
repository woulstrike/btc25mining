import "dotenv/config";
import "node-telegram-bot-api";
import TelegramBot from "node-telegram-bot-api";
import axios from "axios";

const bot = new TelegramBot(process.env.TOKEN, { polling: true });
const webAppUrl = "https://btc25miner.netlify.app";

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    const chat = await bot.getChat(chatId);
    const userId = msg.from.id;

    try {
      await axios.post("http://localhost:3000/users", { userId });
    } catch (error) {
      console.error("Ошибка при отправке запроса на сервер:", error);
      await bot.sendMessage(chatId, "Ошибка при отправке запроса на сервер. Пожалуйста, повторите попытку.");
      return;
    }

    await bot.sendMessage(chatId, "Начни майнить @BTC25 Promo в этой игре!", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Начать майнить", web_app: { url: webAppUrl } }],
        ],
      },
    });
  }
});