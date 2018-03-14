<template>
    <div class="row">
        <app-sever-list></app-sever-list>
        <app-sever-details></app-sever-details>
    </div>
</template>

<script>
    import SeverList from './ServerList.vue';
    import ServerDetails from './ServerDetails.vue';
    export default {
        components: {
            'app-sever-list': SeverList,
            'app-sever-details': ServerDetails,
        }
    }
</script>