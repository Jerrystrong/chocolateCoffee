<template>
    <div class="w-full h-[80vh] flex justify-center md:items-center items-center">
        <div class="bg-primary/45 md:w-[60%] w-[80%] md:h-[80%] h-fit rounded-xl grid md:grid-cols-2 overflow-hidden gap-1">
            <div class="md:block hidden">
                <img src="/coffeetass1.jpg" alt="coffee-icon" class="w-full h-full object-cover">
            </div>
            <div class="p-1">
                <h1 class="md:text-[32px] text-[24px] font1 md:text-left text-center">Contact Page</h1>

                <form action="" class="m-2 grid gap-1">
                    <div class="form-group border w-full grid px-1 py-[5px] border-primary rounded-lg bac-1">
                        <label for="" class="text-sm text-slate-700">Email</label>
                        <input type="email" placeholder="ecrivez votre email" class="bg-transparent text-slate-700 placeholder:text-slate-700 focus:outline-none">
                    </div>

                    <div class="form-group border w-full grid px-1 py-[5px] border-primary rounded-lg bac-1">
                        <label for="" class="text-sm text-slate-700">Email</label>
                        <textarea name="" id="" cols="30" rows="2" class="bg-transparent text-slate-700 placeholder:text-slate-700 focus:outline-none">Write your message</textarea>
                    </div>

                    <button type="submit" class="bg-green-500 w-fit py-[10px] px-1 rounded-lg text-green-50 font-bold shadow-sm shadow-green-700/50 ring-offset-5 ring-5 ring-green-700/50 hover:scale-95 transition duration-300">Send message</button>
                    <div class="flex gap-1">
                        <div class="text-red-700/85 ">
                            <InstagramIcon/>
                        </div>
                        <div class="text-black/65">
                            <XIcon/>
                        </div>
                        <div class="text-blue-700/95">
                            <FacebookIcon/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
       
    </div>
</template>
<script setup>
import FacebookIcon from '@/components/icons/facebookIcon.vue';
import InstagramIcon from '@/components/icons/instagramIcon.vue';
import XIcon from '@/components/icons/xIcon.vue';

</script>