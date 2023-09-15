<script setup>
import router from '../../../router'
import Input from "../../components/Input.vue"

import { computed, ref } from 'vue';
const email = ref('');
const password = ref('');
const errors = ref('');
const flag = ref('')

const isValidValue = computed(() => email.value && password.value)

const FetchLogin = async () =>{
    // 値とれない 多分inputがコンポーネントだから
    console.log(email.value)
    console.log(password.value)
    try {
        
        const param ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        }

        const endpoint = "https://func-gabaithon202309.azurewebsites.net/api/login?"
        const res = await fetch(endpoint, param)
        const data = await res.json()
        // 成功するとトークンが返ってきてReadに遷移
        if(res.status === 200) {
            flag.value = ""
            console.log(data)
            document.cookie = 'token=' + data
            console.log(document.cookie)
            router.push({name: 'Read', params: { auth: 'authenticated', email: email.value }})
            console.log("login success")
            return data;
        }
    } catch (e) {
        console.log("failed")
        errors.value = "失敗した"
        flag.value = "ログインに失敗しました"
        
    }
}
</script>c

<template>
    <div id="flex-main" class="content">
        <div class="sheet">
            <div id="input-flex">
                <div class="title-field">e-mail</div>
                <input v-model="email" class="input-field"/>
            </div>
            <div id="input-flex">
                <div class="title-field">password</div>
                <input type="password" v-model="password" class="input-field"/>
            </div>
            <div class="button-field">
                <router-link to="/" class="homebutton">キャンセル</router-link>
                <button class="loginbutton" @click="FetchLogin" :disabled="!isValidValue">ログイン</button>
            </div>
            {{ flag }}
        </div>
        
    </div>
</template>

<style scoped>
#flex-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7%;
}
.content {
    min-width: 100vw;
}
.sheet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 50%; 
    font-size: 20px;
    background: #FFFFFE;
    outline: 1px solid black;
    border-radius: 0.25rem;
}

/* .address{
}
.password{
} */
.button-field{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 50px;
    padding-top: 30px;
    
}
.homebutton{
    width: 22%;
    color: #272343;
    outline: 1px solid black;
    border-radius: 0.25rem;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
    text-decoration: none;
    
}
.homebutton:hover{
    background-color: #dadad7;
}
.loginbutton{
    width: 22%;
    color: white;
    background:  #3DA9FC;
    outline: 1px solid black;
    border-radius: 0.25rem;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
    text-decoration: none;   
}

.loginbutton:disabled{
    width: 22%;
    color: white;
    background:  #999999;
    outline: 1px solid black;
    border-radius: 0.25rem;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
    text-decoration: none;   
}
.inputbuttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50px;
}

#input-flex{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.title-field{
    width: 50%;
}
.input-field{
    font-size:  20px;
    width: 50%;
    height: 50px;
    outline: 1px solid black;
    border-radius: 0.25rem;
}
</style>
