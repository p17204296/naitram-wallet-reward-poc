import { globalStyles } from "@/constants/styles";
import { View } from "@gluestack-ui/themed";
import Header from "@/components/Header";
import EarningsAccordion from "@/components/EarningsAccordion";

export default function TabOneScreen() {
  return (
    <View style={globalStyles.container}>
      <Header />
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={10}
      >
        <EarningsAccordion />
      </View>
    </View>
  );
}
