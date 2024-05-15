import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getNewPosts, getPhotos, getPosts} from '../../apiManager/ApiManager';
import {RootState} from '../../store/configureStore';
import {
  addNewPosts,
  addPhotos,
  addPosts,
  removeHomeData,
  showLoader,
} from '../../store/reducers/home';
import {NewPostData, PhotosData, PostData} from '../../types/types';
import {ToastType, showMessage} from '../../utility/utils';
import {Strings} from '../../utility/string';

export const useHomeViewModel = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state: RootState) => state.home);
  const [page, setPageNum] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(false);

  useEffect(() => {
    fetchInitial();
  }, []);

  const fetchInitial = () => {
    dispatch(showLoader(true));
    dispatch(removeHomeData());
    fetchPosts();
    fetchPhotos();
    setPageNum(1);
    fetchNewPost(1, false);
  };

  const fetchPosts = () => {
    getPosts(
      (posts: PostData) => {
        dispatch(showLoader(false));
        if (posts) {
          dispatch(addPosts(posts));
        }
      },
      (err: any) => {
        dispatch(showLoader(false));
        console.log('Get Posts Err : ', JSON.stringify(err));
      },
    );
  };

  const fetchPhotos = () => {
    getPhotos(
      (photos: PhotosData) => {
        dispatch(showLoader(false));
        if (photos) {
          dispatch(addPhotos(photos));
        }
      },
      (err: any) => {
        dispatch(showLoader(false));
        console.log('Get Photos Err : ', JSON.stringify(err));
      },
    );
  };

  const fetchNewPost = (page: number, forPagination: boolean) => {
    getNewPosts(
      {
        page: page,
        limit: 5,
      },
      (postsData: NewPostData) => {
        dispatch(showLoader(false));
        setLoadMore(false);
        showMessage(ToastType.success, Strings.successfullyFetched);

        if (forPagination) {
          const posts = {
            ...postsData,
            data: [...homeData?.newPosts?.data, ...postsData?.data],
          };
          dispatch(addNewPosts(posts));
        } else {
          dispatch(addNewPosts(postsData));
        }
      },
      (err: any) => {
        dispatch(showLoader(false));
        setLoadMore(false);
        showMessage(
          ToastType.error,
          err?.message ?? Strings.somethingWentWrong,
        );
        console.log('Get New Posts Err : ', JSON.stringify(err));
      },
    );
  };

  const onPostEndReached = () => {
    if (
      page + 1 <= (homeData?.newPosts && homeData?.newPosts?.total) &&
      !loadMore
    ) {
      setPageNum(val => val + 1);
      setLoadMore(true);
      fetchNewPost(page + 1, true);
    }
  };

  return {fetchPosts, fetchInitial, onPostEndReached, loadMore};
};
