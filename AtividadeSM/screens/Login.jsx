import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigation = useNavigation();

    const ChangeToPage = () => {
        if (email && senha) {  
            navigation.navigate('Page');
        } else {
            alert('Por favor, preencha email e senha');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#252525' }}>

            <Image 
                style={{ width: 150, height: 150, marginBottom: 80 }} 
                source={{ uri: "https://seeklogo.com/images/T/top-fit-academia-logo-2E965040AC-seeklogo.com.png" }} 
            />

            <View style={{ width: '80%' }}>
                <Text style={{ color: '#fff' }}>Email</Text>
                <TextInput
                    placeholder='Seu melhor email'
                    style={{ backgroundColor: '#fff', marginBottom: 10, padding: 10, borderRadius: 5 }}
                    onChangeText={setEmail}
                    value={email}
                />
                <Text style={{ color: '#fff' }}>Senha</Text>
                <TextInput
                    placeholder='Senha'
                    style={{ backgroundColor: '#fff', marginBottom: 10, padding: 10, borderRadius: 5 }}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry
                />
                <Button title="Entrar" onPress={ChangeToPage} />
            </View>

        </View>
    );
};

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