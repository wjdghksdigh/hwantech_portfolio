import Layout from '@/components/layout'
import { Inter } from 'next/font/google'

//component
import Introduce from '@/components/home/introduce'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Introduce />
    </Layout>
  )
}