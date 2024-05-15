import React from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {NewPostData, PostNew} from '../../types/types';
import {FooterComponent} from '../FooterComponent';
import {PostRenderItem} from './PostRenderItem';
import {styles} from './styles';

type Props = {
  postData: NewPostData;
  onItemClick: (item: PostNew) => void;
  onEndReached: () => void;
  loadMore: boolean;
};

export const PostListNew: React.FC<Props> = props => {
  const PostItem = ({item, index}: ListRenderItemInfo<PostNew>) => {
    return <PostRenderItem postData={item} onItemClick={props?.onItemClick} />;
  };

  return (
    <View
      style={[
        styles.rootView,
        {
          display:
            props?.postData && props?.postData?.data?.length > 0
              ? 'flex'
              : 'none',
        },
      ]}>
      <Text style={styles.txtPost}>New Posts</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props?.postData?.data}
        renderItem={PostItem}
        onEndReachedThreshold={0.3}
        onEndReached={() => props.onEndReached()}
        ListFooterComponent={() => (
          <FooterComponent loading={props?.loadMore} />
        )}
      />
    </View>
  );
};
