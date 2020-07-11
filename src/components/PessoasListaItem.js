import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { primeiraLetraMaiuscula } from '../util';

const PessoasListaItem = props => {

    const {pessoa, navegarParaDetalhes} = props;
    const { first, last } = pessoa.name;
    return (
        <TouchableOpacity onPress={() => {
            navegarParaDetalhes({ pessoa });
        } }>
            <View style={estilos.linha}>
                <Image style={estilos.avatar} source={{uri: pessoa.picture.thumbnail}} />
                <Text style={estilos.linhaText}>
                    {   
                        `${
                            primeiraLetraMaiuscula(first)
                        } ${
                            primeiraLetraMaiuscula(last)
                        }`
                    }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    linha: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
    },
    linhaText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50,
    }
})

export default PessoasListaItem;