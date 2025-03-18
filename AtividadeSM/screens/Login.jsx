import {View, TextInput, StyleSheet} from 'react-native'

export default function Login() {
    return (
        <View style={style.container}>
            <h1>Login</h1>
            <TextInput
            placeholder='Email'
            style={style.input}
            />
            <TextInput
            placeholder='Senha'
            style={style.input}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input : {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    container : {
        fontSize: 24,
        fontFamily: 'Arial',
        textAlign: 'center',
        marginBottom: 20,
    }
})