import React from 'react'
import style from '@/style/aboutme.module.css'

const Aboutme = () => {
  return (
    <section>
      <div className={style["AboutMe"]}>
        <div className={style["AboutMe_Container"]}>
            <h3>Hi, my name is Jan Holda ✋</h3>
            <h2 className={style["AboutMe_Heading"]}>I´m an IT enthusiast</h2>
            <p className={style["AboutMe_Desc"]}>
            My love for technology began in my early childhood when I was fascinated by anything related to computers. By the time I started elementary school, I was already building my first computers and optimizing systems for people around me. Even before high school, I had gained basic skills in web development and graphic design. During high school, I honed these skills and expanded my knowledge of computer networks.
            </p>
            <p>
            Today, I focus on web application development and networking.
            </p>
        </div>
        <div className={style["AboutMe_Container"]} style={{ position: 'relative'}}>
            <img className={style["AboutMe_Photo"]} src={'/IMG_2626.jpeg'} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default Aboutme