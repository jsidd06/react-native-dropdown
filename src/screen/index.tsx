import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import NativeDropdown from '../components';

const optionData = [
  {key: 1, value: 'Option 1'},
  {key: 2, value: 'Option 2'},
  {key: 3, value: 'Option 3'},
];

const Dropdown = () => {
  const [selectOption, setSelectOption] = useState();

  const dropdownHandler = (tab: any) => {
    setSelectOption(tab.value);
  };
  return (
    <View style={styles.ctn}>
      <NativeDropdown
        title={selectOption || 'Dropdown'}
        onChangeText={dropdownHandler}
        optionData={optionData}
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
