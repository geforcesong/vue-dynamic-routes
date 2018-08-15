<template>
<div>
    <h1>
      this is about page
    </h1>
    <a href="#" v-on:click="clickMe">About Click</a>
</div>
</template>

<script>
import Formatter from '../../utils/formatter'
export default {
    methods:{
        clickMe(){
            alert($('div').length);
            alert("i am about");
            alert(Formatter.formatNumber(100));
        }
    }
}
</script>
