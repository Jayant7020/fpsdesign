<script setup>
 useHead({
   title: 'Fps-Contact Us',
   meta: [
     { name: 'description', content: `Test Different FPS Depending on Screen` }
   ],
   htmlAttrs: {
       lang: 'en'
     }
 });

</script>

<template>
  <div class="dark:bg-[#121212] bg-white text-slate-800  dark:text-slate-300">

    <div class="max-w-screen-lg items-center flex md:flex-row flex-col justify-around m-auto p-3">
       <div class="md:w-1/2 md:p-6 md:mr-10 text-center">
           <h1 class="heading text-6xl md:text-8xl font-semibold pb-2"
          style="
            background: -webkit-linear-gradient(#8d79e6, #34237e);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          ">Contact Us</h1>
           <p class="text-lg">Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.</p>
        </div> 

    <div class="mt-12 mb-20 md:w-1/2 w-full">
      <form @submit.prevent class="flex flex-col px-6 py-10 rounded-md border-[1px] border-[#8d79e6] dark:bg-[#222222] bg-[#ececec]">
        <input autocomplete="off" id="fname" name="fname" class="dark:placeholder:text-slate-300 border-b h-12 pl-6 w-full mb-6 dark:bg-[#222222] bg-[#ececec] dark:text-white text-slate-900 placeholder-slate-900 border-[#8d79e6] focus:outline-none focus:border-[#8d79e6] focus:ring-[#8d79e6] rounded-md focus:ring-1" placeholder="Your Name"/>  
        <input autocomplete="off" id="email" name="email" class="dark:placeholder:text-slate-300 border-b h-12 pl-6 w-full mb-6 dark:bg-[#222222] bg-[#ececec] dark:text-white text-slate-900 placeholder-slate-900 border-[#8d79e6] focus:outline-none focus:border-[#8d79e6] focus:ring-[#8d79e6] rounded-md focus:ring-1" placeholder="Your Email"/>
        <input autocomplete="off" id="phone" name="phone" class="dark:placeholder:text-slate-300 border-b h-12 pl-6 w-full mb-6 dark:bg-[#222222] bg-[#ececec] dark:text-white text-slate-900 placeholder-slate-900 border-[#8d79e6] focus:outline-none focus:border-[#8d79e6] focus:ring-[#8d79e6] rounded-md focus:ring-1" placeholder="Your Phone"/>
        
        <div class="mb-6">
           <textarea autocomplete="off" id="msg" name="msg" rows="6" placeholder="Your Message" class="dark:placeholder:text-slate-300 border w-full py-3 px-[14px] dark:bg-[#222222] bg-[#ececec] dark:text-white text-slate-900 placeholder-slate-900 border-[#8d79e6] focus:outline-none focus:border-[#8d79e6] focus:ring-[#8d79e6] rounded-md focus:ring-1"></textarea>
        </div> 
        
        <button class="h-12 w-36 text-lg rounded-md bg-[#34237e] text-white font-Mukta">Send Message</button>
      </form>
     </div>

    </div>

  </div>
</template>
