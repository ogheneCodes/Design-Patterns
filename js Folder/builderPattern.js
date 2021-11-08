// class Address{
//     constructor(zip,street){
//         this.zip = zip;
//         this.street = street
//     }
// }

// class User{
//     constructor(name, age, phone, address){
//         this.name = name;
//         this.age = age;
//         this.phone = phone
//         this.address = address
//     }
// }
// const user = new User('Bob')
// console.log(user)


// traditional way in using the builderPattern
// class Address{
//     constructor(zip,street){
//         this.zip = zip;
//         this.street = street
//     }
// }

// class User{
//     constructor(name){
//         this.name = name;
//     }
// }
// class UserBuilder{
//     constructor(name){
//         this.user = new User(name)
//     }
//     setAge(age){
//         this.user.age = age;
//         return this
//     }
//     setPhone(phone){
//         this.user.phone = phone;
//         return this
//     }
//     setAddress(address){
//         this.user.address = address;
//         return this
//     }
//     build(){
//         return this.user
//     }
// }
// let user = new UserBuilder('Bob').setAge(20).setPhone(+2348167196516).setAddress("NewYork").build()
// console.log(user)

// using javascript to create a builderPattern constructor class
class Address{
    constructor(zip,street){
        this.zip = zip
        this.street = street
    }
}

class User{
    constructor(name, {age, phone, address} = {}){ //easy way to create an optional paramter is to pass them as an object like{para1,para2..}(JSON)
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}
 let user = new User('Bob', {age: 21, phone: '09809839339', address: new Address('1', 'main')})
console.log(user)
alert("hello man")