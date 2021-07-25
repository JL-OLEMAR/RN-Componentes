/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { Button, Modal, View, Text } from 'react-native'

import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Modal Screen' />

      <Button
        title='Abrir Modal'
        onPress={() => setIsVisible(true)}
      />

      <Modal
        animationType='fade'
        visible={isVisible}
        transparent
      >
        {/* Background negro */}
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          {/* Contenido del modal */}
          <View style={{
            backgroundColor: 'white',
            borderRadius: 5,
            height: 180,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            shadowOffset: {
              width: 0,
              height: 10
            },
            shadowOpacity: 0.25,
            elevation: 10
          }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Cuerpo del modal</Text>
            <Button
              title='Cerrar'
              onPress={() => setIsVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}
