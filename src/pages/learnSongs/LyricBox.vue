<template>
  <div class="text-center">
    <ScrollArea class="h-[200px] inline-block border rounded-sm p-8">
      <div v-html="lyrics" class="lyric-box inline-block"></div>
    </ScrollArea>
  </div>
</template>

<script setup lang="ts">
import {ScrollArea} from '@/components/ui/scroll-area'

defineProps<{
  lyrics: string
}>()


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