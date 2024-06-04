import react from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { colors, hr } from '../globals/style';

const WelcomeScreen = () => {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>Welcome to Foodie</Text>

            {/* Image  */}
            <View style={styles.page1Img}>
                <Image source={require('../images/page1.png')} style={{ width: '100%', height: '100%' }} />
            </View>

            <View style={hr}></View>
            <Text style={styles.text}>Find the best food around you at lowest price</Text>
            <View style={hr}></View>


            {/* Buttons  */}
            <View style={styles.btnBox}>
                <TouchableOpacity>
                    <Text style={styles.btn} >Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.btn} >Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flex: 0,
        justifyContent: 'center'

    },
    page1Img: {

        width: '80%',
        height: '30%',
        alignItems: 'center'
    },
    text: {
        color: colors.col1,
        fontSize: 18,
        textAlign: 'center',
        width: '80%'
    },
    title: {
        fontSize: 40,
        color: colors.col1,
        textAlign: 'center',
        margin: 30,
        fontWeight: '200',

    },
    btnBox:{
        flexDirection:'row',
    },
    btn:{
        fontSize:20,
        color:colors.text1,
        textAlign:'center',
        marginVertical:30,
        marginHorizontal:10,
        backgroundColor:'#fff',
        fontWeight:'700',
        borderRadius:10,
        padding:10,
        paddingHorizontal:20
    }

})

export default WelcomeScreen;