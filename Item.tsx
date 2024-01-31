import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 480,
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

interface ItemProps {
  title: string;
}
export default function Item(props: ItemProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
}
