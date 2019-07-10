<template>
  <main class="view post">
    <section class="stream">
      <video
        ref="video"
        id="video"
        width="100%"
        height="300"
        autoplay
        v-if="!captured"
        :class="(!captured) ? 'show' : 'hide'"
      ></video>
      <button class="captureBtn" @click="capture()">Capture</button>
      <button class="cancelBtn" @click="cancel()" v-if="captured">Cancel</button>
    </section>
    <section class="capture">
      <canvas ref="canvas" id="canvas" width="100%" height="300" :class="(captured) ? 'show' : 'hide'"></canvas>
    </section>
  </main>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Post extends Vue {
    video: any
    canvas: any
    constraints: any
    cap: string = ''
    captured: boolean = false

    capture () {
      let ctx = this.canvas.getContext('2d').drawImage(
        this.video, 0, 0, this.canvas.width, this.canvas.width
      )

      this.cap = canvas.toDataURL('image/png')
      this.captured = true;
    }

    cancel () {
      this.captured = false
    }

    mounted () {
      this.video = this.$refs.video
      this.video.width = window.innerWidth
      this.video.height = window.innerHeight - 80
      this.constraints = {
        width: window.innerWidth,
        height: window.innerHeight
      }

      if (this.$refs.canvas) {
        this.canvas = this.$refs.canvas
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight - 80
      }

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
          video: this.constraints
        }).then((stream: any) => {
          this.video.srcObject = stream
          this.video.play()
        }).catch((err: any) => {
          console.log(this.video)
          console.error(err)
        })
      }
    }
  }
</script>

<style lang="scss">
  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  .captureBtn {
    position: absolute;
    bottom: 65px;
    left: 50%;
    transform: translateX(-50%);
  }

  .image {
    width: 100%;
    height: auto;
  }
</style>
