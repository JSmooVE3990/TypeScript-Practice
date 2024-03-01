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

function addNumbers(x: number, y: number): number {
    return x +y;
}

console.log(addNumbers(1,2));

const game: string = "It's all a game!!!"

function user(): void {
    let name: string;
    let email: string;
    email = "j@gmail.com"
    name="j";
    if(true){
        console.log(name);
        console.log(email);
    }
    console.log(name);
    console.log(email);
}

user();
console.log(game);

function printName(name: string): void {
    console.log(name);
}

const printer = printName('Will');
console.log(printer);

const error = (): never => {
    throw new Error("");
};

class User {
    private username;
    protected updateUser(): void {}
    public getUser() {}
}