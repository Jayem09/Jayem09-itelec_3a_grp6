function validation(values) {
    let error = {};
  
    const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (values.name === "") {
        error.name = "Name should not be empty";
      } else if (!usernamePattern.test(values.username)) {
        error.name = "Name doesn't match ";
      }else{
       error.name = "" 
      }
 
    if (values.username === "") {
      error.username = "Username should not be empty";
    } else if (!usernamePattern.test(values.username)) {
      error.username = "Username doesn't match ";
    }else{
     error.username = "" 
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
      error.password = "Password doesn't match ";
    }else{
        error.password =""
    }
  
    return error;
  }
  
  export default validation;