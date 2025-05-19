<script setup>
import { auth } from '@/firebase/config';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';

const songName = ref("");
const singerName = ref("");
const songThumbnail = ref("");
const songLyric = ref("");

const router = useRouter();


const addMusic = async ()=>{
    const data = {
        id:Date.now(),
        songName:songName.value,
        singerName:singerName.value,
        thumbnail:songThumbnail.value,
        lyric:songLyric.value,
        addedBy: auth.currentUser.displayName,
        addedById: auth.currentUser.uid
    }

    console.log(typeof data.id);

    axios.post('http://localhost:3000/favmusic', data)
    .then(()=>{
        router.push("/");
        toast.success("Şarkı Başarıyla Eklendi");
    }).catch((err)=>{
        console.log(err);
        toast.error("Eklenirken Bir Hata İle Karşılaşıldı");
    })
}

</script>

<template>
    <form class="m-5" @submit.prevent="addMusic" >
        <div class="mb-3">
            <label class="form-label">Şarkı Adı</label>
            <input type="text" class="form-control" v-model="songName">
        </div>
        <div class="mb-3">
            <label class="form-label">Şarkıcı Adı</label>
            <input type="text" class="form-control" v-model="singerName">
        </div>
        <div class="mb-3">
            <label class="form-label">Şarkı Kapağı (link)</label>
            <input type="text" class="form-control" v-model="songThumbnail">
        </div>
        <div class="mb-3">
            <label class="form-label">Şarkı Sözleri</label>
            <textarea type="text" class="form-control" v-model="songLyric"/>
        </div>
        <button type="submit" class="btn btn-primary">Ekle</button>
    </form>
</template>