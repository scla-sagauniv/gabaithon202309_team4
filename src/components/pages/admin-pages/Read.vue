<script setup>
import Opinion from "../../components/Opinion.vue"
</script>

<template>
    <div id="flex-main" class="content">
        <div id="flex-opinion" class="content-opinion">
            <Opinion />
            <Opinion />
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
#flex-opinion{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.content {
    min-width: 100vw;
}
.content-opinion{
    width: 80%;
}
</style>
