import * as React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';
import Login from './components/Login';
import MainDJ from './components/MainMixer';

export default function App() {
  const [user, setUser] = React.useState('');
  const [logged, setLogged] = React.useState(false);
  return (
    <View>
      {
        logged ? (
          <View>
            <MainDJ userNm={user}/>
          </View>
        ) : (
          <View>
            <Login 
            setLog={setLogged} 
            logged={logged} 
            SetUsername={setUser} 
            />
          </View>
        )
      }
    </View>
  )
}