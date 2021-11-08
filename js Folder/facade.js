alert("hello")
// function getUsers() {
//     return fetch('https://jsonplaceholder.typicode.com/users',{
//         method: "GET",
//         headers: {"content-Type": "application/json"}
//     }).then(res=>res.json())
// }
// function getUserPosts(userId){
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{
//         method: "GET",
//         headers: {"content-Type": "application/json"}
//     }).then(res=>res.json())
// }
// getUsers().then(users => {
//     users.forEach(user => {
//         getUserPosts(user.id).then(posts =>{
//             console.log(user.name)
//             console.log(user.length)
//         })
//     })
// })
