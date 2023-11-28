//layout
import Content from "@/components/layout/content"

//component
import Gallery from "@/components/about/gallery"
import Tab from "@/components/about/tab"


export default function About() {
  return(
    <Content id="About">
      <div className="min-h-screen lg:px-[200px] lg:py-[200px]">
        <Gallery />
        <Tab />
      </div>
    </Content>
  )
}