import { observer } from "mobx-react";
import React from "react";
import Card from "./Card";

class Home extends React.Component {
  componentDidMount() {
    this.props.songStore.fetchSongs();
  }

  render() {
    const { songStore } = this.props;
    return (
      <React.Fragment>
        <div className="home">
          {songStore.isFetching ? (
            <span className="loader">LOADING...</span>
          ) : songStore.hasError ? (
            <span className="error">AN ERROR HAS OCCURED</span>
          ) : (
            <>
              {songStore.lengthOfSong > 0 &&
                songStore.songs.map(song => (
                  <Card key={song.id.toString()} song={song} />
                ))}
            </>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default observer(Home);
