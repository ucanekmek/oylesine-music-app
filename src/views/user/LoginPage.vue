<script setup>
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';

const email = ref("");
const password = ref("");
const router = useRouter();

const Login = ()=>{
    signInWithEmailAndPassword(auth,email.value,password.value)
    .then(()=>{
        toast.success("Hoşgeldiniz");
        router.push("/")
    })
    .catch((err)=>{
        console.log(err);
        toast.error("Giriş Yapılırken Bir Hata Oluştu Şifrenizi Veya Email'inizi Kontrol Edin!")
    })
}
</script>

<template>
    <form class="m-5" @submit.prevent="Login" >
        <div class="mb-3">
            <label class="form-label">Email adresin</label>
            <input type="email" class="form-control" v-model="email" >
        </div>
        <div class="mb-3">
            <label class="form-label">Şifren</label>
            <input type="password" class="form-control" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Giriş Yap</button>
        <hr>
        <router-link class="btn btn-primary" to="" >Kayıt Ol</router-link>
    </form>
</template>