import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
export default function Home() {
  return (
    <>
     <Navbar/>
     <Products/>
    </>
  )
}
