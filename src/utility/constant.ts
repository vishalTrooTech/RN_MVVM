const env_DEV = {
  BASE_URL: 'https://jsonplaceholder.typicode.com',
  BASE_URL1: 'https://dummyapi.io/data/v1',
};

export const env = env_DEV;

export const API_TOKEN = '663e0be71d029093accaf48e';

export const Constants = {
  GET_POSTS: `${env.BASE_URL}/posts`,
  GET_PHOTOS: `${env.BASE_URL}/photos`,
  GET_NEW_POST: `${env.BASE_URL1}/post`,
};
