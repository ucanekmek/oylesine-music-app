<script setup>
import { RiPlayLargeFill, RiStopLargeFill } from '@remixicon/vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const music = ref([]);
const played = ref(false);
const musicPreview = ref(null);
const previewUrl = ref(null)

onMounted(async()=>{
    const response = await axios.get("http://localhost:3000/favmusic");
    const filtersong = response.data.find(item => item.id == route.params.id);
    music.value = filtersong;
})

const play = async ()=>{
    if (!musicPreview.value) return
    if (!previewUrl.value) {
    const response = await axios.get("https://cors-anywhere.herokuapp.com/" + 
    `https://api.deezer.com/search?q=${music.value.songName + music.value.singerName}`);
    previewUrl.value = response.data.data[0].preview;
    }
    musicPreview.value.src = previewUrl.value;
    musicPreview.value.play();
    played.value = true;
}

const stop = ()=>{
    if (!musicPreview.value) return
    musicPreview.value.pause()
    played.value = false;
}

</script>

<template>
    <div class="d-flex flex-wrap align-items-start justify-content-around m-4">
        <audio ref="musicPreview" class="d-none"></audio>
        <img :src="music.thumbnail"  class="img-thumbnail rounded" alt="...">
        <div class="d-flex flex-column align-items-center ">
            <h1>{{ music.songName }}</h1>
            <h3 style="color: rgb(128, 128, 128);" >{{ music.singerName }}</h3>
            <div class="d-flex gap-2" >
                <button class="btn btn-primary" v-if="!played" @click="play" ><RiPlayLargeFill/></button>
                <button class="btn btn-primary" v-if="played" @click="stop"><RiStopLargeFill/></button>
            </div>
            <div class="d-flex gap-2 flex-sm-column mt-4 align-items-center" >
                <h4>Şarkı Sözleri</h4>
                <h6 style="white-space: pre-line;" >{{ music.lyric }}</h6>
                <!-- buradaki white-space:pre-line olayı şu her \n de satır atlamasını sağlar -->
            </div>
        </div>
    </div>
</template>