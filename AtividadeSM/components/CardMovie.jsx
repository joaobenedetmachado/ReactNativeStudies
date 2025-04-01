import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardMovie({ title, image }) {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} 
        style={styles.image} 
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#222',
    borderRadius: 12,
  },
  image: {
    width: 220, 
    height: 330,
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
});
