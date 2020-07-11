import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PessoasListaItem from './PessoasListaItem'

const PessoasLista = props => {

    const {pessoas, onPressItem} = props;
    /*
    const itens = pessoas.map((pessoa, index) => {
        return (
            <PessoasListaItem 
                key={pessoa.name.first+index}
                pessoa={pessoa}
                navegarParaDetalhes={onPressItem} >
            </PessoasListaItem>
        );
    });
    */
    return (
        
        <FlatList 
            style={estilos.conteiner} 
            data={pessoas} 
            renderItem={({item}) => (
                <PessoasListaItem 
                    pessoa={item}
                    navegarParaDetalhes={onPressItem}
                />
            )}
            keyExtractor={((item, index) => item.name.first+index )}
        />
        /*
        <ScrollView style={estilos.conteiner}>
            {itens}
        </ScrollView>
        */
    );
};

const estilos = StyleSheet.create({
    conteiner: {
        backgroundColor: '#e2f9ff'
    },
})

export default PessoasLista;