const SomeRandomCat = require('some-random-cat').Random;

class CatController {
  async getRandomCat(req, res) {
    SomeRandomCat.getCat() // Function for generating cat
    .then(resp => {

        console.log(resp)
        res.json({url: resp.url})
    })
    .catch(e => {
        console.error(e)
        return
    });
   
  }
}

module.exports = new CatController();
