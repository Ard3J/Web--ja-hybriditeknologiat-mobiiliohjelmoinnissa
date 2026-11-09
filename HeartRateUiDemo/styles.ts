import { StyleSheet, TextStyle } from "react-native";
import { theme } from "./theme";

const baseText: TextStyle = { fontSize: theme.fontSizes.large, fontWeight: '600'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.medium
  },
  input: {
    ...baseText
  },
  output: {
    ...baseText
  },
});

export default styles
