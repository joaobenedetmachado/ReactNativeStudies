import { View, Text, Image, StyleSheet } from 'react-native';

function Page() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#f5f5f5',
        }} >
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text>Minha Página Lorem ipsum dolor </Text>
                <Image source={require('../assets/download.png')} />
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'end',
                    justifyContent: 'center',
                }}>
                <Text>Minha Página Lorem ipsum dolor </Text>
            </View>
            <View style={{
                flex: 1,
            }}>
                <Image source={require('../assets/download.png')} />

            </View>
        </View>
    )
}
export default Page;