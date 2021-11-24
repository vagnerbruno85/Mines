import React from "react";
import {Text, View, StyleSheet} from 'react-native';

export default props => {
    return (
        <View style={styles.container}>
            <View style={[styles.flagpole, props.bigger ? styles.flaggedpoleBigger: null]}></View>
            <View style={[styles.flag, props.bigger ? styles.flagBigger: null]}></View>
            <View style={[styles.base1, props.bigger ? styles.base1Bigger: null]}></View>
            <View style={[styles.base2, props.bigger ? styles.base2Bigger: null ]}></View>

        </View>
    )

}
const styles =StyleSheet.create({
    container:{
        marginTop:2
    },
    flagpole:{
        position:'absolute',
        height:14,
        width:2,
        backgroundColor:'#222',
        marginLeft: 9,
    },
    flag: {
        position: 'absolute',
        heigth:5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft:3,
    },
    base1: {
        position:'absolute',
        height:2,
        width:6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,
    },
    base2:{
        position:'absolute',
        height: 2,
        width:10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },
    flaggedpoleBigger:{
        heigth: 28,
        width: 4,
        marginLeft: 16,
    },
    flagBigger:{
        height: 10,
        width: 14,
        marginLeft: 3, 
    },
    base1Bigger: {
        heigth: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12,
    },
    base2Bigger:{
        height:4,
        width:20,
        marginTop: 8,
        marginLeft:24,
    }


})