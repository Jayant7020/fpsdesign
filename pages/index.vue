<script setup>
useHead({
  title: "Fps-Home",
  meta: [
    { name: "description", content: `Test Different FPS Depending on Screen` },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

</script>

<template>
    
        <div class="text-center dark:bg-[#171717]">


          <div class="bg-[#c6bee7] w-full  ">
          <div class="flex items-center justify-between max-w-screen-2xl mx-auto p-14">
            
            <div class="">
              <h1 class="text-[#34237e] text-5xl font-Merriweather mb-4">Play And Run</h1>
              <h1 class="text-[#34237e] text-5xl font-Merriweather mb-4">Different FPS Test</h1>
              <h1 class="text-[#34237e] text-5xl font-Merriweather mb-8">Depends On Screen</h1>

              <p class="text-lg text-[#34237e] font-semibold px-36"><span class="font-bold text-xl"> Warning: </span>  It often returns an incorrect FPS because sometimes an animation frame is skipped when your CPU is busy with other tasks.</p>           
              <div class="mt-8 fpsBox">
                <button class=" py-2 px-14 font-semibold bg-[#34237e] text-white text-lg font-Merriweather shadow-md shadow-[#222]">Play</button>
                <button class=" py-2 px-14 font-semibold bg-[#34237e] text-white text-lg font-Merriweather shadow-md shadow-[#222] ml-6">Run</button>
              </div>
            </div>

            <div class="w-1/2">
              <div class="skew-y-6 w-[350px] h-[450px] rounded-bl-[60px] rounded-tr-[60px] rounded-br-[100px] rounded-tl-[100px] bg-gradient-to-br from-[#aea1eb] to-[#8e78f0] text-center flex flex-col justify-center items-center" style="box-shadow: 9px 10px 12px 0px #222;">
                    <p class="text-2xl font-Merriweather text-[#271e52] mb-5" style="text-shadow: 7px 8px 4px rgba(60,57,57,0.51);">Your Screen Working On</p>
                    <p class="text-9xl font-Merriweather text-[#271e52]" style="text-shadow: 7px 8px 4px rgba(60,57,57,0.51);" >60</p>
                    <p class="text-4xl font-Merriweather text-[#271e52]" style="text-shadow: 7px 8px 4px rgba(60,57,57,0.51);">FPS</p>
              </div>
            </div>
          </div>

          </div>






            <!-- <h1 class="heading text-6xl md:text-8xl font-semibold" style="background: -webkit-linear-gradient(#8d79e6, #34237e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Play And Run <br/>Different FPS Test</h1><br/>
            <p class="mt-3 text-lg dark:text-white "><span class="font-bold"> Warning: </span>  It often returns an incorrect FPS because sometimes an animation frame is skipped when your CPU is busy with other tasks.</p>
            <p class="mt-3 text-xl dark:text-white font-Exo">Click On <span class="underline font-semibold">Run</span> To Get Exact FPS of Screen</p>
            
            <div class="fpsBox flex items-center justify-center my-10">
                <div class="w-[500px] h-40 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#43429c] to-[#130477]">   
                <div class="w-[450px] h-32 rounded-md flex flex-col items-center justify-center bg-[#ffffff33]">
                    <p class="text-2xl text-white font-Exo">Your Screen Working On </p>
                    <p class="text-white font-Exo"><span class="font-bold text-3xl"> 60 </span> FPS</p> 
                </div>
            </div>
            </div>
            <div class="mt-8 fpsBox">
                <button class="rounded-md py-2 px-10 bg-black text-white dark:bg-white dark:text-black font-semibold text-lg font-Exo">Play</button>
                <button class="rounded-md py-2 px-10 bg-black text-white dark:bg-white dark:text-black font-semibold text-lg font-Exo ml-6">Run</button>
            </div> -->


             <!-- ---------------------------------------------------------------------------------- -->






             <!-- ---------------------------------------------------------------------------------------- -->

        <div class="my-20 flex justify-center">
          <div class="mr-48">
            <p class="dark:text-[#8d79e6] text-[#34237e] text-2xl font-bold font-Exo">Number Of Test</p>
            <div class="flex justify-center my-4"> <p class="rounded-lg bg-[#9d8de5] font-bold text-2xl w-20 h-12 pt-2">3</p> </div>
            <div>
                <button class="bg-[#34237e] text-white dark:text-[#34237e] dark:bg-white text-2xl font-bold w-14 h-10 pb-1 rounded-bl-lg rounded-tr-lg">+</button>
                <button class="bg-[#34237e] text-white dark:text-[#34237e] dark:bg-white text-2xl font-bold w-14 h-10 pb-1 rounded-bl-lg rounded-tr-lg ml-2">-</button>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center ">
            <p class="dark:text-[#8d79e6] text-[#34237e] text-2xl font-bold font-Exo">Select Speed</p>
            <div class="flex justify-center my-4"> <p class="rounded-lg bg-[#9d8de5] font-bold text-2xl w-24 h-12 pt-2">250</p> </div>
            <div class="bg-[#34237e] text-white dark:text-[#34237e] dark:bg-white text-2xl font-bold w-28 h-10 pb-1  rounded-bl-lg rounded-tr-lg pt-1">^</div>
         </div>
         </div>

         <div class="w-full h-60 bg-[#8d79e6] dark:bg-[#34237e]">

         </div>

         <div class="dark:text-slate-300 text-slate-950">
    <div class="max-w-screen-2xl m-auto items-center w-full p-2 pb-10">
      <div>
      <h2 class="m-7 flex justify-center font-extrabold text-3xl font-Merriweather text-[#34237e] dark:text-[#8d79e6]">What Is Frame Rate?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat at possimus molestias similique consequuntur ullam non porro asperiores assumenda iste tempore corrupti minus, iusto, hic necessitatibus amet maiores voluptates velit facere quaerat ipsa inventore nisi. Quaerat ducimus illo ipsa accusantium tempora doloremque praesentium veritatis esse inventore numquam? Nemo, consectetur laudantium? Magni voluptatem autem aut error doloribus impedit atque voluptate mollitia. Necessitatibus cum delectus odio ullam fuga, labore architecto modi temporibus, et harum recusandae distinctio inventore, amet alias. Debitis, unde. Distinctio atque quidem animi dolores itaque? Expedita nisi minima molestias deserunt, amet earum ipsa hic ipsam, vel unde officiis eligendi.</p>
      <h2 class="m-7 flex justify-center font-extrabold text-3xl font-Merriweather text-[#34237e] dark:text-[#8d79e6]">What Is The FPS Test?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam excepturi autem, assumenda quaerat ipsum illo tempora sapiente officiis possimus quidem numquam velit vel similique veritatis dignissimos odit tenetur eligendi quo quae quis at obcaecati. Consequuntur sapiente aliquam quam deserunt id laudantium officiis animi ad quae fuga illum minima totam, quibusdam qui, sunt incidunt illo? Eaque tempora placeat iure ratione facilis quaerat quae et amet optio reiciendis iste, fugit voluptatibus eius fugiat. Corporis vel fuga aliquam dolor cum voluptates facilis blanditiis maxime rem. Repudiandae at labore soluta maiores est molestias nesciunt dignissimos magnam id pariatur voluptate error culpa mollitia omnis tenetur, doloremque placeat in totam obcaecati dolorum. Veniam sapiente atque rem animi ad. Distinctio consequuntur beatae aperiam! Corporis veritatis et laboriosam ab, accusantium est, magni hic quam nisi error quaerat architecto eaque nostrum adipisci itaque sequi totam praesentium nulla molestias modi? Porro at animi aperiam sit sed voluptatum beatae debitis.</p> 
     
     
      <h2 class="m-7 flex justify-center font-extrabold text-3xl font-Merriweather text-[#34237e] dark:text-[#8d79e6]">How To Take The FPS Test?</h2>

      <div class="flex md:flex-row flex-col justify-center items-center text-white text-sm font-medium">

        <div class="flex flex-col justify-center items-center text-center w-48 h-48 m-4 p-2 rounded-bl-3xl rounded-tr-3xl bg-[#34237e] border-8 border-[#8d79e6]">
          <img src="~/assets/clickBtn.svg" alt="img" class="w-14"/>
          <p class="text-[#8d79e6] hover:text-white">click On Refresh Button To Get Your Monitor FPS.</p>
        </div>
        <div class="flex flex-col justify-center items-center text-center w-48 h-48 m-4 p-2 rounded-bl-3xl rounded-tr-3xl bg-[#8d79e6] border-8 border-[#34237e]">
          <img src="~/assets/box.svg" alt="img" class="w-14"/>
          <p class="text-[#34237e] hover:text-white">Select The Number Of Frames To Test.</p>
        </div>
        <div class="flex flex-col justify-center items-center text-center w-48 h-48 m-4 p-2 rounded-bl-3xl rounded-tr-3xl bg-[#34237e] border-8 border-[#8d79e6]">
          <img src="~/assets/speed.svg" alt="img" class="w-14"/>
          <p class="text-[#8d79e6] hover:text-white">Modify Frames Speed in Pixel Per Second</p>
        </div>
        <div class="flex flex-col justify-center items-center text-center w-48 h-48 m-4 p-2 rounded-bl-3xl rounded-tr-3xl bg-[#8d79e6] border-8 border-[#34237e]">
          <img src="~/assets/results.svg" alt="img" class="w-14"/>
          <p class="text-[#34237e] hover:text-white">Compare Your Monitor FPS with Real-time Results</p>
        </div>
      </div>

      <h2 class="m-7 flex justify-center font-extrabold text-3xl font-Merriweather text-[#34237e] dark:text-[#8d79e6]">What Is The Snail Test?</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto cumque, aperiam ea, hic repellat fugiat aliquid accusamus nesciunt, eum ad consequatur. Labore atque corrupti magnam dolores sunt voluptates esse qui nobis neque quae cupiditate, necessitatibus, officia laborum consequatur aperiam ullam doloremque, nihil dolorem numquam vero. Ipsam assumenda, nesciunt incidunt perferendis sit quidem libero vel aliquid corporis velit accusamus in facere accusantium quaerat qui vitae temporibus, aspernatur alias quisquam voluptas praesentium! Doloribus praesentium rem fugit velit maiores magni tenetur eum repellendus!</p>
    
    
    
    
    </div>
    </div>
  </div>

        </div>
</template>

<style scoped>


/* .scroll-reveal span {
    color: hsl(0 0% 100% / 0.2);
    background-clip: text;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-image: linear-gradient(90deg, white,white);
    animation: scroll-reveal linear forwards;
    animation-timeline: view(y);
}

.scroll-reveal h2 span {
    animation-range-start: cover 10vh;
    animation-range-end: cover 30vh;

}

.scroll-reveal p span {
    animation-range-start: cover 22.5vh;
    animation-range-end: cover 50vh;

}

@keyframes scroll-reveal {
    to {
        background-size: 100% 100%;
    }
} */


/* ------------------------------------------------------ */
/* .heading{
    animation: heading linear forwards;
    animation-timeline: view();
}

@keyframes heading{
    70%{ opacity: 1;}
    90% { opacity: 0;}
}

.fpsBox{
    animation: mainDivImg-animate linear forwards;
    animation-timeline: view();
}

@media (max-width: 768){
    @keyframes mainDivImg-animate{
    40%{ opacity: 1; scale: 1;}
    85%, 100% { opacity: 0; scale: 1.5;}
}    
}

@keyframes mainDivImg-animate{
    40%{ opacity: 1; scale: 1;}
    95%, 100% { opacity: 0; scale: 1.5;}
} */

</style>
