import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatUKDate } from '../../utils/helpers';

import { IItem } from '../../@types/item';

const EventCard = ({
  mission_name: missionName,
  flight_number: flightNumber,
  launch_date_utc: launchDate,
  rocket: { rocket_name: rocketName },
}: IItem) => {
  return (
    <View style={styles.card}>
      <Text style={styles.number}>#{flightNumber}</Text>
      <Text style={styles.name}>{missionName}</Text>
      <View>
        <Text style={styles.date}>{formatUKDate(launchDate)}</Text>
        <Text style={styles.rocket}>{rocketName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 4,
    padding: 12,
  },
  number: {
    color: '#545454',
    fontSize: 20,
    fontWeight: '500',
    marginRight: 16,
  },
  name: {
    color: '#545454',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  date: {
    color: '#545454',
    fontSize: 12,
  },
  rocket: {
    color: '#545454',
    fontWeight: '700',
    textAlign: 'right',
  },
});

export default EventCard;
