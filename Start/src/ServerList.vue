<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-list-item 
            v-for="server in servers"
            :server="server"></server-list-item>
        </ul>
    </div>
</template>
<script>
    import ServerListItem from './ServerListItem.vue';
    export default {
        components: {
            'serverListItem': ServerListItem
        },
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Normal'},
                    { id: 5, status: 'Critical'}
                ]
            };
        }
    }
</script>