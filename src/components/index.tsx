import {Pressable, StyleSheet, Text, Dimensions, View} from 'react-native';
import React, {Fragment, useState} from 'react';

const DropdownComponent = (props: any) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownHandler = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <Fragment>
      <Pressable
        android_ripple={{color: props.android_ripple_color || '#ccc'}}
        style={[style.btnStyle, props.dropDownRootStyle]}
        onPress={dropdownHandler}>
        <Text style={[style.textStyle, props.dropDownRootTextStyle]}>
          {props.title}
        </Text>
      </Pressable>
      {openDropdown &&
        props.optionData.map((option: any) => (
          <View
            key={option.key}
            style={[style.dropdownStyle, props.dropdownContainer]}>
            <Pressable
              android_ripple={{color: props.android_ripple_color || '#ccc'}}
              onPress={() => {
                setOpenDropdown(false), props.onChangeText(option);
              }}
              style={[style.subDropdownStyle, props.subDropdownContainer]}>
              <Text
                style={[style.dropdownTextStyle, props.dropdownSubValueStyle]}>
                {option.value}
              </Text>
            </Pressable>
          </View>
        ))}
    </Fragment>
  );
};

export default DropdownComponent;

const windowScreen: any = Dimensions.get('window').width;
const heightScreen: any = Dimensions.get('window').height;

const style = StyleSheet.create({
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
  },
  textStyle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
    textAlign: 'center',
  },
  dropdownStyle: {
    width: windowScreen * 0.38,
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderColor: '#00A9FF',
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 4,
  },
  subDropdownStyle: {
    borderBottomWidth: 1,
    borderBlockColor: '#00A9FF',
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
