import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar';
import MainLayout from '@/components/MainLayout';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className = "main_container w-screen h-screen flex flex-grow flex-col justify-center items-center ">
        <Navbar />
        <MainLayout />
      </div>
      {/* <p className = "font-bold text-main_primary">Hello world</p> */}
    </>
  )
}
