const express = require('express');
const handlebars = require('express-handlebars');
const cors = require('cors');

const path = require('path');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            main: '/',
            results: '/results',
        }


        this.middlewares();
        
        //Routes
        this.routes();

    }

    middlewares(){
        //Parse the body
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());

        //Setting view engine
        this.app.engine('hbs', handlebars({
            defaultLayout:false,
            extname:'.hbs'
        }));
        this.app.set('view-engine', 'hbs');
        this.app.set('views', path.join(__dirname,'../','views'));

        //Static css files
        this.app.use(express.static('public'));

        //Cors to the requests
        this.app.use(cors());

    }

    routes(){
        this.app.use(this.paths.main, require('../routes/main'))
        this.app.use(this.paths.results, require('../routes/result'))

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        })
    }

}


module.exports = Server;