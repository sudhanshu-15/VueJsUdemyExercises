<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <div v-else>
            <p>Server #{{server.id}} selected, status is {{server.status}}</p>
            <hr>
            <button @click="setStatus">Set status to normal</button>
        </div>
    </div>
</template>
<script>
    import {EventBus} from './main';
    export default {
        data: function(){
            return {
                server: null
            };
        },
        methods: {
            setStatus() {
                this.server.status = 'Normal';
            }
        },
        created() {
            EventBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
    }
</script>

