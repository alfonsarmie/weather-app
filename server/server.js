const express = require('express');
const handlebars = require('express-handlebars');
const cors = require('cors');

const path = require('path');



class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            main: '/'
        }


        this.middlewares();
        
        //Routes
        this.routes();

    }

    middlewares(){
        //Setting view engine
        this.app.engine('hbs', handlebars({
            defaultLayout:false,
            extname:'.hbs'
        }));
        this.app.set('view-engine', 'hbs');
        this.app.set('views', path.join(__dirname,'../','views'));


        //Cors to the requests
        this.app.use(cors());

    }

    routes(){
        this.app.use(this.paths.main, require('../routes/main'))

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        })
    }

}


module.exports = Server;