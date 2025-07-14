import React from "react"
import { useId } from "react";

function InputBox({
    label,
    amount,
    onCurrencyChange,
    onAmountChange,
    currencyList = [],
    selectedCurrency = 'USD',
    amountInputDisabled = false,
    currencyInputDisabled = false
}) {

    let labelId = useId();
    let currencyId = useId();
    return (
        <>
            <div className='h-30 w-180 bg-gray-200 rounded-xl flex justify-between items-center'>

                <div className='mx-10 flex  flex-col gap-4' >

                    <label htmlFor={labelId}>
                        {label}
                    </label>

                    <input type="number" id= {labelId}
                        value={amount} 
                        onChange={(e) => (onAmountChange(Number(e.target.value)))}
                        disabled = {amountInputDisabled}
                    />

                </div>


                <div className='mx-10  flex  flex-col gap-4 ' >

                    <label htmlFor={currencyId}>Currency</label>

                    <select id={currencyId} class="rounded-lg block w-50 p-2.5 dark:bg-gray-700/70 dark:border-gray-600/70 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-700"
                    value={selectedCurrency}
                    onChange={(e)=> onCurrencyChange(e.target.value)}
                    disabled= {currencyInputDisabled}
                    >                      
                    
                        {currencyList.map((currency)=>{
                            return <option  key={currency} value={currency}>{currency}</option>
                        })}
                    </select>

                </div>

            </div>
        </>
    )
}


export default InputBox;