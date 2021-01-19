import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import configuration from '../config/configuration';

const userRepository: UserRepository = new UserRepository();
export default () => {
  userRepository.countData()
      .then(res => {
          if (res === 0) {
            const saltRounds = 10;
            const password = configuration.password;
              console.log('Data seeding in progress');
              userRepository.create({
                  id: '101',
                  name: 'head-trainer',
                  email: 'headtrainer@successive.tech',
                  role: 'head-trainer',
                  password
              }, undefined);
              console.log('password seed', password)
              userRepository.create({
                  id: '102',
                  name: 'trainer',
                  email: 'trainer@successive.tech',
                  role: 'trainer',
                  password
              }, undefined );
          }
      })
      .catch(err => console.log(err));
};
