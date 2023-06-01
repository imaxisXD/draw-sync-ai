
import Background from '@/components/background'
import DrawBoard from '@/components/drawboard'


export default function Home() {
  return (
    <main className="z-10 flex min-h-screen flex-col items-center justify-between">
      <DrawBoard />
      <Background />
    </main >
  )
}
