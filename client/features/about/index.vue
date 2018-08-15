<template>
<div>
    <h1>
      this is about page
    </h1>
    <a href="#" v-on:click="clickMe">About Click</a>
</div>
</template>

<script>
export default {
    methods:{
        clickMe(){
            alert($('div').length);
            alert("i am about");
        }
    }
}
</script>
