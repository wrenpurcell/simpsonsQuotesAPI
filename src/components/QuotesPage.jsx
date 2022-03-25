import { getQuotesData } from "../services/getQuotesData"
import { useState, useEffect } from 'react'
import '../App.css'
import QuoteCard from "./QuoteCard"

export default function QuotesPage() {
  const [quotesData, setQuotesData] = useState([])
  
  useEffect(()=>{
   getQuotesData()
   .then(res => setQuotesData(res.data))
  },[])

  // console.log(quotesData)

    return (
    <div>
        <ul className="quoteUl">
            {quotesData.map((quoteObj, index)=>{
                console.log(quoteObj)
                return(
                    <QuoteCard key={index} quoteObj={quoteObj}/>
                )
            })}
        </ul>
    </div>
  )
}
