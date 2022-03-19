import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ProductValidators{
    static cannot_contain_space(control:AbstractControl): ValidationErrors| null{
        if ((control.value as string).indexOf(' ') >= 0){
            return {cannot_contain_space: true}
        }
        return null
    }

    static price_outof_range(control:AbstractControl): ValidationErrors| null{
        let price:number = control.value as number;
        if (price <= 0 || price >= 999999999){
            return {price_outof_range: true};
        }
        return null;
    }

    static invalid_imageURL(control: AbstractControl): ValidationErrors| null{
        let imageURL:string = control.value as string;
        const matchpattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
        if (matchpattern.test(imageURL)==false){
            return {invalid_imageURL: true};
        }
        return null;
    }

}