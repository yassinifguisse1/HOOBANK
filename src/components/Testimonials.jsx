import styles, { layout } from "../style";
import FeadbackCard from "./FeadbackCard";


const Testimonials = () => {
  return (
    <section id="product" className='flex flex-col '>

      <div className={`${layout.section} md:items-center items-start `}>
        <h2 className={`${styles.heading2}  max-w-[780px] `}>
        What people are <br className='hidden md:block' /> saying about us?
        </h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-3 md:mt-0`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>


     <FeadbackCard />

    </section>
  )
}
export default  Testimonials;