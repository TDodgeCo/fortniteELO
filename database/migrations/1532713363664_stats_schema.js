'use strict'

const Schema = use('Schema')

class StatsSchema extends Schema {
  up() {
    this.create('stats', table => {
      table.increments()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.string('game_type', 20).notNullable()
      table.string('platform', 3).notNullable()
      table.integer('wins')
      table.integer('top3')
      table.integer('top5')
      table.integer('top6')
      table.integer('top10')
      table.integer('top12')
      table.integer('top25')
      table.float('kd', 3, 2) // epic returns a string
      table.float('win_rate', 3, 2) // epic returns a string
      table.integer('matches')
      table.integer('kills')
      table.string('time_played', 50)
      table.string('kills_per_match', 20)
      table.string('kills_per_min', 20)
      table.date('time_period') // alltime or weekly
      table.timestamps()
    })
  }

  down() {
    this.drop('stats')
  }
}

module.exports = StatsSchema
