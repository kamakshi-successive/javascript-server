import UserRepository from '../../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default() => {
  userRepository.count()
    .then(res => {
      if (res === 0) {
        console.log('Data seeding in progress');
        userRepository.create({name: 'Head Trainer', role: 'head-trainer', email: 'abc@successive.in'});
        userRepository.create({name: 'Trainer', role: 'head-trainer', email: 'abc@gmail.com' });
      }
    })
    .catch(err => console.log(err));
};


