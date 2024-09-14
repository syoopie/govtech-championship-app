import { Match, Team } from "../types";

export const parseTeams = (input: string): Team[] => {
    const teams: Team[] = [];
    input.split("\n").forEach((line) => {
        const [name, regDate, groupNum] = line.split(" ");
        if (typeof name !== "string") {
            throw new Error("Name must be a string");
        }
        const regDatePattern = /^\d{2}\/\d{2}$/;
        if (!regDatePattern.test(regDate)) {
            throw new Error("RegDate must be in the format DD/MM");
        }
        const processedGroupNum = parseInt(groupNum);
        if (isNaN(processedGroupNum)) {
            throw new Error("GroupNum must be a number");
        }
        teams.push({ name, regDate, groupNum: processedGroupNum });
    });
    return teams;
};

export const parseMatches = (input: string): Match[] => {
    const matches: Match[] = [];
    input.split("\n").forEach((line) => {
        const [teamA, teamB, scoreA, scoreB] = line.split(" ");
        if (typeof teamA !== "string" || typeof teamB !== "string") {
            throw new Error("Team names must be strings");
        }
        if (isNaN(parseInt(scoreA)) || isNaN(parseInt(scoreB))) {
            throw new Error("Scores must be numbers");
        }
        matches.push({
            teamA,
            teamB,
            scoreA: parseInt(scoreA),
            scoreB: parseInt(scoreB),
        });
    });
    return matches;
};
