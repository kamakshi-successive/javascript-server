"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.permissions = void 0;
exports.permissions = {
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
exports.user = [
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
//# sourceMappingURL=constants.js.map