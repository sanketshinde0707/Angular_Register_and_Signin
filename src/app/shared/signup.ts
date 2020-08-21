export class Signup {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    check: number; 
}
/* Here the check property is used to check if the signin data is correct with the signup data available,
    if the number is "0" then it means that the email and password both are correct ,
    if the number is "1" then it means that the email is correct but the password is incorrect,
    and if the number is "2" then t means that both email and password both are not present */