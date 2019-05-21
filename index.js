const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const app = express();
app.engine('handlebars', expressHbs({ layuotsDir: 'views/layouts/', defaultLayout: 'main-layout' }));
app.set('view engine', 'handlebars')
//app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(shopRouter);
app.use(adminData.routes);
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page not found' });
})


app.listen(3000);