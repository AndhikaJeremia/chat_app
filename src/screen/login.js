import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Input, Button, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

const LoginScreen = ({navigation}) => {
    const [securePass, setSecurePass] = React.useState(true)
    const [regClick, setRegClick] = React.useState(false)
    const regisBtn = () => {
        setRegClick(true)
        navigation.navigate('Register')
    }
    return (
        <View>
            <Header
                centerComponent={{ text: 'LOGIN', style: { fontSize: 24, fontWeight: 'bold', color: 'white' }}}
                backgroundColor='black' />
            <View style={{ padding: 30 }}>
                <Input
                    placeholder='Username'
                    leftIcon={{ type: 'font-awesome-5', name: 'user', solid: true }}
                />
                <Input
                    placeholder='Password'
                    leftIcon={securePass ? <Icon name='lock' size={24} onPress={() => setSecurePass(false)} /> : <Icon name='unlock' size={24} onPress={() => setSecurePass(true)} />}
                    secureTextEntry={securePass}
                />
                <Button title='Login' buttonStyle={{ backgroundColor: 'black', borderRadius: 10 }} />
                <Text style={{fontSize:20, marginTop:10}}>Doesn't have an Account ? </Text>
                <Pressable onPress={regisBtn}>
                    <Text style={regClick === true ? styles.PressableTextTrue : styles.PressableTextFalse } >Register Here</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PressableTextTrue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    PressableTextFalse: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default LoginScreen