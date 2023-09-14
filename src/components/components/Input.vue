<script setup>
    const props = defineProps({
    title: String,
    atti: String,
  });
</script>

<template>
<div>
    <div>{{ props.title }}</div>
    <input :type="atti" class="input-field"/>
</div>
</template>

<style scoped>
.input-field{
    font-size:  20px;
    width: 210%;
    height: 50px;
    outline: 1px solid black;
    border-radius: 0.25rem;
}
</style>