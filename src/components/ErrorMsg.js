import React from 'react';
import {View} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

const ErrorMsg = () => {
  return (
    <View>
      <AwesomeAlert
        show={true}
        showProgress={false}
        title="Ops... Algo deu errado!"
        message="Houve um erro ao receber dados da lista"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={false}
        //cancelText="No, cancel"
        confirmText="Ok"
        confirmButtonColor="#DD6B55"
        /*
        onCancelPressed={() => {
          this.hideAlert();
        }}
        onConfirmPressed={() => {
          this.hideAlert();
        }}
        */
      />
    </View>
  );
}

export default ErrorMsg;