import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screen/login'
import RegisterScreen from '../screen/register'

const MainNavi = () => {
    const stack = createStackNavigator()
    return(
        <stack.Navigator headerMode={false}>
            <stack.Screen name='Login' component={LoginScreen} />
            <stack.Screen name='Register' component={RegisterScreen} />
        </stack.Navigator>

    )
}

export default MainNavi