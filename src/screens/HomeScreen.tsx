import React from 'react'
import { Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  
  const { top } = useSafeAreaInsets();
  usePokemonPaginated();

  return (
    <View>
      <Image source={require('../assets/pokebola.png')}
        style = {styles.pokebolaBG}
      />
      <Text style={{
        ...styles.title,
        ...styles.globalMargin,
        top: top + 20
      }}>Pokedex</Text>
    </View>
  )
}
