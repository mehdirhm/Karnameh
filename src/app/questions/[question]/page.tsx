'use client'
import { Topbar } from "@/components/Topbar/Topbar"
import { ReplyList } from "@/components/ReplyList/ReplyList"
import { QuestionCard } from "@/components/QuestionCard/QuestionCard"
import { AddResponse } from "@/components/AddResponse/AddResponse"
import {useQuery } from 'react-query'
import {useState} from 'react'
import { Answer } from "@/Types/Types"

export default function Page({ params }: { params: { question: string } }) {
  // const {replies, modifyReplies} = useReplies()

  const [replies, setReplies] = useState<Answer[]>([])
  const { isLoading, error, data } = useQuery('replyData', () =>
  fetch(`http://localhost:3004/questions/${params.question}`).then(res =>
    res.json()).then(data => {
      // modifyReplies(data.replies)
      // console.log(data.replies)
      setReplies(data.replies)
      // console.log(replies)
      return data
    })
  
  )
  
 
  // console.log(params.question)
  return <div>
    <Topbar title='جزییات سوال'/>
        <div className="w-[100%] flex justify-center">
        <QuestionCard resCount={replies.length} question={data} isDeatailed={true} type='QType' />


        </div>
        <ReplyList question={data}  data={replies} id={params.question} />
       <div className="flex justify-center">
       <AddResponse  question={data} replies={replies} id={params.question} addFn={setReplies}   />

       </div>
      
       

       
       

  </div>
}