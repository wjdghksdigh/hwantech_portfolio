
import { Inter } from 'next/font/google'

//component
import Layout from '@/components/layout/layout'
import Content from "@/components/layout/content"
import About from './about'
import Projects from './projects'

//component
import Introduce from '@/components/home/introduce'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout  id="Home">
      <Content id="Home">
          <Introduce />
          <About />
          <Projects />

      </Content>
    </Layout>
  )
}