import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import styled from "styled-components";

export const EvalBlock = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onSelect} onLongPress={props.longPress}>
      <Item>
        <Text>{props.title}</Text>
      </Item>
    </TouchableCmp>
  );
};

export default EvalBlock;

const Item = styled.View`
  background: #fff;
  height: 60px;
  width: 110px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: center;
  margin: 0 8px;
`;
const Text = styled.Text`
  font-size: 13px;
  font-weight: 600;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
