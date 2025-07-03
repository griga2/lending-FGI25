<script setup>
import { inject, onMounted } from 'vue';
import { useEventsStore } from '../../store/index.js'
import { storeToRefs } from 'pinia';
const mobile = navigator.maxTouchPoints > 0 && 'orientation' in window
const store = useEventsStore();
const {
    aboutEvents,
    aboutFestival
} = storeToRefs(store);


const scrollToSection = (section) =>  {
      let element;
      if(section == 'aboutEvents') element = aboutEvents.value;
      if(section == 'aboutFestival') element = aboutFestival.value;
      console.log(element, 'scroll')

      if (element) {
        element.scrollIntoView({ behavior: 'smooth',  });
      }
    }
</script>

<template>
    <header :style="{ height: !mobile? '120px' : '60px', padding: mobile? '5px' : '20px',}">
        <img src="../../assets/Frame 4237.svg" :style="{ height:!mobile? '72px' : '42px'}">

        <section class="bts_row">
            <button @click="scrollToSection('aboutFestival')" :style="{
                'font-size': !mobile? '15px' : '8px',
            }">
                О нас
            </button>
            <button @click="scrollToSection('aboutEvents')" :style="{
                'font-size': !mobile? '15px' : '8px',
            }">
                Все мероприятия
            </button>
        </section>
    </header>
    <RouterView></RouterView>
</template>


<style scoped>

header{
    width: calc(100vw );
    /* height: 120px; */
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* border: 1px black solid; */
    position: fixed;
    background-color: white;
    margin-left: 0;

    z-index: 2;
}

button{
    background-color: white;
    border: none;
    font-family: Montserrat-Regular;
}

.bts_row{
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-right: 60px
}

</style>