<template>
<div>
    <h1>
      this is Home page
    </h1>
    <a href="#" v-on:click="clickMe">Home Click</a>
    <a href="/about">Raw Link</a>
</div>
</template>

<script>
export default {
    methods:{
        clickMe(){
            alert($('div').length);
            alert("i am Home");
        }
    }
}
</script>
