// LocalStorage:
// Setting data in localStorage
localStorage.setItem('Bike1', 'BMW');

// Getting data from localStorage
const BMW = localStorage.getItem('Bike1');
console.log('localStorage Bike1:', BMW);

// SessionStorage:
// Setting data in sessionStorage
sessionStorage.setItem('Bike2', 'Duggit');

// Getting data from sessionStorage
const Duggit = sessionStorage.getItem('Bike2');
console.log('sessionStorage Bike2:', Duggit);

// Removing a specific item from sessionStorage
sessionStorage.removeItem('Bike2');
const removedDuggit = sessionStorage.getItem('Bike2');
console.log('sessionStorage after removal Bike2:', removedDuggit); // Should be null

// JSON Storage
const obj = { name: 'Sneha', age: 20 };
localStorage.setItem('user', JSON.stringify(obj));
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log('localStorage user:', storedUser);

// Clearing storage
localStorage.clear();
const clearedLocalStorage = localStorage.getItem('user');
console.log('localStorage after clearing:', clearedLocalStorage); // Should be null

sessionStorage.clear();
const clearedSessionStorage = sessionStorage.getItem('user');
console.log('sessionStorage after clearing:', clearedSessionStorage); // Should be null
