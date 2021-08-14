import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import VideoListItem from '../../components/VideoListItem/index';
import videos from '../../assets/data/videos.json';
const HomeScreen = (props) => {
    const [youtubeData, setYoutubeData] = useState();
    const getMoviesFromApi = async () => {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLAhJRLQdfo1VTkqmqL0_NK7dwHY-3yDQ5&maxResults=10&part=snippet%2CcontentDetails&key=AIzaSyDaFeSPufyCXqBXlsAVRBnKamgiY39mbEY`);
        const data = await res.json();
        setYoutubeData(data.items);
    };
    useEffect(async () => {
        await getMoviesFromApi();

    }, [])

    return (

        <FlatList
            data={youtubeData}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => <TouchableOpacity activeOpacity={0.5} onPress={() => {
                props.navigation.navigate("VideoPlay", { video: item, youtubeData: youtubeData })
            }}>
                <VideoListItem video={item} />
            </TouchableOpacity>}

        />
        // <ScrollView showsVerticalScrollIndicator={false} >
        //     {/* Video Componet */}

        //     <VideoListItem video={videos[0]} />
        //     <VideoListItem video={videos[1]} />
        //     <VideoListItem video={videos[2]} />

        // </ScrollView>
    );
}
const styles = StyleSheet.create({

})
export default HomeScreen;