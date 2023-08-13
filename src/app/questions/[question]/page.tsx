
import { Topbar } from "@/components/Topbar/Topbar"
import { ReplyList } from "@/components/ReplyList/ReplyList"
import { QuestionCard } from "@/components/QuestionCard/QuestionCard"
import { AddResponse } from "@/components/AddResponse/AddResponse"
export default function Page({ params }: { params: { question: string } }) {
  // console.log(params.question)
  return <div>
    <Topbar title='جزییات سوال'/>
        <div className="w-[100%] flex justify-center">
        <QuestionCard isDeatailed={true} type='QType' />


        </div>
       <ReplyList />
       <div className="flex justify-center">
       <AddResponse />

       </div>
       

       
       

  </div>
}