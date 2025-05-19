<script setup>
import { auth } from '@/firebase/config';
import axios from 'axios';
import { onMounted, onUpdated, ref } from 'vue';
import { toast } from 'vue-sonner';

const myaddedsongs = ref([]);

onMounted(async ()=>{
    const response = await axios.get('http://localhost:3000/favmusic');
    const useruidFindSong = response.data.filter(item => item.addedById == auth.currentUser.uid);
    myaddedsongs.value = useruidFindSong
})


const deleteMusic = async (id) =>{

    await axios.delete(`http://localhost:3000/favmusic/${String(id)}`)
    .then(()=>{
        toast.success("Başarıyla Silindi");
    })
    .catch((err)=>{
        console.log(err)
        toast.error("Silinirken Bir Hata Oluştu")
    })
}
</script>

<template>
    <div class="d-flex flex-wrap justify-content-center gap-2">
            <h1 v-if="myaddedsongs.length == 0" >Burası Sanırsam Boş 👉👈</h1>
            <div class="card m-3" style="width: 18rem;" v-for="music in myaddedsongs" :key="music.id">
            <img :src="music.thumbnail" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{music.songName}}</h5>
                <h6 class="card-text">{{music.singerName}}</h6>
                <button @click="deleteMusic(music.id)" class="btn btn-danger">Sil</button>
            </div>
            </div>
    </div>
</template>