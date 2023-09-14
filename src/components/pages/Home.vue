<script setup>
import Link from "../components/Link.vue"
</script>

<template>
    <div id="flex-main" class="content">
        <div class="title">たいとるろご</div>
        <div id="flex-buttons" class="content-buttons">
            <Link href="/post">意見を送る</Link>
            <Link href="/login">目安箱を開ける</Link>
        </div>
    </div>
</template>

<style scoped>
#flex-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12%;
}
#flex-buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.content {
    min-width: 100vw;
}
.content-buttons{
    width: 40%;
    padding-top: 3%;
}
.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 210px;
    width: 40%; 
    font-size: 50px;
    background: #FFFFFE;
    border-radius: 0.25rem;
}


</style>
