<script setup>
import Tag from '../components/components/Tag.vue'
import Button from '../components/components/Button.vue'
import Text from '../components/components/Text.vue'
</script>

<template>
    <div class="opinion-box">
        <div class="tag-button-box">
            <Tag />
        </div>
        <!-- <Button />
        <Text /> -->
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
    justify-content: row;
    padding-top: 1%;
}

</style>