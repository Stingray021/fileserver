const fetch = require("node-fetch");
const fs = require("fs");

class JokesController {
  async getRandomJokes(req, res) {
    let jokes = [];
    const regJokesText =
      /<\s*div[^>]*?class="text"[^>]*?>([\S\s]*?)<\/\s*div\s*>/gm;
    const url = "https://www.anekdot.ru/random/anekdot/";
    const response = await fetch(url);
    const text = await response.text();
    let joke;
    let counter = 0;
    while ((joke = regJokesText.exec(text)) !== null) {
      jokes.push(joke[1]);
      counter++;
      if (counter == 5)
        break
    }
    return res.json({jokes});
  }
}

module.exports = new JokesController();
