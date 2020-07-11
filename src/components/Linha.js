import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Linha = ({label = "", info = "-"}) => {
    return (
        <View style={estilo.linha}>
            <Text 
                style={[
                    estilo.celula,
                    estilo.label,
                    label.length > 8 ? estilo.longLabel : null
                ]}
            >
                { label }
            </Text>
            <Text 
                style={[
                    estilo.celula,
                    estilo.info
                ]}
            >
                { info }
            </Text>
        </View>
    );
}

const estilo = StyleSheet.create({
    linha: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#c5c5c5'
    },
    celula: {
        fontSize: 16,
        paddingLeft: 5,
    },
    label: {
        fontWeight: 'bold',
        flex: 1
    },
    longLabel: {
        fontSize: 13
    },
    info: {
        flex: 3
    }
});

export default Linha;