const UserData = {
    firstName: "Javinjoy",
    lastName: "H. Garcia",
    age: 21,
    email: "garciajavinjoy@gmail.com",
    isAdmin: false,
    fullName: function(){
        return this.firstName + " " + this.lastName; 
    },
    userInformation: function(){
        console.log("Full Name: " + UserData.fullName());
        console.log("Age: " + UserData.age);
        console.log("Email: " + UserData.email);
        if (UserData.isAdmin) {
            console.log("Role: + Admin");
        }
        else {
            console.log("Role: User");
        }


    },
    adminInformation: function(){
        UserData.isAdmin = true;
        console.log("Full Name: " + UserData.fullName());
        console.log("Age: " + UserData.age);
        console.log("Email: " + UserData.email);
        console.log( "Role: Admin");
    }

}    

console.log("User Information");
UserData.userInformation()

console.log("Admin Information");
UserData.adminInformation()