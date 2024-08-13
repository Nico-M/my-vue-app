
<script setup lang="ts">
import type { Album } from './data/albums'
import { cn } from '@/lib/utils'
import { PlayIcon,PauseIcon } from '@radix-icons/vue'

interface AlbumArtworkProps {
    album: Album
    aspectRatio?: 'portrait' | 'square'
    width?: number
    height?: number
    playing: boolean
}
withDefaults(defineProps<AlbumArtworkProps>(), {
    aspectRatio: 'portrait',
    playing:false
})
const emit = defineEmits<{
  (e: 'play', album: Album): void
}>()
</script>

<template>
    <div>
        <div class="overflow-hidden rounded-md cursor-pointer">
            <img :src="album.cover" :alt="album.name" :width="width" :height="height" :class="cn(
                'object-cover transition-all hover:scale-105',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
                `w-${width}`, `h-${height}`
            )">
        </div>
        <div :class="cn('space-y-3 flex justify-between mt-1', $attrs.class ?? '')">
            <div class="space-y-1 text-sm">
                <h3 class="font-medium leading-none">
                    {{ album.name }}
                </h3>
                <p class="text-xs text-muted-foreground">
                    {{ album.artist }}
                </p>
            </div>
            <component :is="playing?PauseIcon:PlayIcon" class="hover:text-red-500 hover:cursor-pointer" @click="()=>emit('play',album)"></component>
        </div>
    </div>

</template>