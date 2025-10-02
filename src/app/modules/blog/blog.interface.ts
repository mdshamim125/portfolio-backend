export interface IBlog {
  id: string;
  title: string;
  content: string;
  author: string;
  category?: string;
  tags?: string[];
  thumbnail?: string; 
  createdAt: Date;
  updatedAt: Date;
}
