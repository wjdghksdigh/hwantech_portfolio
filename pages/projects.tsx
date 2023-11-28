// Projects.tsx

// layout
import Content from "@/components/layout/content";

//component
import ProjectCard
 from "@/components/projects/projectCard";
// import { TOKEN, DATABASE_ID } from "@/config";
// import { GetStaticProps, GetStaticPropsResult } from 'next';
// import { NotionRequest, NotionResponse, NotionProps } from "@/type/notion";
// import { useState, useEffect } from 'react';

export default function Projects() {
  return (
    <Content id="Projects">
      <div className="min-h-screen px-[200px] py-[200px]">
        <ProjectCard />
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
