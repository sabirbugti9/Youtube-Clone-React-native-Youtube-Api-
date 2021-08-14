'use strict';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const VideoPlayer = (props) => {

    return (
        <YoutubePlayer
            height={200}

            play={true}
            videoId={props.id}
        />
    );
};

export default VideoPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    mediaPlayer: {
        width: "100%",
        aspectRatio: 16 / 9
    },
});

// import React, { useRef, useState } from 'react';
// import { View, Text, Platform, StyleSheet } from 'react-native';
// import Video from 'react-native-video';
// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

// const VideoPlayer = (props) => {
//     const videoPlayer = useRef(null);
//     const [duration, setDuration] = useState(0);
//     const [paused, setPaused] = useState(true);

//     const [currentTime, setCurrentTime] = useState(0);
//     const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
//     const [isLoading, setIsLoading] = useState(true);
//     const onSeek = (seek) => {
//         videoPlayer?.current.seek(seek);
//     };

//     const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

//     const onPaused = (newState) => {
//         setPaused(!paused);
//         setPlayerState(newState);
//     };

//     const onReplay = () => {
//         videoPlayer?.current.seek(0);
//         setCurrentTime(0);
//         if (Platform.OS === 'android') {
//             setPlayerState(PLAYER_STATES.PAUSED);
//             setPaused(true);
//         } else {
//             setPlayerState(PLAYER_STATES.PLAYING);
//             setPaused(false);
//         }
//     };

//     const onProgress = (data) => {
//         if (!isLoading) {
//             setCurrentTime(data.currentTime);
//         }
//     };

//     const onLoad = (data) => {
//         setDuration(Math.round(data.duration));
//         setIsLoading(false);
//     };

//     const onLoadStart = () => setIsLoading(true);

//     const onEnd = () => {
//         setPlayerState(PLAYER_STATES.ENDED);
//         setCurrentTime(duration);
//     };

//     return (
//         <View>
//             <Video
//                 onEnd={onEnd}
//                 onLoad={onLoad}
//                 onLoadStart={onLoadStart}
//                 posterResizeMode={'cover'}
//                 onProgress={onProgress}
//                 paused={paused}
//                 ref={(ref) => (videoPlayer.current = ref)}
//                 resizeMode={'cover'}
//                 source={{ uri: videoURI }}
//                 controls
//                 style={styles.backgroundVideo}

//             />
//             <MediaControls
//                 isFullScreen={false}
//                 duration={duration}
//                 isLoading={isLoading}
//                 progress={currentTime}
//                 onPaused={onPaused}
//                 onReplay={onReplay}
//                 onSeek={onSeek}
//                 onSeeking={onSeeking}
//                 mainColor={"red"}
//                 playerState={playerState}
//                 sliderStyle={{ containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
//             />
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     backgroundVideo: {
//         width: "100%",
//         aspectRatio: 16 / 9
//     },
//     mediaControls: {
//         height: '100%',
//         flex: 1,
//         alignSelf: 'center',
//     },
// });
// export default VideoPlayer;