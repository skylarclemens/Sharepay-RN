import { MainText } from "../UI/Text";
import { View, StyleSheet } from "react-native";

const Transaction = ({ description, style, ...rest}) => {
  return (
      <View style={[style, styles.transaction]}
      {...rest}>
        <MainText style={{fontSize: 16}}>{description}</MainText>
      </View>
  )
}

const styles = StyleSheet.create({
  transaction: {
    backgroundColor: '#F4F6F8',
    width: '100%',
    height: 58,
    borderRadius: 16,
    justifyContent: 'center',
    paddingLeft: 20,
    borderLeftColor: '#729B79',
    borderLeftWidth: 3,
  },
})

export default Transaction;