import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundHandler } from './libs/routes';
import errorHandler from './libs/routes/errorHandler';
import mainRouter from './router';
import Database from './libs/Database';
//import seed
console.log(bodyparser);
class Server {
    // tslint:disable-next-line: semicolon
    app
    constructor(private config) {
        this.app = express();
    }
    bootstrap() {
      this.initBodyParser();
      this.SetupRoutes();
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
      this.app.use(bodyparser.json( ));
    }
    run () {
      const { app, config: { port, mongoURL } } = this;
      console.log("port mong",port,mongoURL);
      Database.open(mongoURL)
      .then((res) => {
          app.listen(port, (err) => {
              if (err) {
                  console.log(err);
              }
              console.log('Success! App is running on port : ', port);
          });
      })
      .catch(err => console.log(err));
  }
}
export default Server;
