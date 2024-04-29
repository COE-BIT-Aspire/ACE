function orderFood() {
    console.log("Ordering food..."); // This is the first statement
    setTimeout(() => {
        console.log("Your food is being prepared. Thank you"); // This is the set timeout method
    }, 3000); 
    
    console.log("Order placed successfully! Your food will arrive soon."); // This is the last statement
}

orderFood();
