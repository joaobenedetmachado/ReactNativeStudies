import {View, Text, Image, Button, StyleSheet} from 'react-native';

export default function Feed() {
    return (
        <View style={styles.container}>
            <Text>Meu feed!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    }
})