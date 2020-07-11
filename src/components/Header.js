import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => (
    <View style={estilo.conteiner}>
        <Text style={estilo.texto}>
            {props.titulo}
        </Text>
    </View>
);

export default Header;

const estilo = StyleSheet.create({
    conteiner: {
        marginTop: 25,
        backgroundColor: '#6ca2f7',
        alignItems: 'center',
    },
    texto: {
        fontSize: 50,
        color: '#fff',
    }
})