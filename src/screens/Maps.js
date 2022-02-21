import { StyleSheet, Dimensions, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';
import { LogBox } from 'react-native';
import { Bottomcomponent } from '../components';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

LogBox.ignoreLogs(['Error: Error on GMAPS route request: ZERO_RESULTS']);
export default function Maps() {
    const [coordinates] = useState([
        {
            latitude: 48.8587741,
            longitude: 2.2069771,
        },
        {
            latitude: 48.8323785,
            longitude: 2.3361663,
        },
    ]);
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDERZgMoGSyQWrLSo0iU-c6rYeQoMAYQQk';
    const origin = { latitude: 28.572032, longitude: 77.184770 };
    const destination = { latitude: 28.569731, longitude: 77.201620 };
    return (
        <View style={{ flex: 1 }}>
            {/* <Text>Maps</Text> */}
            <View style={styles.container}>
                {/* <MapView
                    style={styles.map}
                    region={{
                        latitude: 28.572032,
                        longitude: 77.184770,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView> */}
                {/* <MapView/> */}
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 28.572032,
                        longitude: 77.184770,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    {/* <Polyline
                        coordinates={[
                            {
                                latitude: 48.8587741,
                                longitude: 2.2069771,
                            },
                            {
                                latitude: 48.8323785,
                                longitude: 2.3361663,
                            },
                        ]}
                        strokeColors={[
                            '#B24112',
                            '#238C23',
                        ]}
                        strokeWidth={6}
                    /> */}

                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={5}
                        strokeColor="#00FFFF"
                    // strokeColors={['#00FFFF', '#8000FF']}
                    />
                    <Marker coordinate={{ latitude: 28.569731, longitude: 77.201620 }}
                        pinColor={"green"} // any color
                        title={"Position to end"}
                        image={require('../assets/marker.png')}
                        description={"End point"} />

                    <Marker coordinate={{ latitude: 28.572032, longitude: 77.184770 }}
                        pinColor={"orange"} // any color
                        draggable={false}
                        title={"Position to start"}
                        image={require('../assets/marker.png')}
                        style={{ height: 40, width: 40 }}
                        description={"Starting point"} />
                    {/* <MapViewDirections apikey={GOOGLE_MAPS_APIKEY} origin={{ latitude: 37.3317876, longitude: -122.0054812 }} destination={destination} /> */}
                </MapView>
            </View>
         
                <Bottomcomponent />
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: width * 1.3,
        width,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});