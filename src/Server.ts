import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundHandler } from './libs/routes';
import errorHandler from './libs/routes/errorHandler';
import mainRouter from './router';
import Database from './libs/Database';

class Server {
    app;
    constructor(private config) {
        this.app = express();
    }
    bootstrap() {
      this.initBodyParser();
      this.SetupRoutes();
      return this;
    }

    SetupRoutes() {
        this.app.get('/health-check', (req, res, next) => {
            res.send('i am ok');
        });
        this.app.use('/api', mainRouter);
        this.app.use(notFoundHandler);
        this.app.use(errorHandler);
    }

    public initBodyParser() {
      this.app.use(bodyparser.json( ));
    }
    run () {
      const { app, config: { port, mongoURL } } = this;
      console.log('port mong', port, mongoURL);
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
