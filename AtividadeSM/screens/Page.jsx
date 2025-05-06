import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import CardProduct from '../components/CardProduct';
import { ScrollView } from 'react-native-web';
import { useState } from 'react';

function Page() {
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: 'Plano Mensal',
            preco: 99.90,
            desc: 'Acesso livre à academia por 30 dias, sem fidelidade.',
            link: 'https://img.cdndsgni.com/preview/11808128.jpg'
        },
        {
            id: 2,
            nome: 'Personal Trainer',
            preco: 150.00,
            desc: 'Sessão individual com acompanhamento profissional.',
            link: 'https://agilize.com.br/blog/wp-content/uploads/2024/05/Contabilidade-para-personal-trainer.png'
        },
        {
            id: 3,
            nome: 'Suplemento Whey Protein',
            preco: 120.00,
            desc: 'Pote de 1kg de whey protein concentrado.',
            link: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/gsn/media/uploads/produtos/foto/fpnoowgo/chocolate.png'
        },
        {
            id: 4,
            nome: 'Avaliação Física',
            preco: 80.00,
            desc: 'Avaliação completa com bioimpedância e medidas corporais.',
            link: 'https://marconiribeiro.com.br/wp-content/uploads/2019/07/avaliacao-fisica-ciclismo-marconi-ribeiro-soares.png'
        }])

    const produtosrender = ({ item }) => (
        <CardProduct
            nome={item.nome}
            desc={item.desc}
            preco={item.preco}
            image={item.link}
        />
    );

    return (
        <ScrollView>

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
                }}>Minha academia chamada Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ab reprehenderit totam magnam dolores eligendi illo alias! Praesentium ullam, repellendus explicabo dicta expedita quaerat, esse, vel suscipit enim porro aut é fundada para pessoas que procuram melhorar seus ganhos </Text>
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
                <Image style={{ width: 150, height: 150 }} source={{ uri: "https://saude.sesisc.org.br/wp-content/uploads/sites/13/2023/09/Beneficios-de-fazer-academia-Para-sua-saude-e-seu-corpo-1024x683.jpg" }} />
            </View>

                            <FlatList
                                data={produtos}
                                keyExtractor={item => item.id}
                                renderItem={produtosrender}
                                contentContainerStyle={styles.container}
                            />
        </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        padding: 16
    },
    card: {
        backgroundColor: '#e8e8e8',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        flexDirection: 'row',
        gap: 12,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    preco: {
        marginTop: 8,
        fontWeight: '600',
        color: '#2e8b57'
    }
});
export default Page;