import * as React from 'react'
import { View, Image, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Audio, Video } from 'expo-av';

export default function MainDJ({ userNm }) {
    const [userName, SetUsername] = React.useState(userNm);
    return (
        <View style={styles.MainView}>
            <Text style={styles.TitleText}>DJ - {userNm}</Text>
            <View style={styles.TableView}>
                <View>
                    <TouchableOpacity style={styles.ButtonMain}
                        onPress={() => {
                            Audio.Sound.createAsync({ uri: require('../assets/AV/drumsSound.wav') }, { shouldPlay: true })
                        }}
                    >
                        <Image source={require('../assets/drum.png')} style={styles.Img} />
                        <Text style={styles.ButtonText}>Drums</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonMain}
                        onPress={() => {
                            Audio.Sound.createAsync({ uri: require('../assets/AV/smooth.mp3') }, { shouldPlay: true })
                        }}
                    >
                        <Image source={require('../assets/musical-note.png')} style={styles.Img} />
                        <Text style={styles.ButtonText}>Smooth</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonMain}
                        onPress={() => {
                            Audio.Sound.createAsync({ uri: require('../assets/AV/jazz.mp3') }, { shouldPlay: true })
                        }}
                    >
                        <Image source={require('../assets/jazz.png')} style={styles.Img} />
                        <Text style={styles.ButtonText}>Sharp</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.ButtonMain}
                        onPress={() => {
                            Audio.Sound.createAsync({ uri: require('../assets/AV/mix1.mp3') }, { shouldPlay: true })
                        }}
                    >
                        <Image source={require('../assets/disk.png')} style={styles.Img} />
                        <Text style={styles.ButtonText}>Sound 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonMain}
                        onPress={() => {
                            Audio.Sound.createAsync({ uri: require('../assets/AV/mix2.mp3') }, { shouldPlay: true })
                        }}
                    >
                        <Image source={require('../assets/disk.png')} style={styles.Img} />
                        <Text style={styles.ButtonText}>Sound 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonMain}
                        onPress={() => {
                            Audio.Sound.createAsync({ uri: require('../assets/AV/mix3.mp3') }, { shouldPlay: true })
                        }}
                    >
                        <Image source={require('../assets/disk.png')} style={styles.Img} />
                        <Text style={styles.ButtonText}>Sound 3</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Img: {
        width: 50,
        height: 50
    },
    ButtonMain: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 20,
        margin: 10,
        flexDirection: 'row',

    },
    ButtonText: {
        fontSize: 25,
        marginLeft: 10
    },
    MainView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    TitleText: {
        fontSize: 30
    },
    TableView: {
        flexDirection: 'row'
    }
})