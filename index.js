console.log('Hello World');
var age = 20;
var userPreview = {
    name: "Bob",
    description: "Awesome guy",
    age: 20,
};
var UserType;
(function (UserType) {
    UserType["Guest"] = "G";
    UserType["Verified"] = "V";
    UserType["Admin"] = "A";
})(UserType || (UserType = {}));
var userType = UserType.Verified;
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(1, 2));
function user() {
    var name;
    var email;
    email = "j@gmail.com";
    name = "j";
    if (true) {
        console.log(name);
        console.log(email);
    }
    console.log(name);
    console.log(email);
}
console.log(user());
