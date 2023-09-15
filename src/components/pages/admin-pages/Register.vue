<script setup>
import Input from "../../components/Input.vue"
</script>

<template>
    <div id="flex-main" class="content">
        <div class="sheet">
            <Input title="username" atti="" />
            <Input title="e-mail" atti="" />
            <Input title="password" atti="password" class="password" />
            <div class="button-field">
                <router-link to="/read" class="register-button">新規登録</router-link>
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
.button-field{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    height: 50px;
    padding-top: 30px;    
}
.register-button{
    width: 22%;
    color: white;
    background:  #3DA9FC;
    outline: 1px solid black;
    border-radius: 0.25rem;
    padding-top: 10px;
    padding-bottom: 8px;
    text-align: center;
    text-decoration: none;
}
</style>