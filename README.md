# *Sprint Poker Project*

## Tips Sequelize-cli:
___
### - Migration Create

To create a new migration you must use the command: npx sequelize-cli migration:generate --name [migration_name]

Ex.: $ npx sequelize-cli migration:generate --name teste

*Models must be created manually*

To run migrates use: *npx sequelize-cli db:migrate*
____


### - Seeders

Command to create a new seeder: npx sequelize-cli seed:generate --name [seeder-name]

Ex.: npx sequelize-cli db:seed:all