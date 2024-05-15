import {createSlice} from '@reduxjs/toolkit';
import {NewPostData, Photo, Post} from '../../../types/types';

type HomeState = {
  posts: Post[];
  photos: Photo[];
  loader: boolean;
  newPosts: NewPostData | undefined;
};

const initialState: HomeState = {
  posts: [],
  photos: [],
  loader: false,
  newPosts: undefined,
};

type AddPostsAction = {
  payload: Post[];
  type?: string;
};

type AddNewPostsAction = {
  payload: NewPostData;
  type?: string;
};

type AddPhotoAction = {
  payload: Photo[];
  type?: string;
};

type ShowLoaderAction = {
  payload: boolean;
  type?: string;
};

export const HomeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    addPosts(state: HomeState, action: AddPostsAction) {
      state.posts = action?.payload;
    },
    addPhotos(state: HomeState, action: AddPhotoAction) {
      state.photos = action?.payload;
    },
    addNewPosts(state: HomeState, action: AddNewPostsAction) {
      state.newPosts = action?.payload;
    },
    showLoader(state: HomeState, action: ShowLoaderAction) {
      state.loader = action?.payload;
    },
    removeHomeData(state: HomeState) {
      state.posts = [];
      state.photos = [];
      state.newPosts = undefined;
    },
    clearHomeData(state: HomeState) {
      state.posts = [];
      state.photos = [];
      state.newPosts = undefined;
      state.loader = false;
    },
  },
});

export const {
  clearHomeData,
  addPosts,
  addPhotos,
  showLoader,
  removeHomeData,
  addNewPosts,
} = HomeSlice.actions;
export const homeReducer = HomeSlice.reducer;
