import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import NativeDropdown from '../components';

const optionData = [
  {key: 'label_1', value: 'Label 1'},
  {key: 'label_2', value: 'Label 2'},
  {key: 'label_3', value: 'Label 3'},
  {key: 'label_4', value: 'Label 4'},
  {key: 'label_5', value: 'Label 5'},
  {key: 'label_6', value: 'Label 6'},
  {key: 'none', value: 'None'},
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
