// src/components/TeamList.tsx
import React from "react";
import { Team } from "../types";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

interface TeamListProps {
    teams: Team[];
}

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
    return (
        <TableContainer
            component={Paper}
            sx={{ boxShadow: 3, borderRadius: 2 }}
        >
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#1976d2" }}>
                        <TableCell
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Team Name
                        </TableCell>
                        <TableCell
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Registration Date
                        </TableCell>
                        <TableCell
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Group Number
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {teams.map((team, index) => (
                        <TableRow
                            hover
                            key={team.name}
                            sx={{
                                backgroundColor:
                                    index % 2 === 0 ? "#f5f5f5" : "white",
                                "&:hover": {
                                    backgroundColor: "#e0f7fa",
                                },
                            }}
                        >
                            <TableCell sx={{ padding: 2, textAlign: "center" }}>
                                {team.name}
                            </TableCell>
                            <TableCell sx={{ padding: 2, textAlign: "center" }}>
                                {team.regDate}
                            </TableCell>
                            <TableCell sx={{ padding: 2, textAlign: "center" }}>
                                {team.groupNum}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TeamList;
