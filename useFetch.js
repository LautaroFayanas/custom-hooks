import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [Estado, setEstado] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getApi = async () => {

        setEstado({
            ...Estado,
            isLoading: true
        })
        console.log('data');
        const resp = await fetch(url);
        const data = await resp.json()
        console.log(data);

        setEstado({
            data: data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        
        getApi()

    }, [url])
    


  return {

        data :      Estado.data ,
        isLoading : Estado.isLoading ,
        hasError :  Estado.hasError

  }
}
