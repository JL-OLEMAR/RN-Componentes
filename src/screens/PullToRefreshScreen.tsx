/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/strict-boolean-expressions */
import React, { useContext, useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets()
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<string>()
  const { theme: { colors, dark } } = useContext(ThemeContext)

  const onRefresh = () => {
    setRefreshing(true)

    setTimeout(() => {
      console.log('Terminamos')
      setRefreshing(false)
      setData('Hola mundo')
    }, 1500)
  }

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0
      }}
      refreshControl={
        <RefreshControl
          colors={['white', 'red', 'orange']}
          onRefresh={onRefresh}
          progressBackgroundColor={colors.primary}
          progressViewOffset={10}
          refreshing={refreshing}
          style={{ backgroundColor: colors.primary }}
          tintColor={dark ? 'white' : 'black'}
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title='Pull To Refresh' />

        {
          data && <HeaderTitle title={data} />
        }
      </View>
    </ScrollView>
  )
}
