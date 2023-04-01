import {theme} from '@src/constants';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function Navbar({title}: {title: string}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lavenderPurple,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  title: {
    color: theme.colors.white,
    textAlign: 'center',
    fontFamily: theme.fonts.bold,
    fontSize: 22,
    textTransform: 'uppercase',
  },
});

export {Navbar};
