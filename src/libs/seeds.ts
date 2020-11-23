import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import configuration from '../config/configuration';

const userRepository: UserRepository = new UserRepository();
export default () => {
  userRepository.count()
      .then(res => {
          if (res === 0) {
            const saltRounds = 10;
            const password = configuration.password;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);
              console.log('Data seeding in progress');
              userRepository.create({
                  id: 101,
                  name: 'head-trainer',
                  email: 'headtrainer@successivetech',
                  role: 'head-trainer',
                  password: hash
              });
              userRepository.create({
                  id: 102,
                  name: 'trainer',
                  email: 'trainer@successivetech',
                  role: 'trainer',
                  password: hash
              });
          }
      })
      .catch(err => console.log(err));
};
