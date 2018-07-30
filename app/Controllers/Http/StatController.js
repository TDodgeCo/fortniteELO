'use strict'
const Env = use('Env')
const Fortnite = use('fortnite-api')

class StatController {
  async index ({}) {
    let fortniteAPI = new Fortnite(
      [
        Env.get('EMAIL'),
        Env.get('PASS'),
        Env.get('EPIC_CLIENT_TOKEN'),
        Env.get('FN_CLIENT_TOKEN')
      ],
      {
          debug: true
      }
    )

    fortniteAPI.login().then(() => {
      fortniteAPI
          .getStatsBR("Mirardes", "pc", "weekly")
          .then(stats => {
              console.log(stats);
          })
          .catch(err => {
              console.log(err);
          });
    });
  }
}

module.exports = StatController
