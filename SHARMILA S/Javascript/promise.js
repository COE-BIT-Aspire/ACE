const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success")
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Failure")
    }, 3000);
})

// p1.then(console.log)
//p2.then(console.log).catch(console.log)
// Promise.all([p1,p2]).then(console.log).catch(console.log)
//Promise.allSettled([p1,p2]).then(console.log).catch(console.log)
Promise.race([p1,p2]).then(console.log).catch(console.log)