import {quotes } from '../assets'
import { feedback } from '../constants'
import styles from '../style'

const FeadbackCard = () => {
  return (
    <div className="flex justify-between items-start flex- flex-wrap ">
    {
      feedback.map((feedback)=>(
        <div key={feedback.id} className=" grid feedback-card px-10 py-12 rounded-[20px] max-w-[370px] min-h-96 mt-10md:mr-10 sm:mr-5 mr-0 my-5 cursor-pointer " >
         
          <img src={quotes} alt="quote icon" className="w-[48px] h-[48px] inline-block mb-9 object-contain"/>
          <p className={`${styles.paragraph}  max-w-[290px] mb-6 `}>{feedback.content}</p>

          <div className="flex flex-1 flex-row justify-start items-center gap-x-9 w-[100%] ">
            <img src={feedback.img} alt="" className='w-[48px] h-[48px] rounded-full'/>
            <div className="flex flex-col">
               <h6 className='font-poppins font-normal text-[20px] text-white'>{feedback.name}</h6>
               <p className='text-dimWhite text-[16px] font-normal	 font-poppins opacity-[50%]'>{feedback.title}</p>
             </div>
             
          </div>
                 
        </div>
        
      ))

    }

  </div>
  
  )
}

export default FeadbackCard