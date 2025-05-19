<script setup>
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';

const username = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

const Login = ()=>{
    createUserWithEmailAndPassword(auth,email.value,password.value)
    .then(()=>{
        toast.success("Hoşgeldiniz");
        router.push("/")
    })
    .catch((err)=>{
        console.log(err);
        toast.error("Giriş Yapılırken Bir Hata Oluştu Şifrenizi Veya Email'inizi Kontrol Edin!")
    })

    updateProfile(auth.currentUser, {
        displayName:username.value
    })
}
</script>

<template>
    <form class="m-5" @submit.prevent="Login" >
        <div class="mb-3">
            <label class="form-label">Kullanıcı Adı</label>
            <input type="email" class="form-control" v-model="username" >
        </div>
        <div class="mb-3">
            <label class="form-label">Email adresin</label>
            <input type="email" class="form-control" v-model="email" >
        </div>
        <div class="mb-3">
            <label class="form-label">Şifren</label>
            <input type="password" class="form-control" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Kayıt Ol</button>
        <hr>
        <router-link class="btn btn-primary" to="/login" >Giriş Yap</router-link>
    </form>
</template>