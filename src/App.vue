<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
onMounted(() => {
  const mobile = navigator.maxTouchPoints > 0 && 'orientation' in window
  const tg = window.Telegram.WebApp;
  // alert(tg.initDataUnsafe?.user?.id)
  if (mobile) {
    router.push('/mobail');
  } else aif (tg.initDataUnsafe?.user?.id) {
    router.push('/mobail');
  } else {
    // alert('pc')
    router.push('/main');

  }
})

</script>

<template>
  <main id="id">
  <RouterView></RouterView>

  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#main{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
}
</style>
