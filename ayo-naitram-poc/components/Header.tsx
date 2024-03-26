import React from "react";
import {
  View,
  Text,
  Icon,
  ArrowLeftIcon,
  Avatar,
} from "@gluestack-ui/themed";
import { headerStyles } from "@/constants/styles";
import { ImageBackground } from "react-native";

const Header = () => {
  const assetsPath = "../assets/naitram";

  return (
    <ImageBackground
      source={require(`${assetsPath}/searchHeading.png`)}
      style={headerStyles.backgroundImageStyle}
    >
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={10}
      >
        {/* Left Column */}
        <View>
          <Icon as={ArrowLeftIcon} color="white" size="xl" />
        </View>

        {/* Center Column */}
        <View flexDirection="column" alignItems="center">
          <Text style={headerStyles.profileHeadingStyle}>Your Rewards</Text>
          <Text style={headerStyles.profileSubheadingStyle}>Ways to earn</Text>
        </View>

        {/* Right Column */}
        <View>
          <Avatar/>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Header;
