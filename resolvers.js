// In memory DB
class Friend {
    constructor(id, {firstName, lastName, gender, age, language, email, contact}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.language = language;
        this.email = email;
        this.contact = contact;
    }
}

const friendsDb = {};

// Resolver Map
const resolverMap = { 
    Query: {
        friend: () => {
            return {
                "id": 180220,
                "firstName": "Tarun",
                "lastName": "Murala",
                "gender": "MALE",
                "age": 30,
                "language": "English",
                "email": "tarun.murala@gmail.com"
            }
        },
        getFriend: ({id}) => {
            return new Friend(id, friendsDb[id]);
        }
    },
    Mutation: {
        createFriend: ({input}) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            friendsDb[id] = input;
            return new Friend(id, input);
        }
    }
};

export default resolverMap;
