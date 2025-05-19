<script setup>
import axios from 'axios';
import { onMounted, onUpdated, ref } from 'vue';
import { useRouter } from 'vue-router';

const musicData = ref([]);
const router = useRouter();

onMounted(async ()=>{
    const response = await axios.get("http://localhost:3000/favmusic");
    musicData.value = response.data
})


const goToSong = (id)=>{
    router.push('/song/' + id)
}

</script>

<template>
    <div class="d-flex flex-wrap justify-content-center gap-2">
        <h1 v-if="musicData.length == 0" >Burası Sanırsam Boş 👉👈</h1>
        <div class="card m-3" style="width: 18rem;" v-for="music in musicData" :key="music.id">
        <img :src="music.thumbnail" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{music.songName}}</h5>
            <h6 class="card-text">{{music.singerName}}</h6>
            <button @click="goToSong(music.id)" class="btn btn-primary">İncele</button>
        </div>
    </div>
    </div>

</template>
