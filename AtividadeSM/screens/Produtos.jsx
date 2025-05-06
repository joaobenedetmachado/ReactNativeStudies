import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-web';

export default function Produtos() {
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: 'Plano Mensal',
            preco: 99.90,
            desc: 'Acesso livre à academia por 30 dias, sem fidelidade.'
        },
        {
            id: 2,
            nome: 'Personal Trainer',
            preco: 150.00,
            desc: 'Sessão individual com acompanhamento profissional.'
        },
        {
            id: 3,
            nome: 'Suplemento Whey Protein',
            preco: 120.00,
            desc: 'Pote de 1kg de whey protein concentrado.'
        },
        {
            id: 4,
            nome: 'Avaliação Física',
            preco: 80.00,
            desc: 'Avaliação completa com bioimpedância e medidas corporais.'
        }
    ]);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.desc}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
        </View>
    );


    return (
        <ScrollView>
        <View style={styles.container}>
            <Text>Meus produtos!</Text>
            <FlatList
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.container}
            />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    card: {
        backgroundColor: '#f2f2f2',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12
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