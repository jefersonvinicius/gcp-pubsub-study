import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import routes from './routes';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import session from 'express-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'any', saveUninitialized: true, resave: true }));
app.use(flash());
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: '' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(routes);

export default app;
