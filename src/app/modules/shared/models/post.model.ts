import { Comment } from './comment.model';

export interface Post {
  id?: number;
  title: string;
  body: string;
  userId?: number;
  comments?: Comment[];
}
