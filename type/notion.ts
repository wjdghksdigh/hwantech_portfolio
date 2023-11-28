
// notion api type
export interface NotionRequest {
  object: string;
  id: string;
//   properties: {
//     Name: {
//       title: Array<{ plain_text: string }>;
//     };
//   };
//   created_time: string;
//   last_edited_time: string;
//   created_by: any; // You might want to define the type for created_by and last_edited_by
//   last_edited_by: any;
//   cover: any; // You might want to define the type for cover
//   icon: any;
//   parent: any; // You might want to define the type for parent
//   archived: boolean;
//   url: string;
//   public_url: string;
};

export interface NotionResponse {
  object: string;
  results: NotionRequest[];
}

export interface NotionProps {
    projects: NotionResponse;
}
