import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PagPessoas from './src/pages/PagPessoas';
import PagPessoasDetalhes from './src/pages/PagPessoasDetalhes';
import { primeiraLetraMaiuscula } from './src/util';

const AppNavigator = createStackNavigator({
    Main: {
      screen: PagPessoas
    },
    'PessoasDetalhes': {
      screen: PagPessoasDetalhes,
      navigationOptions: ({navigation}) => {
        const nomeFirst = primeiraLetraMaiuscula (navigation.state.params.pessoa.name.first);
        const nomeLast = primeiraLetraMaiuscula (navigation.state.params.pessoa.name.last);
        const nomePessoa = `${nomeFirst} ${nomeLast}`;
        return ({
          title: nomePessoa,
          headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            
          }
        });
      }
    }
},{
  defaultNavigationOptions: {
    title: "Pessoas",
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center'
    }
  }
});
   
   
const AppContainer = createAppContainer(AppNavigator);
   
   
export default AppContainer;