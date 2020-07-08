const { Comment, Family, Meeting, Person, Subject } = require('../database');

module.exports = class SubjectService {
    static findAll(){
        return Subject.findAll({
            include: [ Comment ]
          });
    }

    static create(data){
        return Subject.create(data);
    }
}