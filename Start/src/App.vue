<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-my-direct:click="clicked" class="btn btn-primary">Click</button>
                <hr>
                <div style="background-color: lightyellow; width: 100px; height: 100px"
                v-my-direct:mouseenter="mouseEnter()"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'my-direct': {
                bind(el, binding, vnode) {
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked() {
                alert('Clicked!');
            },
            mouseEnter() {
                alert('Mouse Enter');
            }
        }
    }
</script>

<style>
</style>
