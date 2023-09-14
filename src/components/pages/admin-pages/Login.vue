<script setup>
import Input from "../../components/Input.vue"
</script>

<template>
    <div id="flex-main" class="content">
        <div class="sheet">
            <Input title="e-mail" class="address" />
            <Input title="password" class="password" />
            <router-link to="/" class="homebutton">キャンセル</router-link>
            <router-link to="/read" class="loginbutton">ログイン</router-link>
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

.address{
    position: absolute;
        top: 25%;
        left: 30%;
}
.password{
    position: absolute;
        top: 45%;
        left: 30%;
}
.homebutton{
    width: 10%;
    color: #272343;
    outline: 1px solid black;
    border-radius: 0.25rem;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
    text-decoration: none;
    position: absolute;
    top: 65%;
    left: 30%;
}
.loginbutton{
    width: 10%;
    color: #272343;
    background:  rgb(48, 231, 255);
    outline: 1px solid black;
    border-radius: 0.25rem;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
    text-decoration: none;
    position: absolute;
    top: 65%;
    right: 30%;
}
</style>
