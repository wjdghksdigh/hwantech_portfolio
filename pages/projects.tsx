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











// export const getStaticProps: GetStaticProps<NotionProps> = async (): Promise<GetStaticPropsResult<NotionProps>> => {
//   try {
//     const options = {
//       method: 'POST',
//       headers: {
//         accept: 'application/json',
//         'Notion-Version': '2022-06-28',
//         'content-type': 'application/json',
//         Authorization: `Bearer ${TOKEN}`,
//       },
//       body: JSON.stringify({ page_size: 100 }),
//     };

//     const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
//     const projects: NotionResponse = await res.json();

//     console.log('Notion API server Response:', projects);

//     return {
//       props: { projects },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: { projects: { object: 'list', results: [] } }, // Provide a default value for projects
//     };
//   }
// };
