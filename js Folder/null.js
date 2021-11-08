//user system
class User {    //this is a class having a function inside of it
constructor(id, name){  //this is a function with the name constructor
    this.id = id;
    this.name = name;
}    
hasAccess(){  //this is a function with the name hasAccess
    return this.name === 'Max'
}
}
class NullUser {    //this is a class having a function inside of it
    constructor(){  //this is a function with the name constructor
        this.id = 1;
        this.name = 'Guest';
    }    
    hasAccess(){  //this is a function with the name hasAccess
        return false
    }
    }

const users = [  //this is an  array holding two variables
    new user(1, 'Max'),
    new user(2, 'Bobo')
]

function getUser(id){   //this is a function with getUser
    const user = users.find(user => user.id === id)
    if(user == null){
        return new NullUser()
    }
    else{ 
        return user
    }
}

function printUser(id){   //this is a function with name printUser
    const user = getUser(id)


/*we need to explicitly tell the console.log to print `Guest`
 if the user does not have a name.

this is problematic since we need to remeber to always put this every 
time we use the users name.

it is also bad because if we want to print `unknown user` insted, 
we would need to change every place that we put `Guest`
which will most likely be all over the application.*/

// let name = 'Guest'
// if(user !=null && user.name != null) name = user.name
console.log('hello' + user.name)

/* This will throw an error if we don't first check that the user 
object has this function available and isn't null.

this is a lot of extra code to add in every time we want to 
check user access, and could cause bugs that are easy to miss if forget to do the null checks.
*/
if (user.hasAccess()){
    console.log('You have access')
}else{
    console.log('you are not allowed here')
}
}

// let name2 = "Max"
// let greetings = `hello ${name2} i am here with you`;
// alert(`${greetings}`);