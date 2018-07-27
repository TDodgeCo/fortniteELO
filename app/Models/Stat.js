'use strict'

const Model = use('Model')

class Stat extends Model {
  users() {
    return this.belongsToMany('App/Models/User')
  }
}

module.exports = Stat
