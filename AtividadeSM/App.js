import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Page from "./screens/Page";
import Films from './screens/Films';
import Feed from "./screens/Feed";
import Counter from './screens/Counter';
import Produtos from './screens/Produtos';
import AntDesign from '@expo/vector-icons/AntDesign';



//importar os ngc, chamar como uma funcao, do import la de cima

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() { //inves de chamar uma pagina, ele chama uma funcao que contem as paginas, porem elas tem o tabnav
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown: false,
          headerStyle: {
            headerBackground: "#252525"
          }
        }
      }
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Page" component={TabNavigator} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Page'
    screenOptions={{
      headerStyle: {
        backgroundColor: "#252525",
      },
      headerTintColor: "#fff"
    }}>
      <Tab.Screen name="Page"
      
        component={Page}
        options={
          {
            tabBarIcon: () => <AntDesign name="home" size={24} color="white" />,
            tabBarStyle: {
              backgroundColor: "#252525"
            }
          }
        }

      />
      <Tab.Screen name="Filmes" component={Films}
        options={
          {
            tabBarIcon: () => <AntDesign name="videocamera" size={24} color="white" />,
            backgroundColor: "#252525",
            tabBarStyle: {
              backgroundColor: "#252525"
            }
          }
        }
      />
      <Tab.Screen name="Feed" component={Feed}
        options={
          {
            tabBarIcon: () => <AntDesign name="laptop" size={24} color="white" />,
            backgroundColor: "#252525",
            tabBarStyle: {
              backgroundColor: "#252525"
            }
          }
        }
      />
            <Tab.Screen name="Counter" component={Counter}
        options={
          {
            tabBarIcon: () => <AntDesign name="pluscircle" size={24} color="white" />,
            backgroundColor: "#252525",
            tabBarStyle: {
              backgroundColor: "#252525"
            }
          }
        }
      />
                  <Tab.Screen name="Produtos" component={Produtos}
        options={
          {
            tabBarIcon: () => <AntDesign name="shop" size={24} color="white" />,
            backgroundColor: "#252525",
            tabBarStyle: {
              backgroundColor: "#252525"
            }
          }
        }
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});