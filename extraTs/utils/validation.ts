
import validateEmail from './helper.js';
import { IvalidUser } from '../interfaces';
function validateUsers(user: any) {
  const validUsers: IvalidUser[] = [];
  const invalidUsers: IvalidUser[] = [];
  user.forEach(({ traineeEmail, reviewerEmail }) => {
    validateEmail(traineeEmail) ? validUsers.push(traineeEmail) : invalidUsers.push(traineeEmail);
    validateEmail(reviewerEmail) ? validUsers.push(reviewerEmail) : invalidUsers.push(reviewerEmail);
  }
  );
  console.log(`There are ${validUsers.length} valid users:`, validUsers);
  console.log(`There are ${invalidUsers.length} invalid users:`, invalidUsers);
}
// validateUsers(users)
export default validateUsers;
