import React from "react";
import VideoItem from "../components/VideoItem";

const VideoScreen = ({ navigation, route }) => {
  const { url } = route.params;
  // const data = classes;
  // const selectedVideo = data.find((key) => key.key === classId);

  console.log("testing the selected video", route.params);
  return (
    <VideoItem
      video={url}
      onBackClick={() => {
        navigation.goBack();
      }}
      reviewNav={(video) => {
        navigation.navigate("Review", {
          video: url,
          // selectedVideo: selectedVideo,
          // classId: classId,
          // classes: classes,
        });
      }}
    />
  );
};
export default VideoScreen;
