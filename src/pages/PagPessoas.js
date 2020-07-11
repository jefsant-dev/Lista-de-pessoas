import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import axios from 'axios';
import PessoasLista from '../components/PessoasLista';
import ErrorMsg from '../components/ErrorMsg'

export default class PagPessoas extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pessoas: [],
      loading: false,
      error: false
    };
  }

  componentDidMount(){
    this.setState({loading: true});
    axios
      .get('https://randomuser.me/api/?nat=br&results=1500')
      .then( response => {
          const { results } = response.data;
          this.setState({
            pessoas: results,
            loading: false,
          });
      }).catch(error => {
          this.setState({ 
            error: true,
            loading: false
          });
      })
  }

  render() {
    
    return (
      <View style={estilo.conteiner} >
        {
          this.state.loading
            ? <ActivityIndicator size='large' color='#6ca2f7' />
            : this.state.error
              ? <ErrorMsg />
              : <PessoasLista 
                  pessoas={this.state.pessoas}
                  onPressItem={(pagParametros) => {
                    this.props.navigation.navigate('PessoasDetalhes', pagParametros);
                  } } 
                />
        }
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center"
  }
})