<script setup>
import FacebookIcon from './icons/facebookIcon.vue';
import InstagramIcon from './icons/instagramIcon.vue';
import XIcon from './icons/xIcon.vue';

// import { RouterView, RouterLink } from 'vue-router';
</script>
<template>
    <div class="container z-50 absolute">
        <div class="flex md:p-5 md:justify-between md:flex-row justify-start flex-wrap gap-5 p-3">
            <div class="bg-white w-fit h-fit">
                <div class="w-[100px] h-[100px] rotate-12 rounded-lg flex items-center justify-center border-1 shadow-2xl hover:rotate-2 transition duration-300 cursor-pointer">
                        <img src="/coffeetass1.jpg" alt="" class="w-100 h-100 object-cover">
                </div>
            </div>
            <div class="flex flex-col footer-nav text-creme font1">
                <h2 class="pb-3 font-bold text-[24px]">Navigate</h2>
                <router-link to="/" class="text-8 cursor-pointer hover:text-32 transition duration-300"><span>About</span></router-link>
                <router-link to="/" class="text-8 cursor-pointer hover:text-32 transition duration-300">Ressources</router-link>
                <router-link to="/" class="text-8 cursor-pointer hover:text-32 transition duration-300">Contact</router-link>
                <router-link to="/" class="text-8 cursor-pointer hover:text-32 transition duration-300">Connection</router-link>
            </div>

            <div class="flex flex-col links text-creme font1">
                <h2 class="md:pb-3 pb-0 font-bold text-[24px]">Social links</h2>
                <div class="flex md:flex-col flex-row md:gap-0 gap-1">
                    <a href="" class="flex items-center gap-1"><InstagramIcon /> <span class="md:block hidden">Intagram</span></a>
                <a href="" class="flex items-center gap-1"><FacebookIcon/> <span class="md:block hidden">Facebook</span></a>
                <a href="" class="flex items-center gap-1"><XIcon/> <span class="md:block hidden">X</span></a>
                <a href="" class="flex items-center gap-1">Whatsapp</a>
                </div>
                
            </div>
        </div>
    </div>
    <!-- <RouterView/> -->
</template>
