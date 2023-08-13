
import Image from 'next/image'
import { Topbar } from '@/components/Topbar/Topbar'
import { QuestionList } from '@/components/QuestionsList/QuestionList'
export default function Home() {
  return (
    <div>
       <Topbar title='لیست سوالات'/>
       <QuestionList  />


    </div>

   
  )
}
