import * as React from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Login({SetUsername, logged, setLog}) {
    const [userData, setUserData] = React.useState('')
    return (
        <View style={styles.MainView}>
            <Text style={styles.TitleText}>Give us a username to get started</Text>
            <TextInput placeholder='Your Name' style = {styles.InputStyle}
            value = {userData}
            onChangeText = {userData => {setUserData(userData)}}/>
            <TouchableOpacity style = {styles.Opas}
            onPress = {() => {
                if (userData !== "") {
                    setLog(true);
                    SetUsername(userData);
                }else {
                    alert('Give a username!')
                }
            }}>
                <Text style = {styles.ButtonText} >Lets Go</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    MainView: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,

    },
    TitleText: {
        fontSize: 50
    },
    InputStyle: {
        padding: 10,
        fontSize: 25,
        margin: 40,
        borderColor: "red",
        borderWidth: 6,
        borderRadius : 20,
        caretHidden:true
    },
    Opas : {
        backgroundColor : "red",
        alignItems : "center",
        paddingHorizontal : 20,
        borderRadius : 10
      },
      ButtonText : {
        fontWeight : 'bold',
        margin : 10,
        fontSize : 20
      }
})