// Projects.tsx

// layout
import Content from "@/components/layout/content";

//component
import ProjectList from "@/components/projects/projectList";

export default function Projects() {
  return (
    <Content id="Projects">
      <div className="min-h-screen lg:px-[200px] lg:py-[100px]">
        <ProjectList />
      </div>
    </Content>
  );
}
