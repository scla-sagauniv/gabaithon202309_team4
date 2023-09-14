<script setup>
import Input from "../../components/Input.vue"
</script>

<template>
    <div id="flex-main" class="content">
        <div class="sheet">
            <!-- <div class="inputbuttons">
                <Input title="e-mail" atti="" class="" />
                <Input title="password" atti="password" class="password" />
            </div> -->
            <Input title="e-mail" atti="" class="" />
            <Input title="password" atti="password" class="password" />
            <div class="button-field">
                <router-link to="/" class="homebutton">キャンセル</router-link>
                <router-link to="/read" class="loginbutton">ログイン</router-link>
            </div>           
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
.inputbuttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50px;
}
</style>
