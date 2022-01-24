//Using functions

function user(name, id, noOfProjects) {
    let obj = {};
    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;

    obj.getProjects = function() {
        return obj.noOfProjects;
    },
    obj.changeName = function(newName) {
        let prevName = obj.name
        obj.name = newName;
        return prevName;
    },
    obj.incrementProject = function() {
        return ++obj.noOfProjects;
    },
    obj.decrementProject = function() {
        return --obj.noOfProjects;
    }
    return obj;
}

let user1 = user("John", 217, 50);
let user2 = user("Arya", 200, 100);
 
//Prototypal Pattern
let  userMethods = {
    getProjects: function() {
        return this.noOfProjects;
    },
    changeName: function(newName) {
        let prevName = this.name
        this.name = newName;
        return prevName;
    },
    incrementProject: function() {
        return ++this.noOfProjects;
    },
    decrementProject: function() {
        return --this.noOfProjects;
    },
};

function createUser(name, id, noOfProjects) {
    let obj = Object.create(userMethods);
    
    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;

    return obj;
}



let user3 = createUser("James", 41, 78);
let user4 = createUser("Janet", 23, 65);

//Pseudo classical way


function User(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}

User.prototype = {
    getProjects() {
        return this.noOfProjects;
    },

    changeName(newName) {
        let prevName = this.name
        this.name = newName;
        return prevName;
    },

    incrementProject() {
        return ++this.noOfProjects;
    },

    decrementProject() {
        return --this.noOfProjects;
    }
}

let user5 = new User("John", 200, 400);
let user6 = new User("Mark", 20, 100);

// Class Pattern

class UserDetails {
    constructor(name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }

    getProjects() {
        return this.noOfProjects;
    }

    changeName(newName) {
        let prevName = this.name
        this.name = newName;
        return prevName;
    }

    incrementProject() {
        return ++this.noOfProjects;
    }

    decrementProject() {
        return --this.noOfProjects;
    }

}

let user7 = new UserDetails("John", 200, 400);
let user8 = new UserDetails("Mark", 20, 100);