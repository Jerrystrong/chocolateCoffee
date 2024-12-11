<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// menu logic
const menuState=ref(false)
const toggleMenu=()=>{
  menuState.value=!menuState.value
}

// ==========
</script>

<template>
 <header class="flex items-center justify-between p-1 relative z-50">
  <!-- <img alt="Vue logo" src="@/assets/logo.svg" class="w-4"/> -->
  <img alt="Vue logo" src="/logo.png" class="w-[150px]"/>
  <div class="lg:flex items-center justify-around p-[8px] px-4 w-fit rounded-xl bac-t hidden">

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav class="flex gap-2">
        <RouterLink to="/">Home</RouterLink>
        <router-link to="/about/" class="hover:text-primary transition-all">About</router-link>
        <router-link to="/ressources/" class="hover:text-primary transition-all">Ressources</router-link>
        <router-link to="/contact/" class="hover:text-primary transition-all">Contact</router-link>
      </nav>
    </div>
  </div>
  <!-- button menu -->
  <button><img src="@/assets/menu.png" alt="menu-button" class="lg:hidden w-[30px]" @click="toggleMenu"></button>
  <!-- connection button -->
  <div class="lg:flex hidden">
      <router-link to="/login" class="bac-t-2 p-[8px] px-3 rounded-lg">Connection</router-link>
  </div>
  <!-- mobile menu -->
  <transition name="fadeOut">
      <div class="lg:hidden fixed left-0 top-0 w-screen h-dvh cursor-pointer bac-t" v-if="menuState" @click="toggleMenu">
        <div class="w-fit bg-white p-3 px-4 h-full flex flex-col gap-3">
          <img alt="Vue logo" src="/logo.png" class="w-[150px]"/>
          <nav class="flex gap-2 flex-col">
            <RouterLink to="/" class="text-[32px] hover:text-primary transition-all text-primary">Home</RouterLink>
            <RouterLink to="/about/" class=" hover:text-primary transition-all hover:text-[32px]">About</RouterLink>
            <RouterLink to="/ressources/" class="hover:text-primary transition-all  hover:text-[32px]">Ressources</RouterLink>
            <RouterLink to="/contact/" class="hover:text-primary transition-all  hover:text-[32px]">Contact</RouterLink>
            <router-link to="/login" class="bac-t-2 p-[8px] px-3 rounded-lg w-fit">Connection</router-link>
          </nav>
        </div>
      </div>
  </transition>
 </header>
  <RouterView />
</template>

<style scoped>
/* focus link effect */
.router-link-active{
  color:#7b593a;
}
.bac-t{
  background: #d2691e3b;
  /* background: #542401; */
}
.bac-t-2{
  border:1px solid #d2691e3b;
  background: #fff3ea3b;
  color:rgba(89, 53, 27, 0.724);
  transition: all .4s ease-out; 
}

.bac-t-2:hover{
  background: rgba(210, 105, 30, 0.231);
  color:#0d0600;
  /* color:#7b593a; */
  transition: all .4s ease-out; 
}
.fadeOut-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.fadeOut-leave-to{
  opacity: 0;
  transform: translateX(0px);


}
.fadeOut-enter-active,.fadeOut-leave-active{
  transition: .4s;
}
</style>
