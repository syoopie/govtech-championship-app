export interface Team {
    name: string;
    regDate: string;
    groupNum: number;
}

export interface Match {
    teamA: string;
    teamB: string;
    scoreA: number;
    scoreB: number;
}

interface TeamRanking {
    teamName: string;
    points: number;
}

export interface GroupRanking {
    groupNum: number;
    teams: TeamRanking[];
}
