/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollView,
} from 'react-native';
import React, {Fragment, useState} from 'react';

const DropdownComponent = (props: any) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownHandler = () => {
    setOpenDropdown(!openDropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(false);
  };

  return (
    <View style={[style.btnRoot, props.rootStyle]}>
      <Pressable
        android_ripple={{color: props.android_ripple_color || '#ccc'}}
        style={[
          style.btnStyle,
          props.dropDownRootStyle,
          {borderRadius: !openDropdown ? 4 : 0},
        ]}
        onPress={dropdownHandler}>
        <Text style={[style.textStyle, props.dropDownRootTextStyle]}>
          {props.title}
        </Text>
      </Pressable>
      {openDropdown && (
        <Fragment>
          <Pressable
            style={props.dropdownSubRootContainer}
            onPress={closeDropdown}
            android_ripple={{color: 'transparent'}}
          />
          <View style={[style.dropdownContainer, props.dropdownContainer]}>
            <ScrollView
              showsVerticalScrollIndicator={
                props.showsVerticalScrollIndicator || false
              }>
              {props.optionData.map((option: any) => (
                <Pressable
                  key={option.key}
                  android_ripple={{color: props.android_ripple_color || '#ccc'}}
                  onPress={() => {
                    closeDropdown(), props.onChangeText(option);
                  }}
                  style={[style.subDropdownStyle, props.subDropdownContainer]}>
                  <Text
                    style={[
                      style.dropdownTextStyle,
                      props.dropdownSubValueStyle,
                    ]}>
                    {option.value}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </Fragment>
      )}
    </View>
  );
};

export default DropdownComponent;

const windowScreen: any = Dimensions.get('window').width;
const heightScreen: any = Dimensions.get('window').height;

const style = StyleSheet.create({
  btnRoot: {
    flex: 1,
    marginTop: heightScreen * 0.1,
  },
  btnStyle: {
    width: windowScreen * 0.38,
    height: heightScreen * 0.06,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00A9FF',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
    textAlign: 'center',
  },
  dropdownContainer: {
    width: windowScreen * 0.38,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: heightScreen * 0.2,
  },
  subDropdownStyle: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#00A9FF',
    padding: 10,
  },
  dropdownTextStyle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
  },
});
