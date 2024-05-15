import {useNavigation} from '@react-navigation/native';
import {Photo, Post, PostNew} from '../../types/types';
import {useHomeViewModel} from './useHomeViewModel';
import {ScreenNames} from '../../navigators/ScreenNames';

export const useHomeController = () => {
  const navigation = useNavigation();
  const {fetchPosts, fetchInitial, onPostEndReached, loadMore} =
    useHomeViewModel();

  const onRefreshClick = () => {
    fetchInitial();
  };

  const onGetPostClick = () => {
    fetchPosts();
  };

  const onPostClick = (item: Post) => {};
  const onPhotoClick = (item: Photo) => {};
  const onNewPostClick = (item: PostNew) => {};

  const onFormClick = () => {
    navigation.navigate(ScreenNames.Form);
  };

  const onNewPostEndReached = () => {
    onPostEndReached();
  };

  return {
    onGetPostClick,
    onPostClick,
    onRefreshClick,
    onPhotoClick,
    onNewPostClick,
    onNewPostEndReached,
    loadMore,
    onFormClick,
  };
};
