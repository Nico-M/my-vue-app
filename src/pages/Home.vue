<template>

    <div class="p-4 flex flex-row gap-5">
        <Card class="w-1/3 flex flex-col justify-between">
            <CardHeader>
                <CardTitle>歌曲</CardTitle>
                <CardDescription>每天一句歌词</CardDescription>
            </CardHeader>
            <CardContent> 窗外的麻雀， 在电线杆杠上多嘴 </CardContent>
            <CardFooter class="">
                <Button class="w-full" @click="() => navigateTo('/sing-songs')">
                    <Check class="mr-2 h-4 w-4" /> Let's Start Singing
                </Button>
            </CardFooter>
        </Card>
        <Card class="w-1/3 flex flex-col justify-between">
            <CardHeader>
                <CardTitle>单词</CardTitle>
                <CardDescription>每天铭记 5 个单词</CardDescription>
            </CardHeader>
            <CardContent>
                Do you know what he knows that you know what we know
            </CardContent>
            <CardFooter class="">
                <Button class="w-full">
                    <Check class="mr-2 h-4 w-4" /> Let's Get Started
                </Button>
            </CardFooter>
        </Card>
        <Card class="w-1/3 flex flex-col justify-between">
            <CardHeader>
                <CardTitle>编程</CardTitle>
                <CardDescription>一天一个功能点</CardDescription>
            </CardHeader>
            <CardContent>
                项目功能分散，功能一点点 BUILD
            </CardContent>
            <CardFooter class="">
                <Button class="w-full">
                    <Check class="mr-2 h-4 w-4" /> Let's Coding
                </Button>
            </CardFooter>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import { Check } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = (addr: string) => {
    router.push(addr)
}
</script>