import express from 'express';
import { create } from 'express-handlebars';
import path from 'path';
import routes from './routes';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import session from 'express-session';
import { brl } from './helpers/formatter';

const app = express();

const hbs = create({
  extname: '.hbs',
  defaultLayout: '',
  helpers: { brl },
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'any', saveUninitialized: true, resave: true }));
app.use(flash());
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(routes);

export default app;
