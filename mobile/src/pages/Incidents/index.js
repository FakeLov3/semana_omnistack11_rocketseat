import React from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';

import logoImag from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){
  return(
      <View style={styles.container}>
        <View styles={styles.header}>
          <Image source={logoImag} />
          <Text styles={styles.headerText}>
              Total de <Text style={styles.headerTextBold}>0 casos</Text>
          </Text>
        </View>

        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve um animal.</Text>

        <FlatList 
          style={styles.incidentList}
          data={[1, 2, 3]}
          keyExtractor={incident => String(incident)}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <View Style={styles.incident}>
              <Text styles={styles.incidentProperty}>ONG:</Text>
              <Text styles={styles.incidentValue}>APAD</Text>

              <Text styles={styles.incidentProperty}>CASO</Text>
              <Text styles={styles.incidentValue}>Cadela atropelada</Text>

              <Text styles={styles.incidentProperty}>VALOR:</Text>
              <Text styles={styles.incidentValue}>R$ 120,00</Text>

              <TouchableOpacity 
                  style={styles.detailsButton}
                  onPress={()=>{}}
              >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
  );
}