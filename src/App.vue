<template>
  <div id="app">
    <div class="banner">Ai Music</div>
    <div class="albums-container">
      <div class="album-buttons">
        <button class="album-button" v-for="(album, index) in albums" :key="album.id" @click="switchAlbum(index)">
          {{ album.name }}
        </button>
      </div>

      <div v-if="albums.length > 0 && albums[currentAlbumIndex]">
        <video :src="albums[currentAlbumIndex].coverVideo" autoplay loop muted></video>
        <audio ref="audio" :src="albums[currentAlbumIndex].musicUrl" controls></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        albums: [
          { id: 1, name: 'Calm Waters', coverVideo: require('@/assets/video/01.mp4'), musicUrl: require('@/assets/music/Calm Waters.mp3') },
          { id: 2, name: 'Golden Glow', coverVideo: require('@/assets/video/02.mp4'), musicUrl: require('@/assets/music/Golden Glow.mp3') },
          { id: 3, name: 'Whispers of the Lake', coverVideo: require('@/assets/video/03.mp4'), musicUrl: require('@/assets/music/Whispers of the Lake.mp3') }
        ],
        currentAlbumIndex: 0,
        playing: false
      };
    },
  methods: {
    switchAlbum(index) {
      this.currentAlbumIndex = index;
      this.playing = false;
      this.$refs.audio.pause();
    },
    togglePlay() {
      const audio = this.$refs.audio;
      if (this.playing) {
        audio.pause();
      } else {
        audio.play();
      }
      this.playing = !this.playing;
    }
  }
}
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  width: 100vw; /* 添加宽度以填满视图 */
}

.banner {
  background-color: #a2d5c6; /* 薄荷绿色 */
  color: white;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

div {
  text-align: center;
}

.album-buttons {
  display: flex;
  justify-content: center;
  width: 100%; /* 按钮容器宽度为100% */
  margin-bottom: 20px;
}

button {
  background-color: #a2d5c6; /* 薄荷绿色 */
  color: white;
  border: none;
  padding: 15px 30px; /* 增加填充以增大按钮 */
  margin: 0 10px; /* 为按钮添加水平间距 */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px; /* 增加字体大小 */
}

button:hover {
  background-color: #76c7b7;
}

video {
  max-width: 60%; /* 增加视频尺寸 */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

audio {
  width: 80%; /* 增加音频控制条宽度 */
  margin-top: 20px;
}

.albums-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* 使容器宽度为100% */
}
</style>
