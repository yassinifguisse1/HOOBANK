import styles, { layout } from "../style";
import {apple, bill , google} from '../assets'

const Billing = () => {
  return (
    
    <section id='billing' className={` ${layout.sectionReverse} `}> 
      <div className={` ${layout.sectionImgReverse}  `}>
        <img src={bill} alt="billing" className=' w-[700px] md:w-[800px] lg:w-[700px] relative z-[5] '/>


      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
      </div>

      <div className=' sm:mb-9 md:mb-0  flex-col flex flex-1  items-start justify-center  relative z-[5]'>
        <h2  className={`${styles.heading2} `}>
          Easily control your <br className='hidden md:block' /> 
          billing & invoicing.
         </h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. 
         Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
         </p>

         <div className=' flex space-x-6 mt-5'>
            <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
           <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
         </div>

        {/* gradient start */}
      <div className="absolute z-[3] -right-1/2 top-0 w-[50%] h-[60%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[40%]  -right-1/2 bottom-1 rounded-full pink__gradient" />
      {/* gradient end */}

      </div>


    </section>
  )
}

export default Billing