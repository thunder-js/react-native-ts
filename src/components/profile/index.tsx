import React from 'react'
import { Image, View, Text } from 'react-native'

export const Profile = ({
  avatarUrl,
  name
}) => (
  <View style={{width: 100, alignItems: 'center'}}>
    <Image source={{uri: avatarUrl}} style={{width: 100, height: 100, margin: 10, borderRadius: 50}} />
    <Text>{name}</Text>
  </View>
)