import React from "react";
import { useState, useEffect } from "react";



function useCurrencyInfo(currency){
    const requestUrl = `https://api.frankfurter.dev/v1/latest?base=${currency}`
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(requestUrl)
        .then( res => res.json() )
        .then( res => setData(res.rates) )
    }, [currency])
    return data;
}

export default useCurrencyInfo;