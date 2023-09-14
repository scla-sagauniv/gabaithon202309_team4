<template>
    <div>
        <div class=sheet>
            <p>
                送信が完了しました｡
                <br>
                ご意見ありがとうございます。
            </p>
        </div>
        <router-link to="/" class="homebutton">
            ホームに戻る
        </router-link>
    </div>
    
</template>

<style scoped>
    .sheet{
        width: 40%;
        height: 300px;
        background: white;
        outline: 1px solid black;
        border-radius:5px;
        position: absolute;
        top: 15%;
        left: 30%;
    }
    .homebutton{
        width: 20%;
        color: black;
        background: #ffcc00;
        font-size: 20px;
        font-weight: 600;
        border-radius:5px;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
        text-decoration: none;
        position: absolute;
        top: 70%;
        left: 40%;
    }
    .homebutton:hover{
        background: #f8e164;
    }
    p{
        font-size: 28px;
        padding-top: 80px;
        padding-bottom: 80px;
        text-align: center;
        
    }

</style>