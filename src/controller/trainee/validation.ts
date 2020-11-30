const validationConfig = {
  create: {
      id: {
       required: true,
       string: true,
       in: [ 'body' ],
       custom: ( value ) => {
           console.log( 'Value', value );
           throw { error: 'Error Occured', message: 'Message' }; }
           },
      name: {
          required: true,
          regex: '/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/',
      in: [ 'body' ],
      errorMessage: 'Name is invalid',
  }
},
delete: {
   id: {
       required: true,
       in: [ 'params' ],
       errorMessage: 'Id is invalid',
      }
  },

get: {
  skip: {
      required: true,
      default: 1,
      number: true,
      in: [ 'query' ],
      errorMessage: 'Skip is invalid', },
  limit: {
      required: false,
      default: 10,
      number: true,
      in: [ 'query' ],
      errorMessage: 'Limit is invalid',
  }
},
update: {
  id: {
      required: true,
      string: true,
      in: ['body']},
  dataToUpdate: {
          in: ['body'],
          required: true,
          isObject: true,
  }
}
};

export default validationConfig;
