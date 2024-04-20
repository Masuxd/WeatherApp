import {View, Text, StyleSheet} from "react-native";

const Header = ({cityName}) => {
  return(
    <View style = {styles.headerBackground}>
      <Text style = {styles.headerText}>{cityName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
  },
  headerText: {
    fontFamily: "Arial",
    fontSize: 40,
    textAlign: "center",
    marginTop: 50,
  }
});

export default Header