// fetch("https://jsonplaceholder.typicode.com/todos/2",()=>{console.log('fetched data')})
// .then(response => response.json(),()=>{
//     console.log('data is converted to JSON')
// })
// .then (json=> console.log(json),()=>{
//     console.log('data is logged')
// })


// const getTodos = (resource,callback)=>{
//  return new Promise((resolve,reject)=>{
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             resolve(data)
//         } else if(request.readyState ===4 ){
//             reject('could not fetch data')
//         }
//         // console.log(request, request.readyState)
//     })
//     request.open("GET", resource);
//     request.send()
//  })
// }


// getTodos()

// getTodos('todos/people.JSON',(err,data)=>{

//     console.log(data);
//     getTodos('todos/gender.JSON',(err,data)=>{
//         console.log(data)
//         getTodos('todos/class.JSON',(err,data)=>{
//             console.log(data)
//         })
//     })




// const getSomething =()=>{
// return new Promise ((resolve,reject)=>{
// reject('some error')
// })
// }

// getSomething().then((data)=>{
//     console.log(data)
// }).catch(err=>{
// console.log(err)
// })

// fetch("todos/people.JSON")
// .then((response)=> response.json())
// .then((json)=>{
//     console.log(json)
// }).catch((err)=>{
// console.log(err)
// })

const todos = async () =>{
const response = await fetch("todos/class.JSON")
console.log(response)
}
todos()

// const relay = todos()
// console.log(relay)