import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
    return (
        <View style={style.container}>

            <Image style={{ width: 150, height: 150, marginBottom: 80 }} source={{ uri: "https://seeklogo.com/images/T/top-fit-academia-logo-2E965040AC-seeklogo.com.png" }} />

            <View style={{width: '100%'}}>
                <Text style={{ color: '#fff' }}>Email</Text>

                <TextInput
                    placeholder='Seu melhor email'
                    style={style.input}
                />
                <Text style={{ color: '#fff' }}>Senha</Text>
                <TextInput
                    placeholder='Senha'
                    style={style.input}
                />
                                <Button 
                    onPress={() => navigation.navigate('Page')} 
                    title="Entrar" 
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#fff',
        color: '#fff',
        borderRadius: 10,
        marginBottom: 40
    },
    container: {
        flex: 1,
        width: '100%',
        fontSize: 24,
        fontFamily: 'Arial',
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: '#252525',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center'
    }
})