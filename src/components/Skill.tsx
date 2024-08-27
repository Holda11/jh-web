import React from 'react'
import style from '@/style/skill.module.css'
import Image from 'next/image'

const Skill = () => {
    interface Card{
        id?: number,
        name?: string,
        src?: string
    }
    const Data = [
        {
            key: 1,
            name: 'html',
            src: '/html.webp'
        },
        {
            key: 2,
            name: 'css',
            src: '/css.png'
        },
        {
            key: 3,
            name: 'javascript',
            src: '/js.png'
        },
        {
            key: 4,
            name: 'Bootstrap',
            src: '/bootstrap.png'
        },
        {
            key: 5,
            name: 'TailwindCSS',
            src: '/tailwind.png'
        },
        {
            key: 6,
            name: 'SASS',
            src: '/scss.png'
        },
        {
            key: 7,
            name: 'React.js',
            src: '/reactjs.png'
        },
        {
            key: 8,
            name: 'Angular',
            src: '/angular.png'
        },
        {
            key: 9,
            name: 'Vue',
            src: '/vue.png'
        },
        {
            key: 10,
            name: 'next.js',
            src: '/next.png'
        },
        {
            key: 11,
            name: 'node.js',
            src: '/node.png'
        },
        {
            key: 12,
            name: 'express',
            src: '/express.png'
        },
        {
            key: 13,
            name: 'C#',
            src: '/csharp.png'
        },
        {
            key: 14,
            name: 'Asp.Net',
            src: '/dotnet.png'
        },
        {
            key: 15,
            name: 'PostgreSQL',
            src: '/postgresql.png'
        },
        {
            key: 16,
            name: 'MS SQL',
            src: '/mssql.png'
        },
        {
            key: 17,
            name: 'MongoDB',
            src: '/mongodb.png'
        },
        {
            key: 18,
            name: 'Git',
            src: '/git.png'
        },
        {
            key: 19,
            name: 'Windows Admin',
            src: '/windows.png'
        },
        {
            key: 20,
            name: 'Switch configuration',
            src: '/switch.png'
        },
        {
            key: 21,
            name: 'AP configuration',
            src: '/accesspoint.png'
        },
        {
            key: 22,
            name: 'CMD',
            src: '/cmd.png'
        },
    ]
    const Card =({name, src}: Card)=>{
        return(
            <div className={style['Card']}>
                <div className={style['Card_Container_Image']}>
                    <img className={style['Card_Image']} src={src} alt={src}/>
                </div>
                <div className={style['Card_Container_Text']}>
                    <strong>
                        {name?.toUpperCase()}
                    </strong>
                </div>
            </div>
        )
    }
  return (
    <section className={style['Skill']}>
        <div className={style['Center']}>
            <h3>Skills🛠️</h3>
            <p>Here you can see the technologies I have already worked with in the past.</p>
            <p>Also feel free to download my <a href="/JanHolda_Cv.pdf" download={'JanHolda_CV'}>CV</a>😊</p>
        </div>
        <div className={style['Wrap']}>
        <div className={style['Skill_Wrap']}>
            {Data.map((item)=> <><Card id={item.key} name={item.name} src={item.src}/></>)}
        </div>
        </div>
    </section>
  )
}

export default Skill