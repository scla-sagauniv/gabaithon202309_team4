<script setup>
    const props = defineProps({
    title: String,
    atti: String,
  });
</script>

<template>
<div id="input-flex">
    <div class="title-field">{{ props.title }}</div>
    <input :type="atti" class="input-field"/>
</div>
</template>

<style scoped>
#input-flex{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.title-field{
    width: 50%;
}
.input-field{
    font-size:  20px;
    width: 50%;
    height: 50px;
    outline: 1px solid black;
    border-radius: 0.25rem;
}
</style>