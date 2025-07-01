<script setup>
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import RoadMap from './components/RoadMap.vue';
import { storeToRefs } from 'pinia'
import {useEventsStore} from '../../store/index.js'

const store = useEventsStore();
const {
    events
} = storeToRefs(store)

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".event_block");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Добавляем класс при появлении в зоне видимости
        } else {
          entry.target.classList.remove("active"); // Убираем класс, если элемент скрыт
        }
      });
    },
    {
      threshold: 0.5, // Срабатывает, когда 50% элемента в зоне видимости
      rootMargin: "0px", // Можно добавить отступы (например, "100px" для раннего срабатывания)
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element); // Наблюдаем за каждым элементом
  });
});

const day_counter = ref(0)
const getEventDate = (event) => {
            // maninamev:'Николай Александров',
            // date:3,
            // mounth: 0,
            // time: '18:00',
            // name: 'Русский язык - дорога к Богу',
            // desp: 'Беседа',
            // img: 'AlexandrowImg'
    let m;
    if (event.mounth == 0) m='июля'
    if (event.mounth == 1) m='августа'
    if (event.mounth == 2) m='сентября'
    return `${event.date} ${m}`.toUpperCase()
}
</script>

<template>
    <main class="main">
        <section class="mainText">
            <img src="../../assets/mainNameText.svg">
            <img src="../../assets/TwoMainText.svg">
        </section>
        <section class="aboutFestival">
            <article style="display: flex; padding: 200px 200px 0px 200px; flex-direction: column; gap: 200px;" class="left">
                <h2> О фестивале</h2>
                <p style="word-wrap: break-word;">
                    Фестиваль городских историй «Трамвай 13» – летний проект, посвященный исследованию Новосибирска через призму литературы и искусства. Центральная площадка фестиваля – Книжное пространство в сквере «Тринадцатый трамвай». 
                </p>
                <p style="word-wrap: break-word;">
                    Цель фестиваля – собрать творческое сообщество, вдохновить на создание новой городской прозы и создать уникальный сборник, отражающий дух современного Новосибирска. 
                </p>
                <p style="word-wrap: break-word;">
                    Итогом фестиваля станет сборник городской прозы, презентация которого пройдёт в библиотеках города Новосибирска в 2026 году
                </p>
            </article>
            <article class="right">
                <img src="../../assets/image1.jpg" width="900px" alt="">
            </article>
        </section>
        <h2>Программа мероприятий</h2>
        <section>
            <RoadMap></RoadMap>
        </section>
        <section style="background-color: #303030; width: 100%; padding: 100px; display: flex; flex-direction: column; gap: 40px">
            <section v-for="event in events.map((el,) => { el = {...el, day_counter: day_counter}; day_counter += 1; console.log(el); return el})" :class="{lefte: event.day_counter % 2 == 0, righte: event.day_counter % 2 != 0}" :key="event.name" class="event_block">
                <article style="width: 50%;" class='event_text_block'>
                    <h2 class="event_amin_name">{{ event.maninamev.toUpperCase() }} <br> <span class="event_time">{{ event.time }}</span> </h2>
                    <article>
                        <h2 class="event_name">{{ event.name }}</h2>

                        <h2 class="event_desp_name">{{ event.desp }} </h2>   
                         
                    </article>
                    
                </article>
                <article style="width: 50%; padding: 15px">
                    <img :src="'src/assets/' + event.img + '.png'" style="object-fit: cover;" height="100%" width="100%">
                    <!-- <img src="../../assets/AlexandrowImg.png" style="border: 1px solid black;" height="100%" width="100%"> -->
                     <span class="event_date">{{ getEventDate(event) }}</span>
                </article>
            </section>
        </section>

        <!-- <section class="goEventForm">
            <article style="display: flex; flex-direction: column; gap: 200px; background-color: #D9D9D9; border-radius: 30px; width: 799px; height: 422px;" class="left">
                
            </article>
            <article class="right" >
                <img src="../../assets/Figure1.svg" style="position: relative; left: -70px; top: -70px" alt="">
            </article>
        </section> -->

        <section>
            <h2>
                Спонсоры фестиваля
                
            </h2>
            <img src="../../assets/Logs.svg">
        </section>

        <footer>

         <img src="../../assets/Frame 4237.svg" height="78">

         <section class="bts_col">
            <button>
                Мы в телеграмме
            </button>
            <button>
                Мы в вконтакте
            </button>
            <button>
                Юридическая информация 
            </button>
        </section> 

        <section class="bts_row">
            <button>
                О нас
            </button>
            <button>
                Все мероприятия
            </button>
            <button>
                Карта событий
            </button>
            <button>
                Принять участие
            </button>
        </section>

    </footer>
    </main>
    
</template>

<style scoped>

.event_name{
    font-size: 35px;
}

.event_amin_name{
    font-size: 58px;
}

.event_time{
    font-size: 90px;
    margin-left: 10px;
    font-weight: 700;
    position: relative;
    top: -20px;
    left: -10px;
}
.event_date{
    position: relative;
    font-family: Montserrat Black;
    color: white;
    font-size: 85px;
    top: -85px;
    left: 10px;
    width: 300px;
    word-wrap: inherit;
}
.lefte{ 
/* transform: translateX(-800px); Сдвигаем элемент влево за границу */
/* transition: opacity 0.5s ease, transform 0.7s ease; Плавные переходы */
flex-direction: row;
}

.active {
  transform: translateX(0); /* Возвращается на место */
}

.righte{ 
/* transform: translateX(800px); Сдвигаем элемент влево за границу */
/* transition: opacity 0.5s ease, transform 0.7s ease; Плавные переходы */

align-self: flex-end;   
flex-direction: row-reverse;
background-color: antiquewhite;

}

.righte .event_text_block{
    padding-left: 0px;
}

.event_text_block{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    height: 100%;
    padding-left: 25px;
    padding-bottom: 20px;
}

.event_main_name{
        font-size: 42px;
}

.event_desp_name{
    font-size: 22px;
    font-family: Montserrat Regular;
    font-weight: 200;
    margin-bottom: 15px;
}

footer{
    width: 98%;
    height: 120px;
    padding: 20px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* border: 1px black solid; */
    background-color: white;
    margin-left: 0;
}

footer button{
    background-color: white;
    border: none;
    font-family: Montserrat;
    font-size: 15px;
}

footer .bts_row{
    display: flex;
    flex-direction: row;
    gap: 20px;
}

footer .bts_col{
    display: flex;
    flex-direction: column;
    gap: 10px;

    align-items: start;
    margin-left: -520px;
}

.goEventForm{
    display: flex;
    flex-direction: row;
}


.event_block{
    background-color: white;
    height: 612px;
    width: 975px;
    display: flex;
}

.mainText{
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    margin-bottom: 200px;
    margin-top: 200px;
}

main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 100px;
    overflow-x: hidden;
    width: 100%;
    padding: 0px;
    margin: 0px;
}

.aboutFestival{
    display: flex;
    flex-direction: row;
    align-items: start;
    margin-bottom: 200px;
}

.aboutFestival .left{
    width: calc(50% - 400px);
    display: flex; 
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

h2{
    font-family: Montserrat Black;
    font-size: 45px;
}

p{
    font-family: Montserrat regular;
    font-size: 28px;
}

.aboutFestival .right{
    width: calc(50%); 
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>