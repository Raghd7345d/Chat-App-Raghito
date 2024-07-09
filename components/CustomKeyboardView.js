import React from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import PropTypes from "prop-types";

const isIOS = Platform.OS === "ios";

export default function CustomKeyboardView({ children, inChat }) {
  let KanConfig = {};
  let ScrollViewConfig = {};
  if (inChat) {
    KanConfig = { keyboardVerticalOffset: 90 };
    ScrollViewConfig = { contentContainerStyle: { flex: 1 } };
  }

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? "padding" : "height"}
      keyboardVerticalOffset={90}
      style={{ flex: 1 }}
      {...KanConfig}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        {...ScrollViewConfig}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

CustomKeyboardView.propTypes = {
  children: PropTypes.node.isRequired,
};
