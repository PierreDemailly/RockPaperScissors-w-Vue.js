var form_i = new Vue({
    el: '#form-interface',
    data: {
        seen: true,
        player_name: 'joker'
    },
    methods: {
        start: function() {
            this.seen = false;
            game_i.seen = true;
            game_i.player_name = this.player_name;
        },

    }
});

var game_i = new Vue({
    el: '#game-interface',
    data: {
        seen: false,
        user_points: 0,
        bot_points: 0,
        player_name: '',
        pick_player: 'La partie n\' pas encore commencée.',
        pick_ordi: 'La partie n\'a pas encore commencée.',
        points_player: 0,
        points_ordi: 0,
        picks: ['rock', 'paper', 'scissors']
    },
    methods: {
        play: function(pick) {
            this.pick_player = pick;
            this.pick_ordi = this.picks[Math.floor(Math.random() * this.picks.length)];
            if(this.pick_player === this.pick_ordi) {
                // Nothing
            } else if(this.pick_player === 'rock') {
                if(this.pick_ordi === 'scissors') {
                    this.points_player++;
                } else {
                    this.points_ordi++;
                }
            } else if(this.pick_player === 'paper') {
                if(this.pick_ordi === 'rock') {
                    this.points_player++;
                } else {
                    this.points_ordi++;
                }
            } else {
                if(this.pick_ordi === 'paper') {
                    this.points_player++;
                } else {
                    this.points_ordi++;
                }
            }
            if(this.points_ordi >= 3 || this.points_player >= 3) {
                this.seen = false;
                restart_i.seen = true;
                if(this.points_ordi >= 3){
                    restart_i.winner = "Ordinateur";
                } else if(this.points_player >= 3) {
                    restart_i.winner = this.player_name;
                }
                this.points_ordi = 0;
                this.points_player = 0;
            }
        },
    }
});

var restart_i = new Vue({
    el: '#restart-interface',
    data: {
        seen: false,
        winner: ''
    },
    methods: {
        restart: function() {
            game_i.seen = false;
            form_i.seen = true;
            this.seen = false;
        }
    }

});

