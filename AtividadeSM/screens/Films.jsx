import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions, ScrollView } from 'react-native';
import CardMovie from '../components/CardMovie';
const { height, width } = Dimensions.get('window');
import Loading from '../components/Loading';
import Page from '../components/Page';

export default function Films() {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const pesquisarFilme = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}&language=pt-BR`,
        {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmY0MDcyYjc1MDY0YmRmMTVlYTg1OGRlNDJiZGEyMyIsIm5iZiI6MTcxNjY2NDE5My4zMTgsInN1YiI6IjY2NTIzNzgxZTgzMmI3OTU0NzU1YjE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEyZ1V2Z2GEOuc93ug53YQlZZMR8tGwJ7SRjlcyZ1Ko'
          }
        }
      );
      const data = await response.json();
      setMovies(data.results || []);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log('Erro:', error);
    }
  }

  return (
    <ScrollView>
    <View style={styles.container}>
    {loading === true ? (
  <Loading/>
    ) : null}
      <View style={styles.header}>
        <Text style={styles.headerText}>Busca de Filmes</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Digite o nome do filme..."
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button 
          title="Buscar"
          onPress={pesquisarFilme}
          color="#1E88E5"
        />
      </View>

      {
  movies.length === 0 ? ( 
    <Text style={{ fontSize: 20, textAlign: 'center' }}>
      Nenhum filme encontrado
    </Text>
  ) : ( 
    movies.map((movie) => (
      <CardMovie 
        key={movie.id} 
        title={movie.title} 
        image={movie.poster_path ? movie.poster_path : ''} 
      />
    ))
  )
}

      <StatusBar style="auto" />
    </View>
    <Page/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1, 
    backgroundColor: '#f5f5f5',
  },
  container: {
    backgroundColor: '#f5f5f5',
    paddingTop: 35,
    minHeight: height,
    width: width,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#1E88E5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    elevation: 2,
  },
  buttonContainer: {
    marginLeft: 10,
    width: '20%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  }
});
