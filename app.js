new Vue({
    el: '#app',
    data: {
        playOn: false,
        playerHealth: 100,
        monsterHealth: 100,
        moves: []
    },
    methods: {
        resetGame: function() {
            this.playOn = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.moves = [];
        },
        attack: function() {
            var damage = this.calculateDamage(5);
            console.log(damage);
            this.monsterHealth -= damage;
            this.updateMove('Player', damage);
            if(this.checkGameEnd()){
                return;
            }
            this.monsterAttack();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10);
            this.monsterHealth -= damage;
            if(this.checkGameEnd()) {
                return;
            }
            this.updateMove('Player', damage);
            this.monsterAttack();
        },
        heal: function() {
            if(this.playerHealth <= 80) {
                this.playerHealth += 4;
            }
            this.monsterAttack();
        },
        calculateDamage: function(max) {
            var damage = Math.floor(Math.random() * max);
            return damage;
            console.log(damage);
        },
        checkGameEnd: function() {
            if (this.playerHealth <= 0) {
                alert("You loose");
                this.resetGame();
                return true;
            }
            if (this.monsterHealth <= 0) {
                alert("You win");
                this.resetGame();
                return true;
            }
            return false;
        },
        monsterAttack: function() {
            var damage = this.calculateDamage(7);
            this.playerHealth -= damage;
            this.updateMove('Monster', damage);
            this.checkGameEnd();
        },
        updateMove: function(character, damage) {
            this.moves.unshift({
                text: character + ' attacked and dealt a damage of ' + damage,
                isPlayer: character === 'Player' ? true : false
            });
        }
    } 
 });