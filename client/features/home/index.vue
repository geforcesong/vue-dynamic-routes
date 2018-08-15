<template>
<div>
    <h1>
      this is Home page
    </h1>
    <a href="#" v-on:click="clickMe">Home Click</a>
</div>
</template>

<script>
export default {
    methods:{
        clickMe(){
            alert("i am Home");
        }
    }
}
</script>
