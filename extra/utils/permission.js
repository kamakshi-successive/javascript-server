// let permissions={
//     'getUsers':{
//         all:['head-trainer'],
//         read:['trainee','trainer'],
//         write:['trainer'],
//         delete:[],
//     },
//     'getAccess':{
//         all:['head-tainer'],
//         read:['trainee'],
//         write:['trainer'],
//         delete:['head-trainer'],
//       }
//   }


// function hasPermission(moduleName, role, permissionType)
// {
//   for(const [key,value] of Object.entries(permissions))
//   {
//     if(key===moduleName)
//     {
//       if(value.all.includes(role))
//       {
//         return true;
//       }
//       else
//       {
//         for(const [key1,value1] of Object.entries(value))
//         {
//           if(key1===permissionType)
//           {
//             if(value1.includes(role))
//             {
//               return true
//             }
//               return false;
//           }
//           else
//           {
//             continue;
//           }
//         }
//       }
//     }
//   else{
//     continue;
//   }
//   }
// }

const permissions = {
  getUsers: {
  all: ['head-trainer'],
  read : ['trainee', 'trainer'],
  write : ['trainer'],
  delete: []
  },

  getUsers2: {
  all: ['CEO'],
  read : ['HR dept', 'IT dept'],
  write : ['IT dept'],
  delete: []
  }
  }

  export default hasPermissions = (moduleName, role, permissionType) => {
  try{
  if (permissions[moduleName].all.includes(role) || permissions[moduleName][permissionType].includes(role)){
  console.log(`${role} has ${permissionType} permissions`)
  return true
  }

  console.log(`${role} does not has ${permissionType} permissions`)
  return false
  }
  catch(err) {
  console.log(`Error: ${moduleName} is not a valid module Name`)
  }

  }
  hasPermissions("getUsers2","HR dept", "read")
  hasPermissions("getUsers2", "CEO", "all")
  hasPermissions("getAccess", "IT dept", "write")
  hasPermissions("getUsers", "head-trainer", "write")
  hasPermissions("getUsers", "trainee", "all")
//   console.log("'getAccess','head-trainer','delete' : ",hasPermission('getAccess','head-trainer','delete'));
//   console.log("'getAccess','trainer','read' : ",hasPermission('getAccess','trainer','read'));
//   console.log("'getUsers','trainer','write' : ",hasPermission('getAccess','trainer','write'));
//   console.log("'getUsers','trainee','delete' : ",hasPermission('getUsers','trainee','delete'));
