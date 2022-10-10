const express = require("express");
const app = express();

const { engine } = require("express-handlebars");

const port = 3000;



app.engine('hbs',
    engine({
        defaultLayout: '',
        partialsDir: __dirname + '/views/partials',
        extname: '.hbs'
    })
);
app.set('view engine', 'hbs');
app.set('views', './views/layouts');
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static('imagenes'));
app.use(express.static('css'));



app.get("/", function (req, res) {
    res.render("Main", {
        // usuario: "Fernando Gómez",
        Productos: [
            "banana",
            "cebollas",
            "pimenton",
            "papas",
            "lechuga",
            "tomate",
        ],
        Bienvenida: "Bienvenido al mercado WEB, seleccione sus productos"
    });
});


app.listen(port, () => console.log('Iniciando en puerto: ' + port));