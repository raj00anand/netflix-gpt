export const checkValidData = (IsSignInForm, email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(IsSignInForm){
        if(!isEmailValid) return "Email is not valid";
        if(!isPasswordValid) return "Password is not valid";
    }else{
        if(!isEmailValid) return "Email is not valid";
        if(!isPasswordValid) return "Password is not valid";
        if(name ==='') return "Enter correct name";
    }
    
    
    return null;
}