console.log('Hello World'); 
let age: number = 20;

interface User {
    name: string;
    description: string;
    age: number;
    email: string;
}

type UserPreview = Omit<User, "email">;

const userPreview: UserPreview = {
    name: "Bob",
    description: "Awesome guy",
    age: 20,
};

enum UserType {
    Guest = "G",
    Verified = "V",
    Admin = "A"
}

const userType: UserType = UserType.Verified;

