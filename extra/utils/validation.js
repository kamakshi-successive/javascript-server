
import validateEmail from './helper.js'
export default function validateUsers(user) {
  const validUsers = [];
  const invalidUsers = [];
  user.forEach(({ traineeEmail, reviewerEmail }) => {
    validateEmail(traineeEmail) ? validUsers.push(traineeEmail) : invalidUsers.push(traineeEmail)
    validateEmail(reviewerEmail) ? validUsers.push(reviewerEmail) : invalidUsers.push(reviewerEmail)
  }
  )
  console.log(`There are ${validUsers.length} valid users:`, validUsers)
  console.log(`There are ${invalidUsers.length} invalid users:`, invalidUsers)
}
//validateUsers(users)
