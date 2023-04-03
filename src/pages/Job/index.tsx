import {NavigationProp, RouteProp} from '@react-navigation/native';
import {theme} from '@src/constants';
import {Job} from '@src/types';
import {timeAgo} from '@src/utils';
import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet} from 'react-native';
import {ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

function JobPage({route}: {route: RouteProp<{Job: {job: Job}}>}) {
  const job = route.params.job;

  const handlePress = useCallback(() => {
    try {
      Linking.openURL(job.redirect_url);
    } catch (error) {}
  }, [URL]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <View style={styles.headerList}>
          <Text style={styles.headerList_text}>
            {job.company?.display_name}
          </Text>
          <Icon name="dot-fill" />
          <Text style={styles.headerList_text}>{`${parseInt(
            String(job.salary_min),
          )}$ /year`}</Text>
          <Icon name="dot-fill" />
          <Text style={styles.headerList_text}>{timeAgo(job.created)}</Text>
        </View>
      </View>
      <View style={{marginBottom: 16}}>
        <Text style={styles.jobDescriptionTitle}>Job Description</Text>
        <Text style={styles.jobDescription}>{job.description}</Text>
      </View>
      <Button title="Apply" onPress={handlePress} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: theme.colors.whisperWhite,
    paddingTop: 25,
    paddingBottom: 16,
  },
  jobTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    textAlign: 'center',
  },
  headerList: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  headerList_text: {
    fontFamily: theme.fonts.regular,
  },
  jobDescriptionTitle: {
    fontFamily: theme.fonts.bold,
    marginTop: 16,
    marginBottom: 8,
  },
  jobDescription: {
    fontFamily: theme.fonts.regular,
  },
});

export {JobPage};
