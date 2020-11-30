class TraineeController {
  instance: TraineeController;
  static instance: any;

// To create of static instance

  static getInstance() {
    if (TraineeController.instance) {
      return TraineeController.instance;
    }


    TraineeController.instance = new TraineeController();
    return TraineeController.instance;
  }

// To get training controller

  get(req, res, next) {
    try {
      console.log('Inside get method of Trainee Controller');
      console.log('...DEBUG...', req.query);
      res.send({
        message: 'Trainees fetched successfully',
        data: [
          {
            name: 'Trainee1',
            address: 'Noida'
          }
        ]
      });
    } catch (err) {
      console.log('Inside err', err);
      next({
        error: 'Error Occured in fetching user',
        code: 500,
        message: err
      });
    }
  }

// To create a training controller

  create(req, res, next) {
    try {
      console.log('Inside post method of Trainee Controller');
      console.log('...DEBUG...', req.body);
      res.send({
        message: 'Trainees created successfully',
        data: [
          {
            name: 'Trainee1',
            address: 'Noida'
          }
        ]
      });
    } catch (err) {
      console.log('Inside err', err);
      next({
        error: 'Error Occured in creating user',
        code: 500,
        message: err
      });
    }
  }

// To update a Trainee Controller

  update(req, res, next) {
    try {
      console.log('Inside update method of Trainee Controller');
      console.log('...DEBUG...', req.body);
      res.send({
        message: 'Trainees updated successfully',
        data: [
          {
            name: 'Trainee1',
            address: 'Noida'
          }
        ]
      });
    } catch (err) {
      console.log('Inside err', err);
      next({
        error: 'Error Occured in updating user',
        code: 500,
        message: err
      });
    }
  }

// To delete a Trainee Controller

  delete(req , res , next) {
    try {
      console.log('Inside delete method of Trainee Controller');
      console.log('...DEBUG...', req.params);
      res.send({
        message: 'Trainees deleted successfully',
        data: [
          {
            name: 'Trainee1',
            address: 'Noida'
          }
        ]
      });
    } catch (err) {
      console.log('Inside err', err);
      next({
        error: 'Error Occured in deleting user',
        code: 500,
        message: err
      });
    }
  }
}

export default new TraineeController();
