import { action, observable, runInAction } from "mobx";

export const songStore = observable(
  {
    isFetching: false,
    songs: [],
    hasError: false,

    fetchSongs() {
      this.isFetching = true;
      fetch("https://hookedbe.herokuapp.com/api/songs")
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw res;
          }
        })
        .then(resJson => {
          console.log(resJson);
          runInAction(() => {
            this.isFetching = false;
            this.songs = resJson;
          });
        })
        .catch(error => {
          console.log(error);
          this.isFetching = false;
        });
    },

    get lengthOfSong() {
      return this.songs.length;
    }
  },
  {
    fetchSongs: action
  }
);
