// function getUsers() {
//     let users = [];
//     setTimeout(()=>{
//         users = [
//             {userName:'test', address:'bangalore'},
//             {userName:'test1', address:'bangalore1'}]
//     },5000)
//     return users;
// }

// function findUser (userName) {
//     const users = getUsers();
//     const user = users.find((user)=> user.userName === user.userName);
//     console.log("user is :::",user)
//     return user;
// }

function getUsers() {
return new Promise ((resolve,reject) => {
    setTimeout(()=>{
        const users = [
            {userName:'test', address:'bangalore'},
            {userName:'test1', address:'bangalore1'}]
         resolve(users)  
        // reject(users)
    },5000)
})   
}
function printOnSuccess(users) {
    console.log("users is :::",users);
}
function printOnFailure(error){
    console.log("error is :::",error)
}
const promise = getUsers();

promise.then(printOnSuccess).catch(printOnFailure);


