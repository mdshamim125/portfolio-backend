
export interface IProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
