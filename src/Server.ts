import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundHandler } from '../libs/routes';
import errorHandler from '../libs/routes/errorHandler';
import mainRouter from './router';
console.log(bodyparser);
class Server {
    // tslint:disable-next-line: semicolon
    app
    constructor(private config) {
        this.app = express();
    }
    bootstrap() {
        this.SetupRoutes();
        this.initBodyParser();
        return this;
    }
    SetupRoutes() {
        const {app} = this;

        this.app.get('/health-check', (req, res, next) => {
          //  console.log('Inside Second Middleware');
            res.send('i am ok');
        });
        this.app.use('/api', (req, res, next) => {
       //   console.log('Inside Fresh API');
          next();

        }, mainRouter);

        this.app.use(notFoundHandler);

        this.app.use(errorHandler);
        // return this;
    }

    public initBodyParser() {
      this.app.use(bodyparser.json({ type: 'application/*+json' }));
    }

    run() {
        const {app, config: {PORT}} = this;
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running on port ${PORT}`);
        // tslint:disable-next-line: semicolon
        })
    }
}
export default Server;
