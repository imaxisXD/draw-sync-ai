import Background from '@/components/background'
import DrawBoard from '@/components/drawboard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <div className='z-10'>

        <DrawBoard height={600} width={600} />
      </div>


      <Background />
    </main >
  )
}
