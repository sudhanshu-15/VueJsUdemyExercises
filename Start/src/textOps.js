export const textOps = {
    data() {
        return {
            text : 'Now you see me' 
        };
    },
    computed: {
        reverseTextCompMix() {
            return this.text.split("").reverse().join("");
        },
        textWithLenMix() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
}