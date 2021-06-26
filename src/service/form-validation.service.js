class FormValidationService{
    static isRequired(value){
        if(value){  
            return true;
        } else{
            return false;
        }
    }

    static isEmail(value){
        const  pattern  = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(pattern.test(value)){
            return true;
        } else{
            return false;
        }
    }

    static isMinlength(value){
        if(value && value.length > 20){
            return true;
        } else{
            return false;
        }
    }

}

export { FormValidationService  }