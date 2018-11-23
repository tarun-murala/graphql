import express from 'express';
import graphHttp from 'express-graphql';
import schema from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send("Praise the Lord Jesus Christ Amen!");
});

//  Path for GraphiQl
app.use('/graphql', graphHttp({
    schema: schema,
    graphiql: true
}));

app.listen(3000, () => console.log("Praise the Lord Jesus Chirst Amen!")); 