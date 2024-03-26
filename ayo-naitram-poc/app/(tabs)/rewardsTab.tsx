import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { globalStyles, headerStyles } from "@/constants/styles";
import { Image, ImageBackground } from "react-native";
import Svg, { Path } from "react-native-svg";
import { HStack, Box, ArrowLeftIcon, Icon } from "@gluestack-ui/themed";
import Header from "@/components/Header";

export default function TabOneScreen() {
  const assetsPath = "../../assets/naitram";

  return (
    <View style={globalStyles.container}>

        <Header />
    </View>
  );
}
