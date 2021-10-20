import React, { useState, useEffect } from 'react';
import SkillCard from '../components/SkillCard';
import Button from '../components/Button';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from 'react-native';


export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [grettings, setGrettings] = useState(['']);

  function handleAddNewSkill() {
    setMySkills(oldSate => [...oldSate, newSkill])

  }

  useEffect(() => {
    const currentHour = new Date().getHours();    
    if ( currentHour < 12 ){
      setGrettings('Good morning');
    }
    else if (currentHour >= 12 && currentHour < 18){
      setGrettings('Good afternoon');
    }
    else {
      setGrettings('Good night');
    }
  }, [])

  return (
    <>
      <View 
        style={styles.container}>
        <Text 
          style={styles.title}>
          Welcome, Juan Campos
        </Text>

        <Text style={styles.grettings}>
          { grettings }
        </Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
        </Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <SkillCard skill={item} />
          )}
        />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39333d',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    borderRadius: 7
  },
  grettings: {
    color: '#FFF'
  }
})


