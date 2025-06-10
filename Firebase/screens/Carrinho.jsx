import { ActivityIndicator, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCarrinho } from '../carrinhoProvider';

export default function Carrinho() {
  const { carrinho, removerDoCarrinho, carregandoCarrinho } = useCarrinho();

  if (carregandoCarrinho) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + (parseFloat(item.price) || 0), 0).toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image style={styles.productImage} source={{ uri: item.image }} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>R$ {item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removerDoCarrinho(item.id)}
      >
        <Text style={styles.removeButtonText}>❌</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {carrinho.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyCart}>Seu carrinho está vazio</Text>
          <Text style={styles.emptyCartSubtitle}>Adicione produtos para ver aqui</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={carrinho}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalValue}>R$ {calcularTotal()}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
    ...Platform.select({
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
      default: {
        elevation: 2,
      },
    }),
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  removeButton: {
    padding: 8,
  },
  removeButtonText: {
    fontSize: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyCart: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 8,
  },
  emptyCartSubtitle: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    ...Platform.select({
      web: {
        boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
      },
      default: {
        elevation: 4,
      },
    }),
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});