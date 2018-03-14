<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'appBlue', quoteData='Illo Illo'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'appGreen', quoteData='Illo Ji Sanam'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'appRed', quoteData='Hum Aa Gaye'">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                    <p>{{quoteData}}</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
            return {
                selectedComponent: 'appBlue',
                quoteData: 'Illo Illo'
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
