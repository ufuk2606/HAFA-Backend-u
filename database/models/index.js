const PersonModel = require('./Person');
const FamilyModel = require('./Family');
const CommentModel = require('./Comment');
const SubjectModel = require('./Subject');
const MeetingModel = require('./Meeting');

module.exports = [
    (config) => PersonModel(config),
    (config) => FamilyModel(config),
    (config) => CommentModel(config),
    (config) => SubjectModel(config),
    (config) => MeetingModel(config)
];


