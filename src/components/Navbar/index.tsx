import {useNavigation} from '@react-navigation/native';
import {theme} from '@src/constants';
import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Navbar({
  title,
  withBack = false,
}: {
  title: string;
  withBack?: boolean;
}) {
  const goBack = useNavigation().goBack;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {withBack && (
          <Pressable style={styles.backBtn} onPress={goBack}>
            <Icon name="arrow-back-circle-sharp" size={25} color="white" />
          </Pressable>
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    color: theme.colors.white,
    textAlign: 'center',
    fontFamily: theme.fonts.bold,
    fontSize: 22,
    textTransform: 'uppercase',
  },
  backBtn: {
    position: 'absolute',
    left: 16,
  },
});

export {Navbar};
