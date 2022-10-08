
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
    
module.exports = fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then(res =>res.text())
    .then((data) => {
        console.log( JSON.stringify(data))
    })
    .catch(err =>{console.log("there was an error")})
