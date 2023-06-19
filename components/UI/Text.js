import { Text, StyleSheet } from "react-native";

export const MainText = (props) => {
  return (
    <Text style={[styles.mainText, props.style]} {...props}>
      {props.children}
    </Text>
  )
}

export const SecondaryText = (props) => {
  return (
    <Text style={[styles.secondaryText, props.style]} {...props}>
      {props.children}
    </Text>
  )
}

export const SectionHeading = (props) => {
  return (
    <Text style={[styles.sectionHeading, props.style]} {...props}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  mainText: {
    color: "#3A3F46",
    fontFamily: 'Inter_400Regular'
  },
  secondaryText: {
    color: "#3A3F46",
    fontFamily: 'Rubik_500Medium'
  },
  sectionHeading: {
    color: "#3A3F46",
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 16,
  }
})