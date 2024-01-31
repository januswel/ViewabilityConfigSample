import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import Item, {ItemProps} from './Item';
import {useOnViewedItem} from './useOnViewedItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DATA: ItemProps[] = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
export default function App(): React.JSX.Element {
  const onViewConfigurations = useOnViewedItem<ItemProps>(token => {
    console.log('viewed', token);
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item id={item.id} />}
        viewabilityConfigCallbackPairs={onViewConfigurations}
      />
    </SafeAreaView>
  );
}
