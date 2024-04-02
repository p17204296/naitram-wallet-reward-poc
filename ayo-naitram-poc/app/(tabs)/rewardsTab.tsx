import React from "react";
import { ScrollView } from "react-native";
import { globalStyles } from "@/constants/styles";
import { View } from "@gluestack-ui/themed";
import Header from "@/components/Header";
import EarningsAccordion from "@/components/EarningsAccordion";
import MyItems from "@/components/MyItems";
import ClaimableRewardsList from "@/components/ClaimableRewardsList";

export default function RewardsTab() {
  return (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <View padding={10}>
        <EarningsAccordion />
      </View>
      <View padding={10}>
        <MyItems />
      </View>
      <View padding={10}>
        <ClaimableRewardsList />
      </View>
    </ScrollView>
  );
}
