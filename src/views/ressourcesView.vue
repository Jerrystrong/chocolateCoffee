<template>
<div>
    <div class="flex md:flex-row flex-col md:m-0 md:gap-[10px] bg-white w-full p-2 pb-5 rounded-3xl">
        <allRecette :data="allPost" class=" md:w-[100%] w-[90%] mx-auto"/>
        <div class="lg:w-[23%] md:w-[30%] md:border-l md:border-t-0 border-t md:pt-0 pt-1 border-primary/50 lg:pl-1 md:pl-[5px] h-fit  mt-1 md:mt-0">
            <div class="md:w-full bg-primary/60 h-[300px] rounded-lg overflow-hidden">
                <img src="/coffeetass1.jpg" alt="coffee-image" class="h-[60%] object-cover w-full">
                <div class="p-1">
                    <h2 class="font1">Get premuim coaching course</h2>
                    <button type="submit" class="bg-green-500 w-fit py-[5px] px-1 rounded-lg text-green-50 font-bold shadow-sm shadow-green-700/50 ring-offset-5 ring-5 ring-green-700/50 hover:scale-95 transition duration-300 mt-[10px]">Enroll now</button>
                </div>
            </div>

            <p class="font1 pt-1">
                Taking this course is the way to supporting our communauty, and become member of our communauty
            </p>
        </div>
    </div>
    <div class="w-100 h-[70dvh] backDesigne pt-6 lg:pt-5">
        <!-- <div class="absolute top-0 left-0 backPattern"></div> -->
        <FooterComponent class="footerLink"/>
        <div class="footerTitle absolute -bottom-1 md:-bottom-3 w-full flex md:justify-between md:flex-row flex-col">
            <div class="flex items-center gap-3">
                <h2 class=" text-white font1 md:text-[52px] text-32 m-0">Chocolate Coffee</h2>
                <p class="text-creme m-0 text-[8px] md:text-8">Developped with ❤️ copyright {{ new Date().getFullYear() }}</p>
            </div>  
            <button class="bg-secondary px-2 py-[8px] rounded-lg h-fit mr-3 hidden md:block text-white">Donate 👌</button>
        </div>
    </div>
</div>
</template>
<script setup>
import allRecette from '@/components/allRecette.vue';
import FooterComponent from '@/components/footerComponent.vue';
import { onMounted, ref } from 'vue';

const allPost=ref(null)
    onMounted(()=>{
        fetch("/data.json")
        .then(content=>content.json())
        .then(data=>{
            allPost.value=data
        })
        .catch((err)=>console.log(err)) 
    })

</script>