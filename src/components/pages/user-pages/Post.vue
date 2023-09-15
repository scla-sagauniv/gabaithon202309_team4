<script setup>
import Link from "../../components/Link.vue"
import router from '../../../router'

import { computed, ref } from 'vue';
const title = ref('');
const message = ref('');
const errors = ref('');

const isValidValue = computed(() => title.value && message.value)

const FetchPost = async () =>{
    try {
        
        const param ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                genre: title.value,
                content: message.value
            })
        }
        const endpoint = "https://func-gabaithon202309.azurewebsites.net/api/post-content?"
        const res = await fetch(endpoint, param)
        if(res.status === 200) {
            router.push("/result")
            const data = await res.json()
            console.log(title.value)
            console.log(message.value)
            return data;
        }
    } catch (e) {
        console.log("asdasda")
        errors.value = "失敗した"
        
    }
}
</script>

<template>
    <div>
        <p style="color: red;">{{  errors }} </p>
        <div class="sheet">
            <div class="genre">ジャンル</div>
            <select class="genrebox" v-model="title">
                <option value="">選択して下さい</option>
                <option value="授業">授業</option>
                <option value="部活">部活</option>
                <option value="生徒会">生徒会</option>
                <option value="学習">学習</option>
                <option value="校則">校則</option>
                <option value="イベントの企画">イベントの企画</option>
                <option value="課外活動">課外活動</option>
                <option value="その他">その他</option>
            </select>

            <div class="content">意見</div>
            <textarea class="contentbox" name="text" v-model="message" placeholder="コメントを入力して下さい。"></textarea>
            <button class="postbutton" @click="FetchPost" :disabled="!isValidValue">post</button>
            <!-- <p class="test">{{ message }}</p>
            <p class="test2">{{ title }}</p> -->
        </div>
        <Link href="/" class="homebutton">←ホームに戻る</Link>
    </div>
</template>

<style scoped>
    .sheet{
        width: 50%;
        height: 400px;
        background: white;
        outline: 1px solid black;
        border-radius:5px;
        position: absolute;
        top: 15%;
        left: 25%;
    }
    .genre{
        position: absolute;
        top: 4%;
        left: 5%;
    }
    .genrebox{
        width: 90%;
        height: 50px;
        font-size: 18px;
        outline: 2px solid #999999;
        border-radius:5px;
        position: absolute;
        top: 10%;
        left: 5%;
        right: 5%;
    }
    .content{
        position: absolute;
        top: 24%;
        left: 5%;
    }
    .contentbox{
        width: 89%;
        height: 200px;
        font-size: 18px;
        outline: 2px solid #999999;
        border-radius:5px;
        position: absolute;
        top: 30%;
        left: 5%;
        right: 5%;
    }
    .postbutton{
        width: 140px;
        color: white;
        font-size: 20px;
        background-color: var(--main-pink);
        font-weight: 600;
        border-radius:5px;
        padding-top: 8px;
        padding-bottom: 8px;
        text-align: center;
        text-decoration: none;
        position: absolute;
        top: 85%;
        right: 5%;
    }
    .postbutton:hover{
        background-color: #f4778e;
    }
    .postbutton:disabled {
        background-color: #999999;
    }
    .test{
        position: absolute;
        top: 90%;
        left: 5%;

    }
    .test2{
        position: absolute;
        top:90%;
        right: 30%;
    }
    .homebutton{
        position: absolute;
        top: 85%;
        left: 3%;
    }
    
</style>