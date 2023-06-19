import { View, StyleSheet } from "react-native";
import { MainText } from "../components/UI/Text";

const Friends = () => {
  return (
    <View style={styles.container}>
      <MainText>Friends</MainText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    alignItems: 'center',
  },
})

export default Friends;