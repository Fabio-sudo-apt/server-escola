import express  from "express";
import bodyParser from 'body-parser'
import router from "./router";

class App{

    public express: express.Application
    constructor(){
        this.express = express()
        this.router()
        this.middleware()
    }
    private middleware(): void{
        this.express.use(bodyParser.urlencoded({ extended: false }))
    }
    private router(): void{
        this.express.use(router)
    }
}

export default new App().express