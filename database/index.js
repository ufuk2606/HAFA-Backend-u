const Sequelize = require('sequelize');
const config = require('./config');
const models = require('./models');

class Database {
    constructor(){
        this.models = {};
        this.initializeDatabase();
    }

    initializeDatabase(){
        const nodeEnv = process.env.NODE_ENV;
        if(nodeEnv) {
            const dbConfig = config[nodeEnv];
            const sequelize = new Sequelize(dbConfig);

            const dbModels = models.reduce((acc, curr) => {
                const model = curr(sequelize);
                acc[model.name] = model;
                return acc;
            }, {});
            this.models = sequelize.models = dbModels;

            sequelize.sync({ force: process.env.NODE_ENV === 'test' })
                .then(() => {
                    console.log(`Database & tables created!`)
                })
        } else {
            throw new Error("No NODE ENV set");
        }
    }
}

const database = new Database();
const {Person, Family, Meeting, Subject, Comment} = database.models;
/* Associations*/
Comment.belongsTo(Subject);
Subject.hasMany(Comment);
Subject.belongsTo(Meeting);
Meeting.hasMany(Subject);
Meeting.belongsTo(Family);
Family.hasMany(Meeting);

Person.belongsToMany(Meeting, { through: 'Person_Meetings' });
Meeting.belongsToMany(Person, { through: 'Person_Meetings' });

Person.belongsTo(Family);
Family.hasMany(Person);

module.exports = { ...database.models };
