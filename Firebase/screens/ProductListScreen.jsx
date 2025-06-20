import { useRoute } from '@react-navigation/native';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCarrinho } from '../carrinhoProvider';
import { db } from '../firebaseConfig';

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const route = useRoute();
  const { email } = route.params;
  const { adicionarAoCarrinho, carrinho } = useCarrinho();

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0' + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }


  const fetchProducts = async () => {
    try {
      const q = query(
        collection(db, 'products'),
        where('email', '==', email)
      );

      const querySnapshot = await getDocs(q);
      const productList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productList);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };


  useEffect(() => {
    if (email) {
      fetchProducts();
    }
  }, [email]);


  const handleDelete = async (productId) => {
    try {
      await deleteDoc(doc(db, 'products', productId));
      fetchProducts();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <View style={styles.productInfo}>
        <Image style={styles.imageProduct} source={{ uri: item.image }} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.description}</Text>
        <Text style={styles.productPrice}>R$ {item.price}</Text>
        <Text style={styles.productCreatedAt}>{dataAtualFormatada(item.createdAt)}</Text>
      </View>
      <View style={styles.productActions}>
        <TouchableOpacity
          style={[styles.button, styles.cartButton]}
          onPress={() => {
            adicionarAoCarrinho(item);
            Alert.alert('Sucesso', 'Produto adicionado ao carrinho!');
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => navigation.navigate('EditProduct', { product: item })}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => handleDelete(item.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg></Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddProduct')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonTextAdd}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cartHeaderButton}
          onPress={() => navigation.navigate('Carrinho')}
          activeOpacity={0.7}
        >
          <Text style={styles.cartHeaderText}>🛒</Text>
          {carrinho.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{carrinho.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    maxWidth: 50,
    maxHeight: 50,
    ...Platform.select({
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
      default: {
        elevation: 2,
      },
    }),
  },
  buttonTextAdd: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 12,
    ...Platform.select({
      web: {
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      },
      default: {
        elevation: 1,
      },
    }),
  },
  imageProduct: {
    height: 200,
    width: 200,
    marginRight: 20,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#ddd',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
  productActions: {
    flexDirection: 'column',
    gap: 12,
  },
  button: {
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
    ...Platform.select({
      web: {
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
      },
      default: {
        elevation: 1,
      },
    }),
  },
  editButton: {
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    backgroundColor: '#f44336',
  },
  productCreatedAt: {
    fontStyle: "italic",
    color: "#ddd5d4",
  },
  cartButton: {
    backgroundColor: '#FFA500',
  },
  cartHeaderButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    maxWidth: 50,
    maxHeight: 50,
    position: 'relative',
    ...Platform.select({
      web: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
      default: {
        elevation: 2,
      },
    }),
  },
  cartHeaderText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
}); 