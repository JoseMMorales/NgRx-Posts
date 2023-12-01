import { commentMocked, commentResponseMocked } from './comment.mock';

export const postMocked = {
  id: 1,
  title: 'test',
  body: 'test',
  userId: 1,
  comments: [],
};

export const postSecondMocked = {
  id: 1,
  title: 'test',
  body: 'test',
  userId: 2,
  comments: [],
};

export const postThirdMocked = {
  id: 1,
  title: 'test',
  body: 'test',
  userId: 3,
  comments: [],
};

export const postResponseMocked = [postMocked, postSecondMocked];

export const postResponseReverseMocked = [postSecondMocked, postMocked];

export const postWithCommentMocked = {
  ...postMocked,
  comments: commentResponseMocked,
};
