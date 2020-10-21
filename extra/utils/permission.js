const permissions=
{
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
}
function hasPermission(modulName,role,permissionType)
{
    if()
}

console.log("'getProducts','head-trainer','delete' : ",hasPermission('getProducts','head-trainer','delete'));