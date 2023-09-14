<script setup>
  const props = defineProps({
    href: String,
    message: String,
  });
</script>

<template>
<router-link :to="href" class="opinion-button">
<slot />
</router-link>
</template>

<style scoped>
.opinion-button{
    background: #FFD803;
    text-decoration: none;
    color: #272343;
    width: 180px;
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
