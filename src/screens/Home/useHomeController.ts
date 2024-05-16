import {useNavigation} from '@react-navigation/native';
import {Photo, Post, PostNew} from '../../types/types';
import {useHomeViewModel} from './useHomeViewModel';
import {ScreenNames} from '../../navigators/ScreenNames';
import {usePermission} from '../../hooks/usePermission';
import {Platform} from 'react-native';
import {PERMISSIONS} from 'react-native-permissions';

export const useHomeController = () => {
  const navigation = useNavigation();
  const {fetchPosts, fetchInitial, onPostEndReached, loadMore} =
    useHomeViewModel();
  const {checkAndRequestPermission} = usePermission();

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

  const onPermissionClick = () => {
    const permission = Platform.select({
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    });
    checkAndRequestPermission(permission);
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
    onPermissionClick,
  };
};
