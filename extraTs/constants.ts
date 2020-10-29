import { Ipermissions, Iusers } from './interfaces';

const permissions: Ipermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [],
    },
    'getUser': {
        all: ['head-trainer'],
        read: ['trainer'],
        write: ['trainee'],
        Delete: [],
    }
};
const user: Iusers[] =
    [
        {
            traineeEmail: 'trainee1@successive.tech',
            reviewerEmail: 'reviewer1@successive.tech',
        },
        {
            traineeEmail: 'trainee2@successive.tech',
            reviewerEmail: 'reviewer2@successive.tech',
        },
        {
            traineeEmail: 'trainee3uccessive.tech',
            reviewerEmail: 'reviewer3@successive.tech',
        },
        {
            traineeEmail: 'trainee4@successive.tech',
            reviewerEmail: 'reviewer4uccessive.tech',
        },
        {
            traineeEmail: 'trainee5@gmail.tech',
            reviewerEmail: 'reviewer5@successive.tech',
        }
    ];
export
{
  user, permissions
};
