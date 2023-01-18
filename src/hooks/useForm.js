import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    const [formState, setFormState] = useState( initialForm );

    
    const onInputChange = ({target}) => {
        const {name, value} = target;
        console.log(name);
        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    const onCleanForm = () => {
        setFormState(initialForm);
    }
    
  return {
    ...formState,
    formState, 
    onInputChange,
    onCleanForm
  }
}

