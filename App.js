import React from 'react'
import MainNavi from './src/navigation/mainNavi'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return(
    <NavigationContainer>
      <MainNavi/>
    </NavigationContainer>
  )
}

export default App;
