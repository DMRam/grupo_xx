import React, { useState } from "react"
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native"


export const TestComponent = () => {

    const [colorTest, setColorTest] = useState<string>("red")

    const funcion = () => {

        setColorTest("blue")
    }


    return (
        <SafeAreaView>
            <Text style={{ ...styles.title, color: colorTest }}>
                Test

                Test
            </Text>
            <Text style={styles.titleII}>
                Test II

                Test II
            </Text>

            <Button onPress={funcion} title="Click me" />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        // flex:1,
        fontSize: 32,
        color: 'red',
        fontWeight: 'bold'
    },
    titleII: {
        // flex:1,
        fontSize: 15,
        color: 'blue',
        fontWeight: 'bold'
    }
})
