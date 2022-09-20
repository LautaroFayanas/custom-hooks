import { useState } from "react"

export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState( initialForm )

    const onInputChange = ({target}) => {
        const { name , value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onReset = () => {
        setFormState(initialForm)
    }

    //Si trabajo mi return como objeto, es porque se que despues lo voy a ir expandiendo. 
    return {
        //Puedo desestructurar mi formState para ahorrarme lineas de codigo a la hora de pasarlo a mi componente
        ...formState,

        formState,
        onReset,
        onInputChange
    }
}
