//enum - group of constants
const Beverages = {
    COFFEE: 'Coffee',
    TEA: 'Tea',
    JUICE: 'Juice',
    SODA: 'Soda'
};

function serveBeverage(beverageType) {
    switch (beverageType) {
        case Beverages.COFFEE:
            return "Here's your cup of coffee!";
        case Beverages.TEA:
            return "Here's your cup of tea!";
        case Beverages.JUICE:
            return "Here's your glass of juice!";
        case Beverages.SODA:
            return "Here's your soda!";
        default:
            return "Sorry, we don't serve that beverage.";
    }
}

console.log(serveBeverage(Beverages.TEA)); 
console.log(serveBeverage('WATER'));

