import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from './VideoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {this.state.videos.length} videos found
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
