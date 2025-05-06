import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-web';
import CardProduct from '../components/CardProduct'

export default function Produtos() {
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
        },
        {
            id: 5,
            nome: 'Plano Trimestral',
            preco: 269.90,
            desc: 'Acesso à academia por 90 dias com desconto promocional.',
            link: 'https://img.cdndsgni.com/preview/11808128.jpg'
        },
        {
            id: 6,
            nome: 'Plano Anual',
            preco: 899.90,
            desc: 'Acesso livre à academia por 12 meses com benefícios exclusivos.',
            link: 'https://img.cdndsgni.com/preview/11808128.jpg'
        },
        {
            id: 7,
            nome: 'Suplemento Creatina',
            preco: 90.00,
            desc: 'Pote de 300g de creatina monohidratada.',
            link: 'https://cdn.awsli.com.br/2500x2500/49/49309/produto/231442297/creatina-i27guiin0r.png'
        },
        {
            id: 8,
            nome: 'Aula de Yoga',
            preco: 50.00,
            desc: 'Sessão avulsa de yoga com instrutor especializado.',
            link: 'https://image.tuasaude.com/media/article/xl/du/beneficios-do-yoga_22472.jpg?width=686&height=487'
        },
        {
            id: 9,
            nome: 'Massagem Desportiva',
            preco: 100.00,
            desc: 'Sessão de 45 minutos para recuperação muscular.',
            link: 'https://laboro.edu.br/wp-content/uploads/2021/05/Massagem-relaxante.jpg'
        },
        {
            id: 10,
            nome: 'Consultoria Nutricional',
            preco: 130.00,
            desc: 'Consulta com nutricionista focada em performance esportiva.',
            link: 'https://cdn2.hubspot.net/hubfs/2973708/consultoria%20empresarial%20curso%20de%20administracao.jpg'
        }

    ]);
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
            <View style={styles.container}>
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