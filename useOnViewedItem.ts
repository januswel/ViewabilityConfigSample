import React from 'react';
import type {ViewToken as RNViewToken} from 'react-native';

export type ViewToken<$Item> = Omit<RNViewToken, 'item'> & {item: $Item};
export type OnViewed<$Item> = (token: ViewToken<$Item>) => void;

export function useOnViewedItem<$Item>(onViewed: OnViewed<$Item>) {
  const viewedItemsRef = React.useRef<Set<string>>(new Set());
  const onViewableItemsChanged = React.useCallback(
    ({changed}: {changed: ViewToken<$Item>[]}) => {
      const viewedItems = viewedItemsRef.current;
      changed
        .filter(item => item.isViewable && !viewedItems.has(item.key))
        .forEach(item => {
          onViewed(item);
          viewedItems.add(item.key);
        });
    },
    [onViewed],
  );

  return [
    {
      onViewableItemsChanged,
      viewabilityConfig: {
        itemVisiblePercentThreshold: 50,
        minimumViewTime: 2000,
      },
    },
  ];
}
