import { View, Text, Image, StyleSheet } from 'react-native';


export default function CardProduct({ nome,desc,preco, image }) {
  return (
        <View style={styles.card}>
          <View>
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, resizeMode: 'cover' }}
            />
          </View>
          <View>
            <Text style={styles.nome}>{nome}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" >{desc}</Text>
            <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
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
