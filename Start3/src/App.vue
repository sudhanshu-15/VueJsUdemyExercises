<template>
    <div class="container">
        <app-header :quote-counts="quotesArr.length" :max-quotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="updateQuoteArray"></app-new-quote>
        <app-quote-grid :quotes="quotesArr" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewQuote from './components/NewQuote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import Header from './components/Header.vue';
    export default {
        data: function() {
            return {
                maxQuotes: 15,
                quotesArr: [
                    'To be or not to be'
                ]
            }
        },
        components: {
            appQuoteGrid : QuoteGrid,
            appNewQuote : NewQuote,
            appHeader : Header
        },
        methods: {
            updateQuoteArray(quote) {
                if(this.quotesArr.length >= this.maxQuotes){
                    return alert('Please delete Quotes first!');
                }
                if(quote){
                    this.quotesArr.push(quote);
                }else{
                    return alert('Can not add empty quotes');
                }
                
            },
            deleteQuote(index) {
                this.quotesArr.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
