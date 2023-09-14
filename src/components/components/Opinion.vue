<script setup>
import Tag from './components/Tag.vue';
import Button from './components/Button.vue';
import Text from './components/Text.vue';
</script>

<template>
    <div class="opinion-box">
        <div class="tag-button-box">
            <Tag />
            <Button />
        </div>
        <Text />
    </div>
</template>

<style scoped>
.opinion-box {
    height: 400px;
    width: 40%; 
    margin-top: 3%;
    font-size: 50px;
    background: #FFFFFE;
    border: solid;
    border-width: thin;
    border-color: black;
    border-radius: 0.25rem;
}
.tag-button-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 3%;
}
</style>