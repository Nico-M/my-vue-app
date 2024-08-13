<template>
  <div class="player" ref="playerEle"></div>
</template>
<script lang="ts" setup>
import APlayer from 'aplayer-ts'
import 'aplayer-ts/src/css/base.css'
import {onMounted, ref} from 'vue';
import {listenNowAlbums} from "@/pages/learnSongs/data/albums.ts";

interface AudioItem {
  name: string,
  artist: string,
  url: string,
  cover: string,
}

const playList: AudioItem[]  = listenNowAlbums.map(item=>{
  return {
    name: item.name,
    artist: item.artist,
    cover: item.cover,
    url: '/'+item.name+'.mp3',
  }
})
const aplayer = ref<APlayer | null>(null)
defineExpose({
  switch(songName: string) {
    const findSongIdx = playList.findIndex(s=>s.name===songName);
    if(findSongIdx >= 0) {
      const player = aplayer.value;
      player?.list.switch(findSongIdx);
      player?.play();
    }
  },
})
const playerEle = ref<HTMLDivElement | null>(null);

const getPlayer = (ele: HTMLElement) => {
  return APlayer()
      .init({
        container: ele,
        listFolded:true,
        audio: playList
      })
}

onMounted(() => {
  if (playerEle.value) {
    aplayer.value = getPlayer(playerEle.value)
  }
})


</script>