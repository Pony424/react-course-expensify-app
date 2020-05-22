//Object destructuring

const person = {
    name: 'Andrew',
    age: 26, 
    location: {
        city: 'palo alto',
        temp: 80
    }
};

const { temp, city } = person.location;

console.log(`It's ${temp} in palo alto`)


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
       // name: 'Penguin'
    }
};

const {name: publisherName = 'self published'} = book.publisher

console.log(publisherName)


//Array destructuring

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [coffee, ,price] = item;
console.log(`A medium ${coffee} costs ${price}`);
