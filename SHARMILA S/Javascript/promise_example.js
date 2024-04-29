// Simulating data retrieval function with a delay
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                name: 'John',
                age: 30,
                city: 'New York'
            };
            //resolve(data); 
            reject('Error: Unable to fetch data');
        }, 2000); 
    });
}

console.log("Fetching data...");
fetchData()
    .then(data => {
        console.log("Data retrieved successfully:", data);
    })
    .catch(error => {
        console.error("Error while fetching data:", error);
    });
