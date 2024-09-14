import React, { useEffect, useState } from "react";
import { GroupRanking, Match, Team } from "../types";
import { Box, Typography, Paper } from "@mui/material";

interface GroupRankingsProps {
    teams: Team[];
    matches: Match[];
}

const GroupRankings: React.FC<GroupRankingsProps> = ({ teams, matches }) => {
    const [groupRankings, setGroupRankings] = useState<GroupRanking[]>([]);

    useEffect(() => {
        const calculateGroupRankings = () => {
            const groupPoints: {
                [groupNum: number]: { [teamName: string]: number };
            } = {};

            // Initialize points for each team
            teams.forEach((team) => {
                if (!groupPoints[team.groupNum]) {
                    groupPoints[team.groupNum] = {};
                }
                groupPoints[team.groupNum][team.name] = 0;
            });

            // Update points based on match results
            matches.forEach((match) => {
                const { teamA, teamB, scoreA, scoreB } = match;
                let groupNumA: number | undefined;
                let groupNumB: number | undefined;

                teams.forEach((team) => {
                    if (team.name === teamA) groupNumA = team.groupNum;
                    if (team.name === teamB) groupNumB = team.groupNum;
                });

                if (groupNumA && groupNumB && groupNumA === groupNumB) {
                    if (scoreA > scoreB) {
                        groupPoints[groupNumA][teamA] += 3;
                    } else if (scoreB > scoreA) {
                        groupPoints[groupNumA][teamB] += 3;
                    } else {
                        groupPoints[groupNumA][teamA] += 1;
                        groupPoints[groupNumA][teamB] += 1;
                    }
                }
            });

            // Create the ranking list
            const rankings: GroupRanking[] = [];
            Object.keys(groupPoints).forEach((groupNum) => {
                const teamsInGroup = groupPoints[parseInt(groupNum)];
                const rankedTeams = Object.keys(teamsInGroup)
                    .map((teamName) => ({
                        teamName,
                        points: teamsInGroup[teamName],
                    }))
                    .sort((a, b) => b.points - a.points); // Sort teams by points

                rankings.push({
                    groupNum: parseInt(groupNum),
                    teams: rankedTeams,
                });
            });

            setGroupRankings(rankings);
        };

        calculateGroupRankings();
    }, [teams, matches]);

    return (
        <Box mt={4}>
            <Typography variant="h4" gutterBottom>
                Group Rankings
            </Typography>
            {groupRankings.length === 0 ? (
                <Typography>No groups available yet.</Typography>
            ) : (
                <Box display="flex" flexWrap="wrap" gap={3}>
                    {groupRankings.map((groupRanking) => (
                        <Paper
                            key={groupRanking.groupNum}
                            elevation={3}
                            sx={{
                                padding: 3,
                                borderRadius: 3,
                                backgroundColor: "#f0f4f8",
                                flex: "1 1 45%",
                                minWidth: "300px",
                                boxSizing: "border-box",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    marginBottom: 2,
                                    color: "#1976d2",
                                }}
                            >
                                Group {groupRanking.groupNum}
                            </Typography>

                            <Box>
                                {groupRanking.teams.map((team, index) => (
                                    <Box
                                        key={team.teamName}
                                        sx={{
                                            backgroundColor:
                                                index % 2 === 0
                                                    ? "#ffffff"
                                                    : "#e0f7fa",
                                            padding: 1,
                                            borderRadius: 2,
                                            marginBottom: 1,
                                        }}
                                    >
                                        <Typography variant="body1">
                                            {index + 1}. {team.teamName} -{" "}
                                            {team.points} points
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default GroupRankings;
