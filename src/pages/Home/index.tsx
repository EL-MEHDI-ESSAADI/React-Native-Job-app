import {useNavigation} from '@react-navigation/native';
import {theme} from '@src/constants';
import {useJobs} from '@src/hooks';
import {Job} from '@src/types';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const DESCRIPTION_LENGTH = 200;

const Card = ({item}: {item: Job}) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('Job', {job: item})}>
      <View style={styles.card_header}>
        <Text style={styles.card_title}>{item.title}</Text>
        <Text style={styles.card_salary}>{`${parseInt(
          String(item.salary_min),
        )}$ /year`}</Text>
      </View>
      <Text style={styles.card_description}>
        {item.description.length > DESCRIPTION_LENGTH
          ? `${item.description.slice(0, DESCRIPTION_LENGTH)}...`
          : item.description}
      </Text>
    </Pressable>
  );
};

const renderItem = ({item}: {item: Job}) => <Card item={item} />;

function Home() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const {error, jobs, loading} = useJobs(query);

  console.log(jobs);

  function onSearch() {
    setQuery(search);
    setSearch('');
  }

  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );

  if (error)
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for jobs"
          value={search}
          onChangeText={setSearch}
        />
        <Pressable style={styles.searchBtn} onPress={onSearch}>
          <Text style={styles.searchBtn_text}>Search</Text>
        </Pressable>
      </View>
      <FlatList
        data={jobs}
        contentContainerStyle={styles.cards}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.whisperWhite,
    flex: 1,
    padding: 16,
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  card: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 10,
    paddingVertical: 16,
    shadowColor: theme.colors.lavenderPurple,
    shadowOffset: {
      width: 2,
      height: 0.073,
    },
    shadowOpacity: 0.2,
  },
  card_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  card_title: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.gunmetalGray,
  },
  card_salary: {
    color: theme.colors.electricPurple,
    fontSize: 18,
    fontFamily: theme.fonts.bold,
  },
  card_description: {
    color: theme.colors.slateGray,
    fontFamily: theme.fonts.regular,
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    flex: 1,
  },
  searchBtn: {
    backgroundColor: theme.colors.electricPurple,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBtn_text: {
    color: 'white',
    fontFamily: theme.fonts.bold,
    fontSize: 17,
  },
});

export {Home};
