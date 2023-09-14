<script setup>
import Link from "../../components/Link.vue"
</script>

<template>
    <div>
        <div class="sheet">
            <div class="genre">ジャンル</div>
            <select class="genrebox">
                <option>生徒会</option>
                <option>部活</option>
                <option>授業</option>
                <option>家庭</option>
                <option>その他</option>
            </select>

            <div class="content">意見</div>
            <textarea class="contentbox" name="text" ></textarea>
            <router-link to="/result" class="postbutton">post</router-link>
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
    .postbutton:hover{
        background: #f4778e;
    }
    .homebutton{
        
        
        
        position: absolute;
        top: 85%;
        left: 3%;
    }
    
</style>