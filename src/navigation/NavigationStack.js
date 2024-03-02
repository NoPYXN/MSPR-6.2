import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/HomeScreen"
import FormulaireAnnonceScreen from "../screens/FormulaireAnnonceScreen"
import AnnonceScreen from "../screens/AnnonceScreen"

const Stack = createNativeStackNavigator()

const config = {
    screens: {
        HomeScreen: "",
        FormulaireAnnonceScreen: "FormulaireAnnonceScreen",
    },
}

const linking = {
    prefixes: ["http://localhost:19006"],
    config,
}

const NavigationStack = () => {
    return (
        // <NavigationContainer>
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="HomeScreen"
                    component={HomeScreen}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="FormulaireAnnonceScreen"
                    component={FormulaireAnnonceScreen}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="AnnonceScreen"
                    component={AnnonceScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack
