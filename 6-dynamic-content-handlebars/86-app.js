const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// set global values
// configurar handlebars
app.engine('handlebars', expressHbs( { layoutsDir: 'views/layout/', defaultLayout: 'main-layout'}));
app.set('view engine', 'handlebars');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
   // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
   res.status(404).render('404', {pageTitle:'Page not found t'});
});

app.listen(3000);
