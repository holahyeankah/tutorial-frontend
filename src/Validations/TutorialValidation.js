import Validator from 'validatorjs';


class TutorialValidation {
 
  static InputValidation(tutorialInput) {
    const {title, description} = tutorialInput;

    const validation = new Validator(
      {
        title,
        description
      },
      {
      title: 'required|string',
        description: 'required|string',
     
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

export default TutorialValidation;