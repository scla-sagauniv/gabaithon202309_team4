<script setup>
import Link from "../../components/Link.vue"
import { ref } from 'vue';
const title = ref('');
const message = ref('');

const FetchPost = async (title,message) =>{
    const param ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            genre: title,
            content: message
        })
    }
    const endpoint = "https://func-gabaithon202309.azurewebsites.net/api/post-content?"
    const res = await fetch(endpoint,title,message)
    const data = await res.json()
    console.log(title)
    console.log(message)
    return(data)
}
</script>

<template>
    <div>
        <div class="sheet">
            <div class="genre">ジャンル</div>
            <select class="genrebox" v-model="title">
                <option>生徒会</option>
                <option>部活</option>
                <option>授業</option>
                <option>家庭</option>
                <option>その他</option>
            </select>

            <div class="content">意見</div>
            <textarea class="contentbox" name="text" v-model="message"></textarea>
            <router-link to="/result" class="postbutton" @click="FetchPost">post</router-link>
            <p class="test">{{ message }}</p>
            <p class="test2">{{ title }}</p>
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
        width: 92%;
        height: 50px;
        font-size: 18px;
        outline: 2px solid #999999;
        border-radius:5px;
        position: absolute;
        top: 10%;
        left: 5%;
    }
    .content{
        position: absolute;
        top: 24%;
        left: 5%;
    }
    .contentbox{
        width: 92%;
        height: 200px;
        font-size: 18px;
        outline: 2px solid #999999;
        border-radius:5px;
        position: absolute;
        top: 30%;
        left: 4%;
    }
    .postbutton{
        width: 140px;
        color: white;
        font-size: 20px;
        background: var(--main-pink);
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
    .postbutton:hover{
        background: #f4778e;
    }
    .homebutton{
        position: absolute;
        top: 85%;
        left: 3%;
    }
    
</style>