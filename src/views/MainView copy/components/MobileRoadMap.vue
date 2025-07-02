<template>
  <div class="timeline-container">
    <div class="timeline">
      <!-- Линия времени -->
      <div class="timeline-line"></div>
      
      <!-- Точки на временной линии -->
      <div 
        v-for="(point, index) in timelinePoints" 
        :key="index"
        class="timeline-point"
        :style="{ left:calculatePosition(point.date) + '%' }"
      >
        <img src='../../../assets/PointBall.svg' v-if="checkForGreen(point.date)">
        <img src='../../../assets/GreenPointBall.svg' v-else>
        <div class="point-date" style="">{{ formatDate(point.date) }}</div>
        <div class="point-label">{{ point.label }}</div>
      </div>
      
      <!-- Трамвай -->
      <div 
        class="tram" 
        :style="{ left: calculatePosition(currentDate) + '%' }"
      >
        <div class="tram-icon">
            <img src="../../../assets/MobileTrain.svg">
            <!-- <div  style="height: -140px;">{{ formatDate(currentDate) }}</div>
            <div  style="height: 200px;">Сегодня</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Даты в правильном порядке (1 января - 1 июля 2025)
const startDate = new Date(2025, 2, 1); // 1 января 2025
const endDate = new Date(2026, 10, 1);   // 1 июля 2025
const currentDate = ref(new Date());     // Сегодняшняя дата

// Реперные точки из скриншота
const timelinePoints = ref([
  { date: new Date(2025, 6, 2), label: 'Открытие' },
  { date: new Date(2026, 4, 30), label: 'Закрытие летнего фестиваля' },
  { date: new Date(2025, 8, 31), label: 'Конец приёма заявок от писателей' },
  { date: new Date(2025, 11, 30), label: 'Отбор рассказов для сборника' },
  { date: new Date(2025, 11, 30), label: 'Отбор рассказов для сборника' },
]);

// Вычисляем позицию на временной шкале (0-100%)
const  calculatePosition  = (date) => {
  // console.log(typeof date)
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const currentTime = date.getTime();
  
  if (currentTime <= startTime) return 0;
  if (currentTime >= endTime) return 100;
  
  const totalDuration = endTime - startTime;
  const elapsed = currentTime - startTime;
  // console.log(totalDuration, ' totalDuration');
  // console.log(elapsed, ' elapsed');

  return (elapsed / totalDuration) * 100;
};

const checkForGreen = (pDate) => {
  // console.log(pDate, currentDate.value)
  const currentTime = currentDate.value.getTime();
  const pTime = pDate.getTime();

  return pTime > currentTime;
}

// Форматируем дату в кратком формате (дд.мм)
const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}.${month}`;
};
</script>

<style scoped>
.timeline-container {
  font-family: Arial, sans-serif;
  width: 100vw;
  overflow-x: hidden;
  padding: 20px 0;
}

.timeline {
  position: relative;
  height: 150px;
  width: 94.85%;
  padding: 60px
}

.timeline-line {
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  height: 8px;
  background: #333;
  
}

.timeline-point {
  position: absolute;
  top: 63px;
  transform: translateX(-50%);
  text-align: center;
  width: 100px;
}

.point-date {
  font-size: 14px;
  color: #333;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Montserrat SemiBold';
  white-space: nowrap;
}

.point-label {
  font-size: 8px;
  color: #333;
  position: absolute;
  font-family: 'Montserrat SemiBold';
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  word-wrap: break-word;
}

.tram {
  position: absolute;
  top: 20px;
  transform: translateX(-50%);
  text-align: center;
  transition: left 0.5s ease;
}

.tram-icon {
  animation: move 2s infinite ease-in-out;
}

@keyframes move {
  0%, 100% { transform: translateX(-1px); }
  50% { transform: translateX(1px); }
}
</style>