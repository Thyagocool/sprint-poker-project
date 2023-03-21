const Repository = require('./Repository')

const TypeUserRepository = require('./TypeUserRepository')
const UserRepository = require('./UserRepository')

module.exports = {
    TypeUserRepository: new Repository(new TypeUserRepository()),
    UserRepository: new Repository(new UserRepository())
}