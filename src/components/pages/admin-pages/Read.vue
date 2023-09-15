<script setup>
import Opinion from "../../components/Opinion.vue";
import Link from "../../components/Link.vue";
import router from '../../../router'
import { onBeforeMount, onMounted, ref } from "vue";
const email = "admin@gabaithon.com"; // paramsが受け取れないので決め打ち

const list = ref([])
const errors = ref()

const decodeJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(decodeURIComponent(myescape(window.atob(base64))));
};
const myescape = (str) => {
    return str.replace(/[^a-zA-Z0-9@*_+\-./]/g, m => {
        const code = m.charCodeAt(0);
        if (code <= 0xff) {
            return '%' + ('00' + code.toString(16)).slice(-2).toUpperCase();
        } else {
            return '%u' + ('0000' + code.toString(16)).slice(-4).toUpperCase();
        }
    });
}
onBeforeMount(() => {
    var sJWT = ''
    var ck = document.cookie.split(';');
    ck.forEach(function(value) {
      //cookie名と値に分ける
        var content = value.split('=');
        if (content[0] === 'token') {
        sJWT = content[1]
        }
    })

    const decodedjwt = decodeJwt(sJWT)
    console.log(decodedjwt.email)
    console.log(email)
    if(decodedjwt.email === email) {
        document.cookie = 'token=; max-age=0'
        router.push('Read')
    }else{
        console.log('invalid authentication. route to login...')
        document.cookie = 'token=; max-age=0'
        router.push('Login')
    }
})

onMounted(() => {
    fetchGet()
})

const fetchGet = async () =>{
    try {
        
        const param ={
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const endpoint = "https://func-gabaithon202309.azurewebsites.net/api/get-contents?"
        const res = await fetch(endpoint, param)
        if(res.status === 200) {
            const data = await res.json()
            list.value = [...data]
            console.log(data);
            return;
        }
    } catch (e) {
        console.log(e)
        errors.value = "失敗した"
        
    }
}


</script>

<template>
    <div id="flex-main" class="content">
        <div id="flex-opinion" class="content-overflow">
            <Opinion v-for="[id, title, message, isChecked] in list" :key="title" :title="title" :message="message"/>
        </div>
        <div class="button-position">
            <Link href="/" class="">ホームに戻る</Link>
        </div>
        <button @click="fetchGet">テスト</button>
    </div>
</template>

<style scoped>
#flex-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
}
#flex-opinion{
    display: flex;
    flex-direction: column;
}
.content {
    min-width: 100vw;
}
.content-overflow{
    width: 80%;
    height: 600px;
    background: white;
    overflow: scroll;
}
.button-position{
    width: 100vw;
    margin-top: 2%;
    margin-left: 3%;
}
</style>
