#!/usr/bin/env node

'use strict';

const _ = require("lodown-silas546");

const customers = require("./data/customers.json");



/**
 * 1. Import your lodown module using the require() method, 
 *    using the string 'lodown-<my-username>', or whatever 
 *    name with which you published your npm lodown project.
 * 
 * 2. Solve all problems as outlined in the README.
 */
 
// Find the number of males.
let maleCount = 0;
_.each(customers, function(value, index, customers){
    if(customers[index].gender === 'male'){
        maleCount += 1;
    }
});
//console.log(maleCount);  


// Find the number of females.


let femaleCount = 0;
_.each(customers, function(value, index, customers){
    if(customers[index].gender === 'female'){
        femaleCount += 1;
    }
});
//console.log(femaleCount);

// Find the name and age of the oldest customer.

var highestAge = _.reduce(customers, function(seed, customer, index){
    // console.log("seed is currently " + seed);
    // console.log(index + " : " + customer.age);
    if(seed === null){
        return customer;
    }
    if(customer.age > seed.age){
     return customer; 
    }
    return seed;
}, null);
console.log("The customer with the highest age is " + highestAge.name + " " + highestAge.age);




// Find the name and age of the youngest customer.

var youngestAge = _.reduce(customers, function(seed, customer, index){
    // console.log("seed is currently " + seed);
    // console.log(index + " : " + customer.age);
    if(seed === null){
        return customer;
    }
    if(customer.age < seed.age){
     return customer; 
    }
    return seed;
}, null);
console.log("The customer with the youngest age is " + youngestAge.name + " " + youngestAge.age);

// Find the average balance of all the customers.
var totalBalance = _.reduce(customers, function(seed, customer, index){
    customer.balance = customer.balance.replace('$', '');
    customer.balance = customer.balance.replace(',', '');
    // console.log(customer.balance);
    // console.log(seed);
    return (seed + Number(customer.balance));
}, 0) / customers.length;
console.log('The average balance for customers is $' + totalBalance);

// Find how many customers' names begin with an arbitrary letter. Write a function to answer this question, then log an answer.
var nameMatch = _.filter(customers, function(value, index, array){
    //console.log(value.name);
    if(value.name[0] === 'D'){
        return value.name;
    }
});
nameMatch = nameMatch.length;
console.log(nameMatch);

// Find how many customers' friends' names begin with an arbitrary letter. Write a function to answer this question, then log an answer.

var friendsMatch = _.filter(customers, function(customer, index, array){
   // console.log(customer.friends);
    for(var friendsI = 0; friendsI < customer.friends.length; friendsI++){
       // console.log(customer.friends[friendsI]);
        if(customer.friends[friendsI]['name'][0] === 'D'){
            return customer.friends;
        }
    }
});
friendsMatch = friendsMatch.length;
console.log(friendsMatch);

// Find the names of all customers who are friends with a given customer (by name). i.e. Which customers have that customer's name in their friends list?

function friendFriends(friendName){
   var filteredFriends =  _.filter(customers, function(customer, index, array){
        for(var friendsI = 0; friendsI < customer.friends.length; friendsI++){
            if(customer.friends[friendsI]['name'] === friendName){
                return true;
            }
        }
        return false;
    });
    return _.map(filteredFriends, function(value, index, collection){
    return value.name;
});
}
var filterMe = friendFriends("Johnnie Berg");
console.log(filterMe);
// Find the top 3 most common tags among the customers.

// Create a summary of genders, the output should be:

