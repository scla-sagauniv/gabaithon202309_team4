<script setup></script>

<template>
    <div id="tag-flex" class="tag-content">
        <div class="tag-circle"></div>
        <div class="tag-text">タグ</div>
    </div>
</template>

<style scoped>
#tag-flex{
    display: flex;
    flex-direction: row;
    margin-left: 5%;
}
.tag-content{
    width: 23%;
    font-size: 15px;
    padding-top: 1%;
    padding-bottom: 1%;
    border: solid;
    border-width: thin;
    border-color: rgb(0 0 0);
    border-radius: 0.25rem;
}
.tag-circle{
    width: 20px;
    height: 20px;
    line-height: 200px;
    background-color: var(--main-pink);
    border-radius: 50%;
    color: #fff;
    text-align: center; 
}
.tag-text{
    padding-left: 4%;
}
</style>