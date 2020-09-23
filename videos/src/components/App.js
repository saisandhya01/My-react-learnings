import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDisplay from "./videoDisplay";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  onSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        q: term,
      },
    });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  componentDidMount() {
    this.onSubmit("that was epic");
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDisplay video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
