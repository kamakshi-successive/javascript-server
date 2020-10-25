let users=[
  {
  traineeEmail: 'trainee1@successive.tech',
  reviewerEmail: 'reviewer1@successive.tech',
  },
  {
  traineeEmail: 'abc@gmail.com',
  reviewerEmail: 'abcre@gmail.com',
  },
  {
  traineeEmail: 'ftc@successive.tech',
  reviewerEmail: 'ftcre@successive.tech',
  },
  {
  traineeEmail: 'trainee2@successive.tech',
  reviewerEmail: 'reviewer2@successive.tech',
  },
  {
  traineeEmail: 'trainee3@successive.tech',
  reviewerEmail: 'reviewer3@successive.tech',
  }
  ]

function validateEmail(email){
  var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var domain=email.split('@')[1];
  return reg.test(email) && (domain=='successive.tech');
  }


function validateUsers(users){
  const vuser=[];
  const iuser=[];
  let icount=0;
  let vcount=0;
  users.forEach(({traineeEmail,reviewerEmail}) => {
  if(validateEmail(traineeEmail)&&validateEmail(reviewerEmail))
  {
  icount+=1;
  vuser.push({traineeEmail,reviewerEmail});
  }
  else
  {
  vcount+=1;
  iuser.push({traineeEmail,reviewerEmail});
  }
  });

  return {
    validUsers: vuser,
    inValidUsers: iuser,
    countOfValidUsers: vcount,
    countOfInvalidUsers: icount,
   }
  }

  const result = validateUsers(users);
  console.log(result);
  // const result = {
  //  validUsers: vuser,
  //  inValidUsers: iuser,
  //  countOfValidUsers: vcount,
  //  countOfInvalidUsers: icount,
  // }
  // const notifyValidUsers = (validUsers) => {
  //  validUsers.forEach((user) => {
  //    console.log(`Hello ${user.traineeEmail}`);
  //  })
  // }

  // notifyValidUsers(result.validUsers);
