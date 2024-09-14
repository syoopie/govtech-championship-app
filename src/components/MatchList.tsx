// src/components/MatchList.tsx
import React from "react";
import { Match } from "../types";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

interface MatchListProps {
    matches: Match[];
}

const MatchList: React.FC<MatchListProps> = ({ matches }) => {
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
                            Team A
                        </TableCell>
                        <TableCell
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Score A
                        </TableCell>
                        <TableCell
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Team B
                        </TableCell>
                        <TableCell
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Score B
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {matches.map((match, index) => (
                        <TableRow
                            hover
                            key={index}
                            sx={{
                                backgroundColor:
                                    index % 2 === 0 ? "#f5f5f5" : "white",
                                "&:hover": {
                                    backgroundColor: "#e0f7fa",
                                },
                            }}
                        >
                            <TableCell sx={{ padding: 2, textAlign: "center" }}>
                                {match.teamA}
                            </TableCell>
                            <TableCell sx={{ padding: 2, textAlign: "center" }}>
                                {match.scoreA}
                            </TableCell>
                            <TableCell sx={{ padding: 2, textAlign: "center" }}>
                                {match.teamB}
                            </TableCell>
                            <TableCell sx={{ padding: 2, textAlign: "center" }}>
                                {match.scoreB}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MatchList;
