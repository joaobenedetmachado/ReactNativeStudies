import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CarrinhoProvider } from './carrinhoProvider';
import { auth } from './firebaseConfig';

import AddProductScreen from './screens/AddProductScreen';
import Carrinho from './screens/Carrinho';
import EditProductScreen from './screens/EditProductScreen';
import LoginScreen from './screens/LoginScreen';
import ProductListScreen from './screens/ProductListScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <CarrinhoProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#007AFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          {user ? (
            <>
              <Stack.Screen
                name="Produtos"
                initialParams={{ email: user.email }}
                component={ProductListScreen}
                options={{
                  headerRight: () => (
                    <View style={styles.headerRight}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Carrinho')}
                        style={styles.cartButton}
                      >
                        <Text style={styles.cartText}>🛒</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => auth.signOut()}
                        style={styles.logoutButton}
                      >
                        <Text> {user.email} </Text>
                        <Text style={styles.logoutText}>Logout</Text>
                      </TouchableOpacity>
                    </View>
                  ),
                }}
              />
              <Stack.Screen name="AddProduct" component={AddProductScreen} initialParams={{ email: user.email }} />
              <Stack.Screen name="EditProduct" component={EditProductScreen} initialParams={{ email: user.email }} />
              <Stack.Screen name="Carrinho" component={Carrinho} />
            </>
          ) : (
            // caso nao esteja autenticado
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </CarrinhoProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoutButton: {
    marginRight: 15,
    padding: 8,
  },
  logoutText: {
    color: '#007AFF',
    fontSize: 16,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    marginRight: 15,
    padding: 8,
  },
  cartText: {
    fontSize: 20,
  },
}); 