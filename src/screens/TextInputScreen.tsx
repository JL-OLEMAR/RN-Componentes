/* eslint-disable @typescript-eslint/explicit-function-return-type, react/jsx-handler-names */
import React, { useContext } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

import { useForm } from '../hooks/useForm'
import { HeaderTitle } from '../components/HeaderTitle'
import { CustomSwitch } from '../components/CustomSwitch'
import { styles as global } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const TextInputScreen = () => {
  const { theme: { colors , dividerColor} } = useContext(ThemeContext)
  const { form, onChange, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={global.globalMargin}>
            <HeaderTitle title='TextInputScreen' />

            <TextInput
              autoCapitalize='words'
              autoCorrect={false}
              onChangeText={(value) => onChange(value, 'name')}
              placeholder='Ingrese su nombre'
              placeholderTextColor={dividerColor}
              style={{
                ...styles.inputStyle,
                backgroundColor: colors.card,
                borderColor: colors.border,
                color: colors.text
              }}
            />

            <TextInput
              autoCapitalize='none'
              keyboardAppearance='dark'
              keyboardType='email-address'
              onChangeText={(value) => onChange(value, 'email')}
              placeholder='Ingrese su email'
              placeholderTextColor={dividerColor}
              style={{
                ...styles.inputStyle,
                backgroundColor: colors.card,
                borderColor: colors.border,
                color: colors.text
              }}
            />

            <View style={styles.switchRow}>
              <Text style={{ ...styles.switchText, color: colors.text }}>Subscribirse</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={(value) => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              keyboardType='numeric'
              onChangeText={(value) => onChange(value, 'phone')}
              placeholder='Ingrese su teléfono'
              placeholderTextColor={dividerColor}
              style={{
                ...styles.inputStyle,
                backgroundColor: colors.card,
                borderColor: colors.border,
                color: colors.text
              }}
            />

            <View style={{ height: 100 }} />
          </View>

        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    // borderColor: 'rgba(0,0,0,0.3)',

    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  switchText: {
    fontSize: 25
  }
})
