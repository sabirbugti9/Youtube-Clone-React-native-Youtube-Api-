import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import moment from 'moment';
const VideoListItem = (props) => {
    const { video } = props;
    // const minutes = Math.floor(video.duration / 60);
    // const seconds = video.duration % 60;
    // let viewsString = video.views.toString();
    // if (video.views > 1000000) {
    //     viewsString = (video.views / 1000000).toFixed(1) + "m"
    // } else if (video.views > 1000) {
    //     viewsString = (video.views / 1000).toFixed(1) + "k"

    // }
    const { id, snippet = {}, contentDetails } = video;
    const { title, thumbnails = {}, resourceId, channelTitle } = snippet;
    const { medium = {} } = thumbnails;
    var date = new Date(contentDetails.videoPublishedAt);

    moment.locale('en');
    var timeFormated = moment.utc(date).local().startOf('seconds').fromNow()

    return (
     

        <View style={styles.videoCard}>
            {/* Thumbnail */}
            <View>
                <Image style={styles.thumbnail} source={{ uri: medium.url }} />
                {/* <View style={styles.timeContainer}>
                    <Text style={styles.time}>{minutes}:{seconds < 10 ? "0" : ''}{seconds}</Text>
                </View> */}
            </View>
            {/* Title row */}

            <View style={styles.titleRow}>
                {/* Avatar */}
                <Image style={styles.avatar} source={require('../../assets/images/logo.jpg')} />
                {/* Middle container:Title,subtitle,etc. */}
                <View style={styles.middleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{channelTitle} 1k {timeFormated}</Text>

                </View>
                <Entypo name="dots-three-vertical" size={24} color="white" />
                {/* Icon */}

            </View>

            {/* Thumbnail */}

        </View>
    );
}

export default VideoListItem;