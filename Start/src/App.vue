<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{text | reverseText}} </p>
                <hr>
                <p> {{text | textWithLength}} </p>
                <hr>
                <p> {{reverseTextComp}} </p>
                <p> {{textWithLen}} </p>
                <hr>
                <p> {{reverseTextCompMix}} </p>
                <p> {{textWithLenMix}} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {textOps} from './textOps';
    export default {
        data() {
            return {
                text : 'Now you see me' 
            };
        },
        filters: {
            reverseText(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reverseTextComp() {
                return this.text.split("").reverse().join("");
            },
            textWithLen() {
                return this.text + ' (' + this.text.length + ')';
            }
        },
        mixins: [textOps]

    }
</script>

<style>
</style>
