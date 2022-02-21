import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Animated, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react';
const { width, height } = Dimensions.get('window');
import { PercentageBar } from './';
import Icon from 'react-native-vector-icons/Feather';
const ASPECT_RATIO = width / height;

const URI = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
export default function Bottomcomponent() {


    return (
        <View style={{
            // backgroundColor: '#0B2C25',
            flex: 1,
            // alignItems: 'flex-end',
            justifyContent: 'flex-end',

        }}>
            <View style={styles.container}>
                <View style={{ width: '100%', justifyContent: 'center', }}>
                    <PercentageBar
                        height={20}
                        backgroundColor={'#ddd'}
                        completedColor={'#F33434'}
                        percentage={'65%'}
                    />
                </View>
                <View style={styles.section}>
                    {/* //TouchableOpacity */}
                    <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', padding: 20, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                            <Image source={{ uri: URI }}
                                style={{ width: 45, height: 45, borderRadius: 30 }}
                            />
                            <Text style={{ color: 'white', marginLeft: 10, fontWeight: '400', fontSize: 16 }}>Max Payne</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginRight: -10 }}>

                            <TouchableOpacity style={styles.touchablemail}>
                                <Icon name="mail" size={27} color="#2DAF95" />

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchablephone}>

                                <Icon name="phone" size={27} color="#2DAF95" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#05120F', width: '100%', height: 1, }} />
                    <ScrollView style={{ paddingHorizontal: 15, paddingTop: 10, flex: 1 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/pointer.png')} />
                            <View>
                                <Text style={{ color: '#2DAF95', fontSize: 9, fontWeight: '400', }}>Current Current</Text>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600', fontFamily: 'WorkSans-Regular' }}>4517 Washington Ave. Manchester</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/marker2.png')} style={{}} />
                            <View style={{ marginLeft: 22 }}>
                                <Text style={{ color: '#666', fontSize: 9, fontWeight: '400', fontFamily: 'WorkSans-Regular' }}>Current Current</Text>
                                <Text style={{ color: '#666', fontSize: 16, fontWeight: '600', fontFamily: 'WorkSans-Regular' }}>3577 America MP. INDIA</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0B2C25',
        // flex: 1,
        height: height * 0.35,
        padding: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    section: {
        backgroundColor: '#000', flex: 1, marginTop: -10, marginBottom: -10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    touchablemail: {
        backgroundColor: '#0B2C25', justifyContent: 'center', alignItems: 'center',
        height: 45, width: 45, borderRadius: 30, marginRight: 10,
    }, touchablephone: {
        backgroundColor: '#0B2C25', justifyContent: 'center', alignItems: 'center',
        height: 45, width: 45, borderRadius: 30,
    }
})