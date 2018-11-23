import mongoose, { Promise } from 'mongoose';
import {Friends } from './dbConnector';
// In memory DB - We are not using the mongodb
// class Friend {
//     constructor(id, {firstName, lastName, gender, age, language, email, contact}) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.age = age;
//         this.language = language;
//         this.email = email;
//         this.contact = contact;
//     }
// }

// const friendsDb = {};

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
        // We no longer the the In-memory
        // createFriend: ({input}) => {
        //     let id = require('crypto').randomBytes(10).toString('hex');
        //     friendsDb[id] = input;
        //     return new Friend(id, input);
        // }

        createFriend: (root, { input } ) => {
            const newFriend = new Friends({
                firstName: imput.firstName,
                lastName: input.lastName,
                gender: input.gender,
                age: input.age,
                language: input.language,
                email: input.email,
                contact: input.contact
            });

            newFriend.id = newFriend.id;
            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if(err) reject(err)
                    else resolve(newFriend)
                })
            })
        }
    }
};

export default resolverMap;
