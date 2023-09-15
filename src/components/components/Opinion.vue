<script setup>
  const props = defineProps({
    title: String,
    message: String,
  });

</script>

<template>
    <div class="opinion-box">
        <div class="tag-button-box">
            <div id="tag-flex" class="tag-content">
                <div class="tag-circle"></div>
                <div class="tag-text">{{ props.title }}</div>
            </div>
            <button class="button"></button>
        </div>
        <div class="text-content">{{ props.message }}</div>
    </div>
</template>

<style scoped>
#tag-flex{
    display: flex;
    flex-direction: row;
    margin-left: 5%;
}
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
.text-content{
    width: 90%;
    height: 70%;
    margin-left: 5%;
    margin-top: 5%;
    border: solid;
    border-width: thin;
    border-color: black;
    border-radius: 0.25rem;
}
.button{
    width: 32px;
    height: 32px;
    margin-right: 5%;
    background: white;
    border: solid;
    border-width: thin;
    border-color: black;
    font-size: 2px;
    text-align: center;
    border-radius: 0.25rem;
}
.tag-content{
    width: 23%;
    font-size: 15px;
    padding-top: 1%;
    padding-bottom: 1%;
    border: solid;
    border-width: thin;
    border-color: rgb(0 0 0);
    border-radius: 0.25rem;
}
.tag-circle{
    width: 20px;
    height: 20px;
    line-height: 200px;
    background-color: var(--main-pink);
    border-radius: 50%;
    color: #fff;
    text-align: center; 
}
.tag-text{
    padding-left: 4%;
}
</style>