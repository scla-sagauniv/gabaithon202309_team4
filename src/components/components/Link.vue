<script setup>
  const props = defineProps({
    href: String,
  });
</script>

<template>
<router-link :to="href" class="opinion-button">
<slot />
</router-link>
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
.opinion-button{
    background: #FFD803;
    text-decoration: none;
    color: #272343;
    width: 35%;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    border-radius: 0.25rem;
}
.opinion-button:hover{
    background: #f8e164;
}

</style>
