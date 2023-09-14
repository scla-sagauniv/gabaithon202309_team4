<script setup>
import Tag from '../components/components/Tag.vue'
import Button from '../components/components/Button.vue'
import Text from '../components/components/Text.vue'
</script>

<template>
    <div class="opinion-box">
        <div class="tag-button-box">
            <Tag />
            <Button />
        </div>
    </div>
</template>

<style scoped>
.opinion-box {
    height: 400px;
    width: 40%; 
    font-size: 50px;
    background: #FFFFFE;
    border-radius: 0.25rem;
}
.tag-button-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1%;
}
</style>