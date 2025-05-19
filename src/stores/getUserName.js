import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";


export const getUserName = defineStore("getUserName",()=>{
    const name = ref("");

    onAuthStateChanged(auth,(user)=>{
        name.value = user.displayName
    })

    function changeName (names){
        name.value = names;
    }

    return {name,changeName}
})