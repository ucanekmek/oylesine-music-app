<script setup>
import { auth } from '@/firebase/config';
import { getUserName } from '@/stores/getUserName';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ref } from 'vue';
import { toast } from 'vue-sonner';

const userName = ref("");
const userIsLogged = ref(false);
const name = getUserName();

onAuthStateChanged(auth,(user)=>{
    userIsLogged.value = !!user;
    userName.value = name.name;
})

const accountOut = ()=>{
    signOut(auth)
    .then(()=>{
        toast.success("Başarıyla Çıkış Yaptın!");
    })
}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Navbar</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                </li>

            </ul>

            <div class="d-flex navbar-nav" v-if="userIsLogged" >
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Merhaba {{ userName || "username" }}
                </a>
                <ul class="dropdown-menu">
                    <li><router-link class="dropdown-item" to="/addmusic">Şarkı Ekle</router-link></li>
                    <li><router-link class="dropdown-item" to="/myaddedsong">Eklediğim Şarkılar</router-link></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><button @click="accountOut" class="dropdown-item">Çıkış Yap</button></li>
                </ul>
                </li>
            </div>

            <div class="d-flex gap-2" v-if="!userIsLogged">
                <router-link class="btn btn-primary" to="/login" >Giriş Yap</router-link>
                <router-link class="btn btn-primary" to="/signup">Kayıt Ol</router-link>

            </div>
            </div>
        </div>
    </nav>
</template>