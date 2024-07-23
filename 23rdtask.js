let studentObj = {
    name:"Sriya",
    age:21,
    number:166516161,
    email:"Sriya@gmail.com",
    address:{
        pincode: 565747,
        city:"Europe"
    },
    supplies:['CHEMISTRY', 'BEE']
}
//1.Shallow copy
//using spread operator
let studentObj1 = {...studentObj}
studentObj1.age = 22        // It'll not disturb the original object
studentObj1.address.city = "US"     //This will reflects to the original object
console.log(studentObj, studentObj1)

//using object.assign method
let studentObj2 = {name:"Sindhu", email:"sindhu@gmail.com"}
let updatedObj = Object.assign(studentObj1, studentObj2)
console.log(updatedObj, studentObj1)


//2.Deep Copy
let Industry = {
    CEOname:"Manisha",
    company_details:{
        company_name:"MBS",
        branch:"Shadnagar",
        pincode:"892378"
    }
}
let updatedIndustry = JSON.parse(JSON.stringify(Industry))
updatedIndustry.company_details.branch = "Hyderbad"
console.log(Industry, updatedIndustry)


//3.Spread in Arrays
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr = [...arr1, ...arr2]
console.log(arr)


//4.Spread in objects
let obj1 = {firstName:"Sindhu", age:21}
let obj2 = {lastName:"Anji", number:9865645488}
let obj = {...obj1, ...obj2}
console.log(obj)


//5.Rest in functions
function sum(...nums){
    let sum = nums.reduce((a, b) =>{return a+b}, 0)
    return sum
}
console.log(sum(1,2,3,4,5,6,7,8,9,10))


//6.Rest in Destructuring
let friends =["Nikthi", "Sindhu", "Anji", "Sandeep", "MBS"]
let [first, second, ...rest] = friends
console.log(first, second, rest)