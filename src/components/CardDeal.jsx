import styles, { layout } from "../style";
import {card} from '../assets'
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className={`${layout.section}` }>
      <div className={`${layout.sectionInfo}  `}>
        <h2 className={`${styles.heading2}`}>
        Find a better card deal <br className="hidden md:block" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. 
          Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className=" flex-1 mt-14 md:mt:0">
        <img src={card} alt="card" className="w-[600px] relative z-[5]"/>
          
      </div>

    </section>
  )
}

export default CardDeal