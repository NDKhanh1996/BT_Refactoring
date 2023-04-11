export class TennisGame {
    score: string = '';

    getScore(player1Name: string,
             player2Name: string,
             m_score1: number,
             m_score2: number) {
        let tempScore = 0;
//neu 2 diem bang nhau
        if (m_score1 == m_score2) {
            switch (m_score1) {
                //2 ben = 0
                case 0:
                    this.score = "Love-All";
                    break;
                    //diem 2 ben = 1
                case 1:
                    this.score = "Fifteen-All";
                    break;
                case 2:
                    this.score = "Thirty-All";
                    break;
                case 3:
                    this.score = "Forty-All";
                    break;
                default:
                    this.score = "Deuce";
                    break;

            }
            // neu diem ca 2 lon hon 4
        } else if (m_score1 >= 4 || m_score2 >= 4) {
            //lay diem chenh nhau
            let minusResult = m_score1 - m_score2;
            if (minusResult == 1) this.score = "Advantage player1"; //1 - 2 = 1
            else if (minusResult == -1) this.score = "Advantage player2"; // 2 - 1 = 1
            else if (minusResult >= 2) this.score = "Win for player1"; // 1 - 2 = 2
            else this.score = "Win for player2";// 2 - 1 = 2
        } else { //diem ca 2 < 4 nhung k bang nhau
            for (let i = 1; i < 3; i++) {
                if (i == 1) { // nhan diem p1, chuan bi doi ra text
                    tempScore = m_score1;
                }
                else {
                    this.score += "-"; // tao dau -
                    tempScore = m_score2; // nhan diem p2/ cb doi ra text
                }
                switch (tempScore) { // doi diem ra text
                    case 0:
                        this.score += "Love";
                        break;
                    case 1:
                        this.score += "Fifteen";
                        break;
                    case 2:
                        this.score += "Thirty";
                        break;
                    case 3:
                        this.score += "Forty";
                        break;
                }
            }
        }
    }
}