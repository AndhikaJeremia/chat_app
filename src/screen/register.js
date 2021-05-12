import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Input, Button, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'


const RegisterScreen = ({navigation}) => {
    const [securePass, setSecurePass] = React.useState(true)
    const [securePass2, setSecurePass2] = React.useState(true)

    const backToLogin = () => {
        navigation.navigate('Login')
    }

    return(
        <View>
            <Header
                centerComponent={{ text: 'REGISTER', style: { fontSize: 24, fontWeight: 'bold', color: 'white' }}}
                leftComponent={<Icon name='chevron-left' size={24} color='white' style={{paddingLeft: 10}} onPress={backToLogin} />}
                backgroundColor='black' />
            <View style={{ padding: 30 }}>
                <Input
                    placeholder='Username'
                    leftIcon={{ type: 'font-awesome-5', name: 'user', solid: true }}
                />
                <Input
                    placeholder='Email'
                    leftIcon={{ type: 'font-awesome-5', name: 'envelope', solid: true }}
                />
                <Input
                    placeholder='Password'
                    leftIcon={securePass ? <Icon name='lock' size={24} onPress={() => setSecurePass(false)} /> : <Icon name='unlock' size={24} onPress={() => setSecurePass(true)} />}
                    secureTextEntry={securePass}
                />
                <Input
                    placeholder='Confirm Password'
                    leftIcon={securePass2 ? <Icon name='lock' size={24} onPress={() => setSecurePass2(false)} /> : <Icon name='unlock' size={24} onPress={() => setSecurePass2(true)} />}
                    secureTextEntry={securePass2}
                />
                <Button title='Register' buttonStyle={{ backgroundColor: 'black', borderRadius: 10 }} />
            </View>
        </View>
    )
}

export default RegisterScreen