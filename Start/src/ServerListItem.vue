<template>
    <li class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
        Server #{{ server.id }}
    </li>
</template>
<script>
    import {EventBus} from './main';
    export default {
        props: ['server'],
        methods: {
            serverSelected() {
                EventBus.$emit('serverSelected', this.server);
            }
        }
    }
</script>