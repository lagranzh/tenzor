class Person{
    constructor(fullName, university){
        this.fullName = fullName;
        this.university = university;
    }
}

class Student extends Person{
    constructor(fullName, university) {
        super(fullName, university);
        this.type = 'student';
    }
}

class Teacher extends Person{
    constructor(fullName, university) {
        super(fullName, university);
        this.type = 'teacher';
    }
}

class PersonFactory {
    create(name, university, type){
        switch(type){
            case 'student':
              return new Student(name,university);
            case 'teacher':
              return new Teacher(name,university);
        }
    }
}

class School{
    constructor(params){
        this.Array = [];
    }

    addPerson(name, university, type){
        const personFactory = new PersonFactory();
        this.Array.push(personFactory.create(name, university, type));
    }

    deletePerson(name){
        let id_del = this.Array.findIndex( item => item.fullName === name);
        this.Array.splice(id_del, 1);
    }

    getPersonByName(name){
        let id_find = this.Array.findIndex(item => item.fullName === name) ;
        return this.Array[id_find];
    }
}