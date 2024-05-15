import axios, {AxiosError, AxiosResponse} from 'axios';
import {API_TOKEN, Constants} from '../utility/constant';
import {NewPostData, PhotosData, PostData} from '../types/types';

export const APIClient = axios.create({
  timeout: 35000,
});

export const getPosts = async (
  successCall: (data: PostData) => void,
  errorCall: (err: any) => void,
) => {
  await APIClient.get(Constants.GET_POSTS)
    .then((response: AxiosResponse) => {
      successCall(response?.data);
    })
    .catch((error: AxiosError) => {
      console.log('ER : ', JSON.stringify(error, null, 2));
      errorCall(error);
    });
};

export const getPhotos = async (
  successCall: (data: PhotosData) => void,
  errorCall: (err: any) => void,
) => {
  await APIClient.get(Constants.GET_PHOTOS)
    .then((response: AxiosResponse) => {
      successCall(response?.data);
    })
    .catch((error: AxiosError) => {
      console.log('ER : ', JSON.stringify(error, null, 2));
      errorCall(error);
    });
};

export const getNewPosts = async (
  body: {page: number; limit: number},
  successCall: (data: NewPostData) => void,
  errorCall: (err: any) => void,
) => {
  const URL =
    Constants.GET_NEW_POST + `?page=${body?.page}&limit=${body?.limit}`;
  await APIClient.get(URL, {headers: {'app-id': API_TOKEN}})
    .then((response: AxiosResponse) => {
      successCall(response?.data);
    })
    .catch((error: AxiosError) => {
      console.log('ER : ', JSON.stringify(error, null, 2));
      errorCall(error);
    });
};
