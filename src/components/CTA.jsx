import Button from "./Button"
import styles, { layout } from "../style"
const CTA = () => {
  return (
    <section className={`flex flex-col lg:flex-row justify-start lg:items-center items-start lg:space-x-5  mt-16 p-8 sm:p-14 rounded-2xl bg-black-gradient-2 mx-4 lg:mx-44`}>
      <div className={`${layout.sectionInfo} `}>
        <h2  className={`${styles.heading2}  `}>
          Let’s try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[445px] text-dimWhite mb-6`}>
        Everything you need to accept card payments and 
        grow your business anywhere on the planet.
        </p>
      </div>

      <Button className="" />
    </section >
  )
}

export default CTA