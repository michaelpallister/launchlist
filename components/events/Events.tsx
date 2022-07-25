import React, { FC } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useAppContext } from '../../context/AppContext';
import EventCard from '../cards/EventCard';

import { IItem } from '../../@types/item';

const Events: FC = () => {
  const { data } = useAppContext();

  const renderItem: ListRenderItem<IItem> = ({ item }) => (
    <EventCard {...item} />
  );

  return <FlatList data={data} renderItem={renderItem} />;
};

export default Events;
