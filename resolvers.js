// In memory DB
class Friend {
    constructor(id, {firstName, lastName, gender, age, language, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.language = language;
        this.email = email;
    }
}

const friendsDb = {};

// Root Resolver
const resolvers = { 
    friend: () => {
            return {
                "id": 180220,
                "firstName": "Tarun",
                "lastName": "Murala",
                "gender": "M",
                "age": 30,
                "language": "English",
                "email": "tarun.murala@gmail.com"
            }
    },
    getFriend: ({id}) => {
        return new Friend(id, friendsDb[id]);
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendsDb[id] = input;
        return new Friend(id, input);
    }
};

export default resolvers;