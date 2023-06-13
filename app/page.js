"use client"
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const myRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      console.log('entry', entry);
      console.log('entry.isTntersecting', entry.isIntersecting);
    });
    observer.observe(myRef.current);
    console.log('myRef', myRef.current)
  },[]);

  return (
    <main className={styles.main}>
     <h1 ref={myRef} className={styles.heading}>He Hey Hey</h1>
    </main>
  )
}
