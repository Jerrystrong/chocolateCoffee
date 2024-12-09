<script setup>
import CommentIcon from '@/components/icons/commentIcon.vue';
import LeftIcon from '@/components/icons/leftIcon.vue';
import LikeIcon from '@/components/icons/likeIcon.vue';
import UnlikeIcon from '@/components/icons/unlikeIcon.vue';
import ViewerIcon from '@/components/icons/viewerIcon.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route=useRoute()
const id=route.params.id
console.log(id)

async function fetchSinglePost(idOost){
    const fetchDat=await fetch("/data.json")
    /**
     * data Arrays
     */
    const data= await fetchDat.json()
    const post= data.find(post=> post.id==idOost)
    return post
}
const post=ref([])
const interrestedPost=ref([])
onMounted(async ()=>{
    post.value= await fetchSinglePost(id)
    // interrestedPost
    const fetchDat=await fetch("/data.json")
    const data= await fetchDat.json()
    interrestedPost.value=data.filter(post => post.id<3)
})
watch(()=>route.params.id,async (newValue)=>{
    post.value= await fetchSinglePost(newValue)
})

</script>
<template>
    <div class="w-[90%] h-fit m-auto flex gap-3 md:flex-row flex-col">
        <div class="md:w-[70%] h-100 p-1 w-full">
           <div v-if="post.length <=0">
                <p>En attente de donnees ....</p>
            </div>
            <div v-else>
                <div class="author relative">
                    <small class="text-black/55 font-bold absolute -top-[10px] left-1">{{ post["date"] }}</small>
                    <h1 class="text-[56px] text-primary font1">{{ post["title"] }}</h1>
                    <div class="flex items-center gap-1">
                        <img :src="post.author?.profil?'/'+post.author?.profil:'/coffeetass3.avif'" alt="" class="w-4.5 h-4.5 object-cover rounded-full saturate-150">
                        <div>
                            <small class="text-primary">Author</small>
                            <p class="font1">{{ post.author?.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="post-image py-3">
                    <img :src="'/'+post.bannerImage" alt="post-image" class="w-full h-[300px] object-cover rounded-lg">
                </div>
                <div class="textPost text-justify">
                    {{ post.procedure }}
                </div>
                <div class="flex gap-[10px] mt-3">
                    <div class="flex items-center gap-[5px] text-blue-700 font1"><LikeIcon/> {{ post.author?.feed?.like }}</div>
                    <div class="flex items-center gap-[5px] text-red-700 font1"><unlikeIcon/> {{ post.author?.feed?.unlike }}</div>
                    <div class="flex items-center gap-[5px] text-yellow-700 font1"><CommentIcon/> {{ post.author?.feed?.commente?.number }}</div>
                    <div class="flex items-center gap-[5px] text-yellow-500 font1"><ViewerIcon/> {{ post.author?.feed?.viewer }}</div>
                    
                </div>
                    
            </div>
        </div>
        <div class="md:w-[30%] h-100 p-1 w-fit">
            <p class="mb-2 font-bold">Simular Post</p>
            <div v-if="interrestedPost.length<=0">
                <p>Waiting for data ..</p>
            </div>
            <div v-else class="grid gap-3 bac-1 rounded-lg p-1">
                <div v-for="postI in interrestedPost" :key="postI"  class="bg-black/10 rounded-md overflow-hidden ">
                    
                    <div class="flex gap-1">
                        <img :src="'/'+postI.bannerImage" alt="post-img" class="w-10 h-[110px] object-cover">

                        <div>
                            <h2 class="font1 border-b border-primary">{{ postI.title }}</h2>
                            <p class="text-black/50  w-full h-5 overflow-clip">{{ postI.procedure }}</p>
                            <router-link :to="'/post/'+postI.id" class="text-blue-600 flex justify-between items-center px-[5px]">Read the post <LeftIcon/></router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="commentaire grid gap-[10px]">
                <p class="my-2 font-bold">Commentaires</p>
                <div v-for="(commente,index) in post.author?.feed?.commente?.message" :key="index" class="bg-primary/30 p-2 rounded-md">
                    <p>{{ commente.text }}</p>
                    <p>{{ commente.date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>