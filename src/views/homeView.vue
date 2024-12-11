<script setup>
    import allRecette from '../components/allRecette.vue'
    import { computed, onMounted, ref, useTemplateRef } from 'vue';
    import footerComponentVue from '../components/footerComponent.vue';

    const allPost=ref([])
    // all templateRefs
    const vid=useTemplateRef('vid')
    const span=useTemplateRef('span')
    const whatInput=useTemplateRef('whatInput')
    // respond of user in what whatsupp place
    const ownInstantRespond=ref([])
    const respond=ref('')
    const isWriting=ref(false)
    onMounted(()=>{
        fetch("/data.json")
        .then(content=>content.json())
        .then(data=>{
            allPost.value=data
        })
        .catch((err)=>console.log(err))
        computed(()=> vid.value.play())
        // vid.value.play()
    })
    // input animation border
    const removeAnim=()=>{
        span.value.classList.remove('borderAnim')
        span.value.classList.add('hidden')
    }
    // adding user response
    const addRespond=(mess)=>{
        ownInstantRespond.value.push(mess)
        whatInput.value.value=''
    }
    // showing that user is writing
    const inputRespond=()=>{
        isWriting.value=!isWriting.value
    }
</script>
<template>
    <div>
        <!-- loader -->
        <div class="loader h-[80dvh] flex items-center justify-center translate-x-[40vw]" v-if="allPost.length === 0"></div>
        <!--  -->
        <div v-else>
            <div class="bg-white rounded-b-[100px] -z-50">
                <div class=" w-vw h-[calc(100dvh-100px)] bg-1 flex items-center justify-center flex-col">
                <!-- <div class="absolute w-100 h-100 backImage left-0"></div> -->
                <h1 class="md:text-[64px] text-[42px] text-primary font1 m-2 md:m-0 text-center">The way to coffee like a chief</h1>
                <p class="text-[24px] md:w-[70%] w-[90%] text-center">Here are some collections of the coffee cooking methods and techniques that you can implemente in your daily journey</p>
                <div class="w-[200px]">
                    <img src="/coffeeTasse.png" alt="">
                </div>
                
            </div>
            <div id="allrecette" class="mx-5 my-10 m md:m-10 ">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <h2 class="md:text-[42px] text-[32px] color1 font1">Discover all the coffee recetttes and coffee like a chief</h2>
                    <div class="flex w-100 md:justify-center gap-3 ">
                        <div class="w-[100px] md:h-[100px] h-[80px] rotate-12 rounded-lg flex items-center justify-center border-1 shadow-2xl hover:rotate-2 transition duration-300 cursor-pointer">
                            <img src="/coffeetass1.jpg" alt="" class="w-100 h-100 object-cover">
                        </div>
                        <div class="w-[100px]  md:h-[100px] h-[80px] rotate-12 -translate-x- rounded-lg flex items-center justify-center border-1 shadow-lg hover:rotate-2 transition duration-300 cursor-pointer">
                            <img src="/coffeetass2.avif" alt="" class="w-100 h-100 object-cover">
                        </div>
                        <div class="w-[100px]  md:h-[100px] h-[80px] rotate-12 rounded-lg flex items-center justify-center border-1 hover:rotate-2 transition duration-300 cursor-pointer">
                            <img src="/coffeetass3.avif" alt="" class="w-100 h-100 object-cover">
                        </div>
                    </div>
                </div>
                    
                <div class="my-5">
                <!-- coffee recettes -->
                <allRecette :data="allPost" class="my-4"/> 
                </div>
            </div>
            <!-- donate section -->
            <div class="mx-5 my-10 m md:m-10 flex flex-col md:flex-row relative">
                <div class="flex flex-col gap-3  z-50">
                    <h2  class="font1 md:text-[42px] text-[32px] text-white md:text-black md:text-left text-center">
                        Support the coffee communauty with 5$ and follows our youtube channel
                    </h2>

                <div class="flex gap-3 justify-center md:justify-start">
                        <button class="py-1 px-3 w-fit md:bg-primary/50 shadow-lg shadow-primary/50 rounded-xl text-primary font-bold hover:scale-95 transition duration-300 bg-white">Donate 5$</button>
                        <a href="https://www.youtube.com" class="py-1 px-3 w-fit bg-red-700/60 shadow-lg shadow-red-700/50 rounded-xl text-white font-bold  hover:scale-95 transition duration-300 ">Follow our youtube channel</a>
                </div>
                </div>
                <div class="bg-black md:rounded-l-full overflow-hidden border-[5px] border-primary/50 md:relative absolute md:top-0 -top-2 -bottom-2 -left-2 -right-2 md:right-0 lg:left-0 md:bottom-0 z-10 md:z-50 brightness-50 opacity-90 ">
                    <video src="/vid1.mp4" autoplay loop class="w-full h-full object-cover" ref="vid"></video>
                </div>
            </div>

            <!-- let in touch section -->
            <div class="relative grid lg:grid-cols-2 md:grid-cols-1 lg:h-screen h-fit md:overflow-visible overflow-hidden md:my-10 mt-10 bg-transparent">
                <div class="flex flex-col justify-center items-end">
                    <div class=" lg:h-[60%] lg:w-[90%] m-auto h-[100%] w-[90%] rounded-2xl relative overflow-hidden bac-1">
                        <div class="md:ml-5 ml-2 flex flex-col gap-2">
                            <div>
                                <h2 class="font1 md:text-[42px] text-[32px]">Let get in touch</h2>
                                <small>leave us a message </small>
                            </div>
                            <form action="" class="grid gap-1">
                                <div class="form-group border w-fit grid px-1 py-[5px] border-primary rounded-lg bac-1">
                                    <label for="" class="text-sm text-slate-700">Email</label>
                                    <input type="email" placeholder="ecrivez votre email" class="bg-transparent text-slate-700 placeholder:text-slate-700 focus:outline-none">
                                </div>
                                <div class="form-group border w-fit grid px-1 py-[5px] border-primary rounded-lg bac-1">
                                    <label for="" class="text-sm text-slate-700">Email</label>
                                    <textarea name="" id="" cols="30" rows="2" class="bg-transparent text-slate-700 placeholder:text-slate-700 focus:outline-none">Write your message</textarea>
                                </div>
                                <button class="py-1 px-3 w-fit bg-green-700/50 shadow-lg shadow-primary/50 rounded-xl text-white font-bold hover:scale-95 transition duration-300">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center lg:-translate-y-[0%] md:-translate-y-[20%] -translate-y-[20%] md:overflow-auto overflow-hidden md:mb-0 my-6">
                    <div class="bg-black/80 w-[90%] md:h-[100%] lg:h-[80%] md:w-[86%] lg:w-[90%] rounded-2xl relative overflow-hidden flex flex-col m-auto">
                        <div class="absolute w-100 h-100 backPattern top-0 left-0 z-30"></div>
                        <h2 class="text-[42px] lg:self-end self-start md:m-5 mx-5 my-2 text-white font1 flex flex-col">
                            <span>In one time</span>
                            <span class="-translate-y-4">In one place</span>
                        </h2>
                        <p class="text-white lg:self-end self-start md:m-1 w-1/2 mx-4 my-1">
                            Follow our new letter to be aware of all new feature in our blog.
                        </p>
                        <div class="lg:self-end self-start">
                            <form action="" class="w-fit bg-white mx-2 my-1 h-[40px] rounded-full flex items-center md:p-1 p-0 box-border">
                                <input type="email" placeholder="Your email" class="bg-transparent placeholder:text-slate-700 z-40 focus:outline-none pl-[5px]">
                                <button type="submit" class="bg-black text-white py-[5px] px-1 rounded-full hover:scale-95 z-40 font-bold font1 transition duration-200">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- phone design -->
                <div class="absolute rotate-12 lg:left-1/3 backPhone z-50 md:left-[50%] md:block md:top-0 
                top-[85%]">
                <div class="my-10 mx-2  h-[75%] flex flex-col relative">
                        <div class="px-1 py-[8px] mx-1 w-[80%] backwhat self-end cursor-pointer hover:scale-95 transition duration-300">
                            Hello there,thanks for submission
                        </div>
                        <div class="p-2 mx-1 w-[80%] h-fit backwhat self-end cursor-pointer hover:scale-95 transition duration-300">
                            <div class="h-10 w-full pt-1">
                                <img src="/coffeetass1.jpg" alt="" class="h-full w-full rounded-md object-cover">
                            </div>
                            <a href="https://youtube.com" class="text-sm text-blue-700 hover:text-blue-700/70">Follow our youtube channel</a>
                        </div>

                        <!-- render dynamique user responde -->
                        <transition name="fadeAnime">
                            <div v-if="ownInstantRespond.length>0" class="mt-2">
                            <div class=" mt-1 px-1 py-[8px] mx-1 w-[80%] bg-white rounded-lg self-end cursor-pointer hover:scale-95 transition duration-300" v-for="(respond,index) in ownInstantRespond" :key="index">
                            {{ respond }}
                            </div>
                        </div>
                        <div v-else>
                            <div v-if="isWriting" class="text-sm m-2 text-slate-500">You are writting ...</div>
                        </div>
                        </transition>

                        <div class="flex justify-between gap-[3px] absolute bottom-0 w-100 box-border">
                            <div class="bg-white w-[100%] rounded-full flex items-center pl-2">
                                <span class="border-l border-black block w-[2px] h-[24px] borderAnim" ref="span"></span>
                                <input type="text" placeholder="Message" class="focus:outline-none" ref="whatInput" @focus
                                ="removeAnim" v-model="respond" @keydown.enter="addRespond(respond)" @keyup="inputRespond">
                            </div>
                            <button class="bg-secondary p-[10px] rounded-full  hover:scale-95 transition duration-300" @click="addRespond(respond)">
                                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M67.25 12.3335L29.625 24.8335C4.33333 33.2918 4.33333 47.0835 29.625 55.5002L40.7917 59.2085L44.5 70.3752C52.9167 95.6669 66.75 95.6669 75.1667 70.3752L87.7083 32.7918C93.2917 15.9168 84.125 6.70851 67.25 12.3335ZM68.5833 34.7502L52.75 50.6668C52.125 51.2918 51.3333 51.5835 50.5417 51.5835C49.75 51.5835 48.9583 51.2918 48.3333 50.6668C47.125 49.4585 47.125 47.4585 48.3333 46.2502L64.1667 30.3335C65.375 29.1252 67.375 29.1252 68.5833 30.3335C69.7917 31.5418 69.7917 33.5418 68.5833 34.7502Z" fill="#FEFEFE"/>
                                </svg>
                            </button>
                        </div>
                </div>

                </div>
            </div>

            </div>

            <!-- footer -->
            <div class="w-100 h-[70dvh] backDesigne pt-6 lg:pt-5">
                <!-- <div class="absolute top-0 left-0 backPattern"></div> -->
                <footerComponentVue class="footerLink"/>
                <div class="footerTitle absolute -bottom-1 md:-bottom-3 w-full flex md:justify-between md:flex-row flex-col">
                    <div class="flex items-center gap-3">
                        <h2 class=" text-white font1 md:text-[52px] text-32 m-0">Chocolate Coffee</h2>
                        <p class="text-creme m-0 text-[8px] md:text-8">Developped with ❤️ copyright {{ new Date().getFullYear() }}</p>
                    </div>  
                    <button class="bg-secondary px-2 py-[8px] rounded-lg h-fit mr-3 hidden md:block text-white">Donate 👌</button>
                </div>
                
            </div>
       </div>
    </div>
</template>
<style scoped>
/* vue transition */
    .fadeAnime-enter-active,.fadeAnime-leave-active{
        transition: all 0.3s ease-out;
    }
    .fadeAnime-enter-from,.fadeAnime-leave-to{
        opacity: 0;
        /* transform: translateY(100px); */
    }
    .fadeAnime-enter-from{
        transform: translateY(-10px);
    }
/*  */
.backDesigne>.footerLink{
    z-index: 55555555555 !important;
}
.backDesigne{
    background-image: url(/pattern.png), linear-gradient(#393737, #1b1b1b);
    background-position: 0 0, 0 0;
    background-size: 80px 80px, auto;   
    margin-top: -64px;
    /* padding-top: 50px; */
    position: sticky;
    bottom: 0;
    overflow: hidden;
    z-index: -55555;
}
.bac-1{
    background: #c6af9ed7;
}
.backPattern{
    background: url(/pattern.png);
}
.borderAnim{
    animation: borderAnim .8s ease-out infinite;
}
@keyframes borderAnim {
    from{
        opacity: 1;
    }
    to{
        opacity: 0.1;
    }
}
.backPhone{
    background: url(/phone.png);
    width: 300px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
}
.backwhat{
    background: url(/backWhat.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
}
.font1{
    font-family: 'Dosis',sans-serif;
}
.bg-1{
    position: relative;
}
.bg-1::before{
    content: '';
    display: block;
    top:0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #d2691e3b;
    filter: blur(10px);
    position: absolute;
}
.color1{
    color:#0d0600;
}
.border-1{
    border: 5px solid #c6af9ed7;
}  
.backImage{
    background: linear-gradient(45deg,rgba(0, 0, 0, 0.772),rgba(0, 0, 0, 0.772)),url(/vap.png);
    background-repeat: no-repeat;
    background-position:left;
    background-size: 100%;
    opacity: .5;
    filter: blur(10px);

    /* z-index: -1; */
} 
</style>