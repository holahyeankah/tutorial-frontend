import Validator from 'validatorjs';


class LoginValidation {
 
  static InputValidation(loginInput) {
    const {email, password} = loginInput;

    const validation = new Validator(
      {
        email,
        password
      },
      {
        email: 'required|string|email',
        password: 'required|min:8|max:40',
     
      },
    );
    const isValid = false;

    if (validation.passes()) {
      return {
        isValid: true
      };
    }

    const errors = validation.errors.all();
    return {
      isValid,
      errors
    };
  }
}

export default LoginValidation;