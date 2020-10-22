
// let users=[
//   {
//   traineeEmail: 'trainee1@successive.tech',
//   reviewerEmail: 'reviewer1@successive.tech',
//   },
//   {
//   traineeEmail: 'abc@gmail.com',
//   reviewerEmail: 'abcre@gmail.com',
//   },
//   {
//   traineeEmail: 'ftc@successive.tech',
//   reviewerEmail: 'ftcre@successive.tech',
//   },
//   {
//   traineeEmail: 'trainee2@successive.tech',
//   reviewerEmail: 'reviewer2@successive.tech',
//   },
//   {
//   traineeEmail: 'trainee3@successive.tech',
//   reviewerEmail: 'reviewer3@successive.tech',
//   }
//   ]

//   function validateEmail(email){
//   var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   var domain=email.split('@')[1];
//   return reg.test(email) && (domain=='successive.tech');
//   }


//   function validateUsers(users){
//   const vuser=[];
//   const iuser=[];
//   let icount=0;
//   let vcount=0;
//   users.forEach(({traineeEmail,reviewerEmail}) => {
//   if(validateEmail(traineeEmail)&&validateEmail(reviewerEmail))
//   {
//   icount+=1;
//   vuser.push({traineeEmail,reviewerEmail});
//   }
//   else
//   {
//   vcount+=1;
//   iuser.push({traineeEmail,reviewerEmail});
//   }
//   });
//   // const result = {
//   //  validUsers: vuser,
//   //  inValidUsers: iuser,
//   //  countOfValidUsers: vcount,
//   //  countOfInvalidUsers: icount,
//   // }
//    return {validUsers: vuser,
//     inValidUsers: iuser,
//     countOfValidUsers: vcount,
//     countOfInvalidUsers: icount,
//    }
//   }

//   const result = validateUsers(users);
//   console.log(result);


//   const notifyValidUsers = (validUsers) => {
//    validUsers.forEach((user) => {
//      console.log(`Hello ${user.traineeEmail}`);
//    })
//   }

//   notifyValidUsers(result.validUsers);


const users = [
  {
  traineeEmail: 'trainee.S@successive.tech',
  reviewerEmail: 'avinash.thube@successive.tech'
  },

  {
  traineeEmail: 'trainee2.A@live.in' ,
  reviewerEmail: 'reviewer2.B@successive.tech'
  },

  {
  traineeEmail: 'trainee3.C@gmail.com',
  reviewerEmail: 'reviewer3.D@successive.tech'
  }

  ];


const validateEmail = (email) => {
  const regex = /\w+[.]\w+@successive.tech$/i;
  return regex.test(email)
}


const validateUsers = (user) =>{
  const validUsers = [];
  const invalidUsers = [];
  user.forEach(({traineeEmail, reviewerEmail}) => {
  validateEmail(traineeEmail) ? validUsers.push(traineeEmail) : invalidUsers.push(traineeEmail)
  validateEmail(reviewerEmail) ? validUsers.push(reviewerEmail) : invalidUsers.push(reviewerEmail)
  }
  )
  console.log(`There are ${validUsers.length} valid users:`, validUsers)
  console.log(`There are ${invalidUsers.length} invalid users:`, invalidUsers)

}
  validateUsers(users)
