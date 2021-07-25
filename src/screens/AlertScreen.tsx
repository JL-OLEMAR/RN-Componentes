/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Button, View, Alert } from 'react-native'
import prompt from 'react-native-prompt-android'

import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Título',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive'
        },
        { text: 'OK', onPress: () => console.log('Ok Pressed') }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss')
      }
    )
  }

  // Solo para IOS
  const showPrompt = () => {
  //   Alert.prompt(
  //     '¿Está Seguro?',
  //     'Esta acción no se revertir',
  //     (valor: string) => console.log('info', valor),
  //     'plain-text',
  //     'Hola Mundo'
  //   )
    prompt(
      'Enter password',
      'Enter your password to claim your $1.58 in lottery winnings',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Ok', onPress: password => console.log('Ok Pressed, password: ' + password) }
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder'
      }
    )
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts' />

      <Button
        title='Mostrar Alerta'
        onPress={showAlert}
      />
      <View style={{ height: 10 }} />

      <Button
        title='Mostrar Prompt'
        onPress={showPrompt}
      />

    </View>
  )
}
