import { View, Text, Image, StyleSheet } from 'react-native';

function Page() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#252525',
            width: '100%',
        }} >
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 40
            }}>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 30 }}>Arnold Gym</Text>
                <Image style={{ width: 50, height: 50 }} source={{ uri: "https://seeklogo.com/images/T/top-fit-academia-logo-2E965040AC-seeklogo.com.png" }} />
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'end',
                    justifyContent: 'center',
                    padding: 40,
                    gap: 10
                }}>
                <Text style={{
                    color: "#ffffff"
                }}>Minha academia é fudida para pessoas que procuram melhorar seus ganhos </Text>
                <Text style={{
                    color: "#ffffff"
                }}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</Text>
            </View>
            <View style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 20
            }}>
                <Image style={{ width: 150, height: 150 }} source={{ uri: "https://maceioalgovbr.dhost.cloud/uploads/imagens/17-07-23-Academia-Praia-da-Avenida-Prado-SEMESP-Foto-Jonathan-Lins-10.jpg" }} />
                <Image style={{ width: 150, height: 150 }}source={{uri:"https://saude.sesisc.org.br/wp-content/uploads/sites/13/2023/09/Beneficios-de-fazer-academia-Para-sua-saude-e-seu-corpo-1024x683.jpg"}}/>
            </View>
        </View>
    )
}
export default Page;