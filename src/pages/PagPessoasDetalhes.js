import React from 'react';
import { Text, View, Image ,StyleSheet } from 'react-native';

import Linha from '../components/Linha';

export default class PagPessoasDetalhes extends React.Component {
    render() {
        const { pessoa } = this.props.navigation.state.params;
        return (
            <View style={estilo.conteiner}>
                <Image
                    style={estilo.avatar}
                    source={{ uri: pessoa.picture.large }} 
                />
                <View style={estilo.conteinerDetalhes}>
                    <Linha label="Email:" info={pessoa.email} />
                    <Linha label="Cidade:" info={pessoa.location.city} />
                    <Linha label="Estado:" info={pessoa.location.state} />
                    <Linha label="Telefone:" info={pessoa.phone} />
                    <Linha label="Celular:" info={pessoa.cell} />
                    <Linha label="Nacionalidade:" info={pessoa.nat} />
                </View>
            </View>
        );
    }
}

const estilo = StyleSheet.create({
    conteiner: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
    },
    conteinerDetalhes: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1,
    }
})