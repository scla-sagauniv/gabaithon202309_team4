<script setup>
import Opinion from "../../components/Opinion.vue";
import Link from '../../components/Link.vue';

const FetchGet = async () =>{
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
            router.push("/result")
            const data = await res.json()
            console.log(data);
            return data;
        }
    } catch (e) {
        console.log("asdasda")
        errors.value = "失敗した"
        
    }
}

</script>

<template>
    <div id="flex-main" class="content">
        <div id="flex-opinion" class="content-overflow">
            <Opinion title=""/>
        </div>
        <div class="button-position">
            <Link href="/" class="">ホームに戻る</Link>
        </div>
        <button @click="FetchGet">テスト</button>
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
