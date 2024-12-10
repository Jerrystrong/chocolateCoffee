<template>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 md:gap-5  cursor-pointer lg:gap-2 gap-5">
        <div v-for="(recette,index) in data" :key="index" class="w-[100%] lg:w-[80%] md:w-[100%] bac-1 shadow-lg shadow-primary/50 rounded-xl border-1 relative hover:scale-105 transition duration-300">
            <div class="absolute w-100 -top-1 -left-1 -bottom-1 border  border-1 -z-50 rounded-l-xl"></div>
                <div class="w-[100%] h-[200px] overflow-hidden rounded-t-xl">
                    <img :src="recette.bannerImage" alt="" class="w-[100%] h-[100%] object-cover brightness-50 hover:brightness-100 hover:scale-105 cursor-pointer transition duration-300 rounded-t-xl">
                </div>
                <div class="p-2 grid gap-1">
                    <h2 class="text-[24px] text-primary font-bold border-b font1 border-b-primary">{{ recette.title }}</h2>
                    <p class="text-black overflow-clip h-10 text-justify"> {{ recette.procedure }}</p>
                    <div id="authorSide" class="flex justify-between">
                        <div class="flex items-center gap-1">
                            <img :src="recette.author?.profil?'./'+recette.author?.profil:'./coffeetass3.avif'" alt="" class="w-4.5 h-4.5 object-cover rounded-full saturate-150">
                            <div>
                                <small class="text-primary">Author</small>
                                <p class="font1">{{ recette.author?.name }}</p>
                            </div>
                        </div>
                        <div>
                            <small class="text-primary">Feeds</small>
                           <div class="flex gap-[10px]">
                                <div class="flex items-center gap-[5px] text-blue-700 font1"><LikeIcon/> {{ recette.author?.feed?.like }}</div>
                                <div class="flex items-center gap-[5px] text-red-700 font1"><unlikeIcon/> {{ recette.author?.feed?.unlike }}</div>
                           </div>
                        </div>
                    </div>
                    <router-link :to="'post/'+recette.id" class="py-[10px] px-1 rounded-lg bac-t-2 text-center" >Read the post</router-link>
                    
                </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
import unlikeIcon from './icons/unlikeIcon.vue';
import LikeIcon from './icons/likeIcon.vue';

    defineProps({
        data:Object
    })
</script>
<style scoped>
.color1{
    color:#0d0600;
}
.bac-1{
    background: #c6af9ed7;
}
.border-1{
    border-color:#c6af9ed7;
}
.border-1{
    border: 1px solid #c6af9ed7;
}  
.bac-t-2{
  border:1px solid #d2691e3b;
  background: #fff3ea;
  color:rgba(89, 53, 27, 0.724);
  transition: all .4s ease-out; 
}
.bac-t-2:hover{
    background: rgba(210, 105, 30, 0.231);
    color:#0d0600;
    transition: all .4s ease-out; 
}
.asChild::before{
    content: 'sdsdsd';
    display: block;
    width:100%;
    height: 100%;
    background: transparent;
    border-left: 1px solid #c6af9ed7;
}
</style>