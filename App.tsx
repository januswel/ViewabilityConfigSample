import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import Item from './Item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[{title: 'a'}, {title: 'b'}, {title: 'c'}]}
        renderItem={({item}) => <Item title={item.title} />}
      />
    </SafeAreaView>
  );
}
