import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

import {Truck} from '../../assets';

const Splash = ({navigation}) => {
  const hanldeLearnMore = () => {
    navigation.navigate('GetStarted');
  };

  return (
    <View style={styles.wrapper}>
      <Truck width={100} />
      <Button title="Learn More" color="#841584" onPress={hanldeLearnMore} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
