//layout
import Content from "@/components/layout/content"

//component
import Gallery from "@/components/about/gallery"


export default function About() {
    return(
        <Content id="About">
            <div className="min-h-screen px-[200px] py-[200px]">
                <h1> 자기소개 </h1>
                <Gallery />
            </div>
        </Content>
    )
}