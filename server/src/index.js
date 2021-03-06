import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';

const app = express();
const port = 5000;

// mongo connection
const mongoUri = process.env.MONGO_URL || 'mongodb://localhost:27017/soccerDB';
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) => {
	res.send('Hello World 22222!')
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});