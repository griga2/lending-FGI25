<script setup>

</script>

<template>
    <header>
        <img src="../../assets/Frame 4237.svg" height="78">

        <section class="bts_row">
            <button>
                О нас
            </button>
            <button>
                Все мероприятияr
            </button>
            <button>
                Карта событий
            </button>
            <button>
                Принять участие
            </button>
        </section>
    </header>
    <RouterView></RouterView>
</template>


<style scoped>

header{
    width: calc(100vw - 60px);
    height: 120px;
    padding: 30px;
    
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
    font-family: Montserrat;
    font-size: 15px;
}

.bts_row{
    display: flex;
    flex-direction: row;
    gap: 20px;
}

</style>