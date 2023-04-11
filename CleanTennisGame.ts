export class CleanTennisGame {
    score: string = '';
    player1Name: string;
    player2Name: string;
    player1Score: number;
    player2Score: number;


    constructor(player1Name: string, player2Name: string, player1Score: number, player2Score: number) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.player1Score = player1Score;
        this.player2Score = player2Score;
    }

    scoreLowerThan4(): void {
        let tempScore: number | string = 0;
        let zeroPoint = 0;
        let onePoint = 1;
        let twoPoint = 2;
        let threePoint = 3;

        for (let i = 0; i < 2; i++) {
            switch (i) {
                case 0:
                    tempScore = this.player1Score;
                    break;
                case 1:
                    this.score += "-";
                    if (this.player1Score === this.player2Score) {
                        tempScore = 'player1Score === player2Score'
                    } else {
                        tempScore = this.player2Score;
                    }
            }
            switch (tempScore) {
                case zeroPoint:
                    this.score += "Love";
                    break;
                case onePoint:
                    this.score += "Fifteen";
                    break;
                case twoPoint:
                    this.score += "Thirty";
                    break;
                case threePoint:
                    this.score += "Forty";
                    break;
                case 'player1Score === player2Score':
                    this.score += "All";
                    break;
            }
        }
    }

    almostWin(): void {
        let minusResult = this.player1Score - this.player2Score;
        if (minusResult == 1) this.score = `Advantage ${this.player1Name}`;
        else if (minusResult == -1) this.score = `Advantage ${this.player2Name}`;
        else if (minusResult >= 2) this.score = `Win for ${this.player1Name}`;
        else this.score = `Win for ${this.player2Name}`;
    }

    showScore() {
        if (this.player1Score >= 4 || this.player2Score >= 4) {
            this.almostWin()
        } else {
            this.scoreLowerThan4()
        }
    }
}