import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/forgotPassword';
import CreateAccount from '../pages/CreateAccount';
import VerificationCode from '../pages/VerificationCode';
import Timeline from '../pages/Timeline';
import SettingsPage from '../pages/SettingsPage';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="VerificationCode"
                component={VerificationCode}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Timeline"
                component={Timeline}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SettingsPage"
                component={SettingsPage}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>

    )
}