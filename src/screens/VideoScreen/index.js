import React from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VideoListItem from '../../components/VideoListItem';
import VideoPlayer from '../../components/VideoPlayer/index';
import moment from 'moment';

const VideoScreen = (props) => {
    const video = props.route.params.video;
    const youtubeData = props.route.params.youtubeData;
    const { id, snippet = {}, contentDetails } = video;
    const { title, thumbnails = {}, resourceId, channelTitle } = snippet;
    const { medium = {} } = thumbnails;
    var date = new Date(contentDetails.videoPublishedAt);

    moment.locale('en');
    var timeFormated = moment.utc(date).local().startOf('seconds').fromNow()
    // let viewsString = video.views.toString();
    // if (video.views > 1000000) {
    //     viewsString = (video.views / 1000000).toFixed(1) + "m"
    // } else if (video.views > 1000) {
    //     viewsString = (video.views / 1000).toFixed(1) + "k"

    // }
    return (
        <FlatList
            ListHeaderComponent={
                <View style={{ flex: 1, backgroundColor: "#141414" }}>
                    <VideoPlayer id={resourceId.videoId} />
                    <View style={styles.videoInfoContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{channelTitle} 1k {timeFormated}</Text>
                    </View>
                    <View style={styles.actionListContainer}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <View style={styles.actionListItem}>
                                <AntDesign name="like1" size={30} color="lightgrey" />
                                <Text style={styles.actionText}>3k</Text>

                            </View>
                            <View style={styles.actionListItem}>
                                <AntDesign name="dislike2" size={30} color="lightgrey" />
                                <Text style={styles.actionText}>294</Text>

                            </View>
                            <View style={styles.actionListItem}>
                                <AntDesign name="export" size={30} color="lightgrey" />
                                <Text style={styles.actionText}>294</Text>

                            </View>
                            <View style={styles.actionListItem}>
                                <AntDesign name="download" size={30} color="lightgrey" />
                                <Text style={styles.actionText}>294</Text>

                            </View>
                            <View style={styles.actionListItem}>
                                <AntDesign name="download" size={30} color="lightgrey" />
                                <Text style={styles.actionText}>294</Text>

                            </View>
                            <View style={styles.actionListItem}>
                                <AntDesign name="download" size={30} color="lightgrey" />
                                <Text style={styles.actionText}>294</Text>

                            </View>

                        </ScrollView>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", borderColor: "#3d3d3d", borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 15 }}>
                        <Image style={styles.avatar} source={require('../../assets/images/logo.jpg')} />
                        <View style={{ marginHorizontal: 10, flex: 1 }}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{channelTitle}</Text>
                            <Text style={{ color: "grey", fontSize: 18 }}>3k subscribers</Text>
                        </View>
                        <Text style={{ color: "red", fontSize: 18, fontWeight: "bold", padding: 10 }}>Subscribe</Text>
                    </View>
                    <View style={{ padding: 10, marginVertical: 10 }}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Comments 2</Text>

                        <View style={{ flexDirection: "row", padding: 10, alignItems: "center", marginVertical: 10, }}>
                            <Image style={{ width: 35, height: 35, borderRadius: 20 }} source={require('../../assets/images/logo.jpg')} />
                            <Text style={{ color: "white", marginLeft: 10, marginRight: 10 }}>Subscribe my Channel for more videos </Text>
                        </View>
                    </View>


                </View>
                // <View>

                // </View>
            }
            data={youtubeData}
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#000" }}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => <TouchableOpacity activeOpacity={0.5} onPress={() => {
                props.navigation.navigate("VideoPlay", { video: item, youtubeData: youtubeData })
            }}>
                <VideoListItem video={item} />
            </TouchableOpacity>}
        />


    );
}
export default VideoScreen;