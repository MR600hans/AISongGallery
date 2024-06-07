<template>
  <div>
    <video :src="album.coverVideo" autoplay loop muted></video>
    <div>
      <button @click="togglePlay">{{ playing ? 'Pause' : 'Play' }}</button>
    </div>
    <audio ref="audio" :src="album.musicUrl"></audio>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      album: {},
      playing: false
    }
  },
  created() {
    // 假設getAlbum是一個從API或本地獲取數據的函數
    this.album = this.getAlbum(this.id);
  },
  methods: {
    togglePlay() {
      if (this.playing) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
      this.playing = !this.playing;
    },
    getAlbum(id) {
      // 返回指定ID的專輯數據
      return {
        coverVideo: 'path/to/video.mp4',
        musicUrl: 'path/to/music.mp3'
      };
    }
  }
}
</script>
