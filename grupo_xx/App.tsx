import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { TestComponent } from './src/components/TestComponent'
import { ScreenTest } from './src/screens/ScreenTest'

export const App = () => {
  return (
    <View>
      <TestComponent />
      <ScreenTest />
    </View>
  )
}
