<script setup lang="ts">
import {type HTMLAttributes, computed, ref} from 'vue'
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  type ScrollAreaRootProps,
  ScrollAreaViewport,
} from 'radix-vue'
import ScrollBar from './ScrollBar.vue'
import { cn } from '@/lib/utils'

const props = defineProps<ScrollAreaRootProps & { class?: HTMLAttributes['class'] }>()

const viewport = ref<HTMLDivElement | null>(null)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

defineExpose({
  viewport:()=> viewport
})
</script>

<template>
  <ScrollAreaRoot v-bind="delegatedProps"
                  :class="cn('relative overflow-hidden', props.class)"
                  :ref="(el:any)=>viewport=el.viewport">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]" >
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
