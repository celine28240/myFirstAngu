import { AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';

export function isRequiredValidator(name1, name2): ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
        const value1 = control.get(name1).value;
        const value2 = control.get(name2).value;

        if (value1 !=="" && value1 !==" " || value2>0){
            return null;
        } else {
            return {"isRequired": {actual:value1, expected: value2}};
        }
    };
}