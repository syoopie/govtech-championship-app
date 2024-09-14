import React, { useState } from "react";
import TeamInput from "../components/TeamInput";
import MatchInput from "../components/MatchInput";
import TeamTable from "../components/TeamTable";
import MatchTable from "../components/MatchTable";
import { parseTeams, parseMatches } from "../utils/helpers";
import { Match, Team } from "../types";
import { Tabs, Tab, Box, Paper, Typography, Grid2 } from "@mui/material";

const Home: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [matches, setMatches] = useState<Match[]>([]);
    const [selectedTab, setSelectedTab] = useState<number>(0);

    const handleTeamSubmit = (input: string) => {
        const parsedTeams = parseTeams(input);
        setTeams((prevTeams) => [...prevTeams, ...parsedTeams]);
    };

    const handleMatchSubmit = (input: string) => {
        const parsedMatches = parseMatches(input);
        setMatches((prevMatches) => [...prevMatches, ...parsedMatches]);
    };

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    const handleDeleteTeam = (index: number) => {
        const newTeams = teams.filter((_, i) => i !== index);
        setTeams(newTeams);
    };

    const handleDeleteMatch = (index: number) => {
        const newMatches = matches.filter((_, i) => i !== index);
        setMatches(newMatches);
    };

    return (
        <div className="container mx-auto p-4">
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#1976d2",
                    marginBottom: 4,
                }}
            >
                Championship Tracker
            </Typography>

            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    marginBottom: 4,
                    borderRadius: 3,
                }}
            >
                <Grid2 container spacing={4}>
                    <Grid2 size={6}>
                        <Typography variant="h6" gutterBottom>
                            Enter Team Information
                        </Typography>
                        <TeamInput onTeamSubmit={handleTeamSubmit} />
                    </Grid2>

                    <Grid2 size={6}>
                        <Typography variant="h6" gutterBottom>
                            Enter Match Results
                        </Typography>
                        <MatchInput onMatchSubmit={handleMatchSubmit} />
                    </Grid2>
                </Grid2>
            </Paper>

            <Paper
                elevation={2}
                sx={{ padding: 2, borderRadius: 3, marginBottom: 4 }}
            >
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    centered
                    textColor="primary"
                    indicatorColor="primary"
                    sx={{
                        "& .MuiTab-root": {
                            fontWeight: "bold",
                        },
                        "& .MuiTab-root:hover": {
                            color: "#1976d2",
                        },
                    }}
                >
                    <Tab label="Teams" />
                    <Tab label="Matches" />
                </Tabs>
            </Paper>

            <Box mt={4}>
                {selectedTab === 0 && (
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        <TeamTable teams={teams} onDelete={handleDeleteTeam} />
                    </Paper>
                )}
                {selectedTab === 1 && (
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        <MatchTable
                            matches={matches}
                            onDelete={handleDeleteMatch}
                        />
                    </Paper>
                )}
            </Box>
        </div>
    );
};

export default Home;
