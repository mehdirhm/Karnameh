'use client'
import Image from 'next/image'
import { Topbar } from '@/components/Topbar/Topbar'
import { QuestionList } from '@/components/QuestionsList/QuestionList'
import {useQuery } from 'react-query'
import { useQuestion } from '@/contexts/QuestionContext'

export default function Home() {

  const {questions, modifyQuestion} = useQuestion()

  
  // console.log(data)
  return (

    <div>
       <Topbar title='لیست سوالات'/>
       <QuestionList questions={questions}  />


    </div>


   
  )
}
