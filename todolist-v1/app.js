const express = require('express')
const bodyParser = require('body-parser')

const app = express();

var items = [];

                // EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    var day = today.toLocaleDateString("en-NG", options);

    res.render('list', {kindOfDay: day, newListItems: items});

});

app.post("/", (req, res) => {
   var item = req.body.newItem;

   items.push(item);

   res.redirect('/');
})

app.listen(3000, () => {
    console.log('server running on port 3000...');
});