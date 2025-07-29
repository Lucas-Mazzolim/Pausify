  import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
  
  const DropdownComponent = ( props ) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'white' }]}>
            Unidade de Medida
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        <Dropdown
          style = {[styles.dropdown, {color: 'red'}, isFocus && { borderColor: 'white' }]}
          placeholderStyle = {styles.placeholderStyle}
          selectedTextStyle = {styles.selectedTextStyle}
          inputSearchStyle = {styles.inputSearchStyle}
          iconStyle = {styles.iconStyle}
          inputProps = {{
            style: {
            width: 90,
            backgroundColor: 'rgb(252,243,207)',
            }}
        }
          data = {props.data}
          maxHeight = {300}
          labelField = "label"
          valueField = "value"
          placeholder = {props.placeholder}
          value = {value}
          onFocus = {() => setIsFocus(true)}
          onBlur = {() => setIsFocus(false)}
          onChange = {item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      paddingTop: 2,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      color: 'white',
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      color: 'white'
    },
    icon: {
      marginRight: 5,
      color: 'white'
    },
    label: {
      position: 'absolute',
      left: 22,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 12,
      color: 'white'
    },
    placeholderStyle: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 16,
    },
    selectedTextStyle: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });