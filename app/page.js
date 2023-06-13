"use client"
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import styles from './page.module.css'
import { Updock } from 'next/font/google';

export default function Home() {
  // const [ myElementIsVisible, setMyElementIsVisible ] = useState();
  
  // const myRef = useRef()

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];

  //     setMyElementIsVisible(entry.isIntersecting);

  //     //If the element is focusd = TRUE / not Focused = false
  //     console.log('entry', entry);
  //     console.log('entry.isTntersecting', entry.isIntersecting);
  //   });

  //   observer.observe(myRef.current);

  //   //Observing されるElement
  //   console.log('myRef', myRef.current)
  // },[]);

  //react-intersection-observer を使うと！これだけでObserveすることができる！
  //Ref = 発火Point　　　　inView= useState hookのようなもの（true | false）
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();


  return (

    <>
    <header className={styles.header}>
    </header>
      <main className={styles.main}>
       <div className={styles.section1}>
         <h1 ref={myRef} className={styles.heading}>He Hey Hey</h1>
         <p className={styles.p}>{myElementIsVisible ? 'YES FOCUSED' : 'NO'}</p>
       </div>

       <div className={styles.section2}>
         <h2 ref={magicSectionRef} className={styles.h2}>Here is Place to fly rocket!</h2>
         <span className={`${styles.rocket} ${magicSectionIsVisible ? styles.animateRocket : ''}`}>
          🚀
         </span>
       </div>
      </main>
      <footer className={styles.footer}>

      </footer>
    </>
  )
}
