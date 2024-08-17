<template>
  <div class="text-center">
    <ScrollArea class="h-[200px] inline-block border rounded-sm p-8" ref="scrollRef">
      <div v-html="props.lyrics" class="lyric-box inline-block" ref="musicNodesRef"></div>
    </ScrollArea>
  </div>
</template>

<script setup lang="ts">
import {ScrollArea} from '@/components/ui/scroll-area'
import {reactive, ref, watch} from "vue";

interface MusicSecNode {
  distance: number,
  timeNode: number
}

const props = defineProps<{
  lyrics: string,
  top: number|null
}>()

const scrollRef = ref<InstanceType<typeof ScrollArea> | null>(null)
const musicNodesRef = ref<HTMLDivElement|null>(null)

const musicNodes  = reactive<MusicSecNode[]>([])

defineExpose({
  musicNodes
})

watch(() => props.top, (newTop) => {
  if (scrollRef.value) {
    if(newTop && newTop >= 0){
      //set scroll smooth
      console.log('fresh',newTop)
      const scrollEleRef = scrollRef.value.viewport?.();
      const scrollEle = scrollEleRef.value;
      if(scrollEle){
        scrollEle.style.scrollBehavior = 'smooth';
        scrollEle.scrollTop = newTop
      }
    }
}
})

watch(()=>musicNodesRef.value,(scrollElement)=>{
  if(scrollElement){
    const scrollPositionTop = scrollElement.getBoundingClientRect().top;
    const allNodes = scrollElement.querySelectorAll('.LyricsYomi');
    const nodesData: MusicSecNode[] = [];
    allNodes.forEach(node => {
      const nodeSt = node.getAttribute('st');
      if(nodeSt){
        const durations = nodeSt.split('.')[0];
        const [,min,sec]=durations.split(':');
        const totalSeconds = parseInt(min) * 60 + parseInt(sec);
        const topDistance = node.getBoundingClientRect();
        const distance = topDistance.top - scrollPositionTop - 12;
        nodesData.push({
          distance,
          timeNode: totalSeconds
        });
      }

    })

    if(nodesData.length > 0){
      musicNodes.length=0
      musicNodes.push(...nodesData);
    }
  }
})

</script>

<style lang="less">
.lyric-box {
  .lyricBody {
    font-size: 21px;
    letter-spacing: 1px;
    line-height: 2.3;

  }

  span.ruby {
    line-height: 2.6;
    margin-bottom: 0.55em;
    display: inline-table;
    position: relative;
    vertical-align: bottom;
  }

  span.rb {
    display: table-row;
    position: relative;
    line-height: 1.2;
  }

  span.rt {
    font-size: 14px;
    display: table-header-group;
    line-height: 1.8;
    color: #999;
    white-space: nowrap;
    text-align: center;
    letter-spacing: -0.001em;
  }

  li.li2 {
    margin-bottom: 10px;
  }

  .LyricsYomi, .LyricsYomiKana {
    font-size: 1.4em;
    letter-spacing: 1px;
    color: #444;
  }

  .Translate_zh {
    font-size: 1.3em;
    color: green;
  }

}
</style>