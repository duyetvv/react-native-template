import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { DrawerItems, SafeAreaView } from 'react-navigation';


const DrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
  },
});

export default DrawerContentComponent;