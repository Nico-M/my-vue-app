<template>
  <div class="flex items-center justify-between">
    <div class="space-y-1 ml-6">
      <div class="flex items-center">
        <RadiobuttonIcon class="text-red-500 transform scale-150" />
        <h2 class="text-2xl ml-4 font-semibold tracking-tight ">
          Listen Now
        </h2>
      </div>

      <p class="text-sm text-muted-foreground">
        Top picks for you. Updated daily.
      </p>
    </div>
  </div>
  <Separator class="my-4" />
  <div class="relative p-8 ">
    <ScrollArea>
      <div class="flex space-x-20 pb-4">
        <AlbumArtwork v-for="album in listenNowAlbums" :key="album.name" :album="album" class="w-[250px]"
          aspect-ratio="square" :width="250" :height="330" @play="learningSongs"
          :playing="album.name == currentSong?.name" />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </div>
  <div>
    <LyricBox v-if="!!currentSong?.lyricId" :lyrics="currentSongLyric" :top="topDistance" ref="boxRef"></LyricBox>
  </div>
  <Player v-show="!!currentSong" ref="playerEle" @timeupdate="handleTimeupdate" />
</template>

<script lang="ts" setup>
import { Separator } from '@/components/ui/separator';
import AlbumArtwork from './AlbumArtwork.vue'
import { Album, listenNowAlbums } from './data/albums'
import LyricBox from './LyricBox.vue'
import * as lyrics from './data/lyrics'
import { computed, ref } from 'vue';
import { RadiobuttonIcon } from '@radix-icons/vue'
import Player from './Player.vue'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const currentSong = ref<Album | null>(null);

const playerEle = ref<InstanceType<typeof Player> | null>(null)

const boxRef = ref<InstanceType<typeof LyricBox> | null>(null)

const topDistance = ref<number | null>(null)

const currentSongLyric = computed(() => {
  if (!(currentSong.value && currentSong.value.lyricId)) {
    return ''
  }
  return (lyrics as any)[currentSong.value.lyricId];
})

const learningSongs = (song: Album) => {
  currentSong.value = song;
  const player = playerEle.value;
  player?.switch(song.name);

}

const handleTimeupdate = (timeDuration: number) => {
  if (boxRef.value) {
    const musicNodes = boxRef.value.musicNodes;
    let idx = 0;
    if(musicNodes.length){
      //find last index of node of musicNodes which node.timeNode <= timeDuration
      idx = musicNodes.findIndex(node => node.timeNode > timeDuration);
      const targetIdx = idx-1;
      if(targetIdx>=0){
        topDistance.value = musicNodes[targetIdx].distance;
      }

    }
  }
}
</script>
