import React from 'react';
import {Button, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader';
import {PhotoList} from '../../components/PhotoList';
import {PostList} from '../../components/PostList';
import {PostListNew} from '../../components/PostListNew';
import {RootState} from '../../store/configureStore';
import {style} from './style';
import {useHomeController} from './useHomeController';

export const Home: React.FC = () => {
  const {
    onRefreshClick,
    onPostClick,
    onPhotoClick,
    onNewPostClick,
    onNewPostEndReached,
    onFormClick,
    loadMore,
    onPermissionClick,
  } = useHomeController();

  const homeData = useSelector((state: RootState) => state.home);

  return (
    <ScrollView style={style.container}>
      <Button onPress={onRefreshClick} title="Refresh" />

      <Button onPress={onFormClick} title="Form" />

      <Button onPress={onPermissionClick} title="Permission" />

      <PostList list={homeData?.posts} onItemClick={onPostClick} />

      <PhotoList list={homeData?.photos} onItemClick={onPhotoClick} />

      <PostListNew
        postData={homeData?.newPosts}
        onItemClick={onNewPostClick}
        onEndReached={onNewPostEndReached}
        loadMore={loadMore}
      />

      <Loader loading={homeData?.loader} />
    </ScrollView>
  );
};
