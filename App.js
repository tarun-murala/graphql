import express from 'express';
import graphHttp from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express();

app.get('/', (req, res) => {
    res.send("Praise the Lord Jesus Christ Amen!");
});

//  Path for GraphiQl
app.use('/graphql', graphHttp({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(3000, () => console.log("Praise the Lord Jesus Chirst Amen!")); 