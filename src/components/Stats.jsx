import styles from "../style";
import { stats } from "../constants";


const Stats = () => {
  return (
    <section className={`sm:${styles.flexCenter }   flex-wrap text-start mb-6 flex-col sm:flex-row `} >

      
        {
          stats.map((state, index) =>(
            <div key={index} className={`flex-1   mb-4 sm:mb-0 flex justify-start items-center flex-row m-1`} >
                <h4 className={`font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white  `}>{state.value}</h4> 
                <p className={`font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3 xs:mx-auto sm:ml-10 `}>{state.title}</p>
            </div>
          ))
        }



    </section>
  )
}

export default Stats




