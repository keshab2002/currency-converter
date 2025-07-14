import { useState } from 'react'
import InputBox from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css'

function App() {
  const [amount , setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');

  const data = useCurrencyInfo(from);

  let options = [from, ...Object.keys(data)];

  const convert = ()=>{
    setConvertedAmount((amount * data[to]).toFixed(2));
  }

  const swap = ()=>{
    setFrom(to),
    setTo(from),
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <>
      <div className="bg-[url(https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg)] bg-cover bg-center h-screen flex items-center justify-center opacity-80">

        <div className='h-100 w-200 bg-indigo-200/80 rounded-xl mb-20 flex flex-col justify-center items-center gap-7 text-lg' >

          
          <InputBox
            label = "From"
            amount = {amount}
            onCurrencyChange = {setFrom}
            onAmountChange = {setAmount}
            currencyList = {options}
            selectedCurrency = {from}
            amountInputDisabled = {false}
            currencyInputDisabled = {false}
          />

          
          <InputBox
            label = "To"
            amount = {convertedAmount}
            onCurrencyChange = {setTo}
            onAmountChange = {setConvertedAmount}
            currencyList = {options}
            selectedCurrency = {to}
            amountInputDisabled = {false}
            currencyInputDisabled = {false}
          />

         

          

          <button className='h-12 w-50 bg-green-600/95 rounded-xl' 
            onClick={()=>{
              convert();
            }}
          >
            Convert {from} to {to}
          </button>

          <button className='h-13 w-20 absolute bg-amber-500/60 rounded-lg mb-19 border-4 
          border-gray-200' 
            onClick={()=> swap()}
          > 
            Swap
          </button>

        </div>


      </div>
    </>
  )
}

export default App
