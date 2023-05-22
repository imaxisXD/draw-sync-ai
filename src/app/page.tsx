import Background from '@/components/background'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <div className='z-10'>
        <div className='w-20 h-screen text-white'> HIII</div>
        <div className='w-20 h-screen text-white'> HIII</div>
        <div className='w-20 h-screen text-white'> HIII</div>
        <div className='w-20 h-screen text-white'> HIII</div>
        <div className='w-20 h-screen text-white'> HIII</div>

      </div>


      <Background />
    </main >
  )
}
