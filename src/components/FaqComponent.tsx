import { Plus } from 'lucide-react'

const FaqComponent = ({question}: {question: string}) => {
  return <div className="flex items-center justify-between min-w-[610px] h-16 border border-[rgba(0,0,0,0.1)] mt-10 cursor-pointer rounded-[14px] px-[34px] py-[26px] font-abezee text-[20px] leading-9">
    <p className="">{question}</p>
    <Plus color="#EC4007" size={20} strokeWidth={4} className="font-bold"/>
  </div>
}

export default FaqComponent
