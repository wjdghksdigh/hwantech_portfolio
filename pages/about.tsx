//layout
import Content from "@/components/layout/content"

//component
import Gallery from "@/components/about/gallery"
import Profile from "@/components/about/profile"


export default function About() {
  return(
    <Content id="About">
      <div>
        <Gallery />
        <Profile />
      </div>
    </Content>
  )
}