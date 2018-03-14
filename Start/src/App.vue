<template>
    <div class="container">
        <app-server-header></app-server-header>
        <hr>
        <app-server-body></app-server-body>
        <hr>
        <app-server-footer></app-server-footer>
    </div>
</template>

<script>
    import ServerHeader from './ServerHeader.vue';
    import ServerFooter from './ServerFooter.vue';
    import ServerBody from './ServerBody.vue';
    export default {
        components: {
            'app-server-header' :  ServerHeader,
            'app-server-body' : ServerBody,
            'app-server-footer' : ServerFooter
        }
    }
</script>

<style>

</style>
