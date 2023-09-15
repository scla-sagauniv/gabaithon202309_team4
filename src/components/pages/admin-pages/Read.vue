<script setup>
import Opinion from "../../components/Opinion.vue"
import Link from '../../components/Link.vue';
const Array = [
    [1, "genre", "content", 0],
    [2, "genre2", "content2", 0]
]
console.log(Array[0][1])
</script>

<template>
    <div id="flex-main" class="content">
        <div id="flex-opinion" class="content-overflow">
            <Opinion />
        </div>
        <div class="button-position">
            <Link href="/" class="">ホームに戻る</Link>
        </div>
    </div>
</template>

<style scoped>
#flex-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
}
#flex-opinion{
    display: flex;
    flex-direction: column;
}
.content {
    min-width: 100vw;
}
.content-overflow{
    width: 80%;
    height: 600px;
    background: white;
    overflow: scroll;
}
.button-position{
    width: 100vw;
    margin-top: 2%;
    margin-left: 3%;
}
</style>
