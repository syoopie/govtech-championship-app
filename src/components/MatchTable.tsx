import React, { useState } from "react";
import { Match } from "../types";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface MatchListProps {
    matches: Match[];
    onDelete: (index: number) => void;
}

const MatchTable: React.FC<MatchListProps> = ({ matches, onDelete }) => {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

    const handleClickOpen = (index: number) => {
        setSelectedIndex(index);
        setSelectedMatch(matches[index]);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmDelete = () => {
        if (selectedIndex !== null) {
            onDelete(selectedIndex);
        }
        handleClose();
    };

    return (
        <>
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
                            <TableCell
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            ></TableCell>
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
                                <TableCell
                                    sx={{ padding: 2, textAlign: "center" }}
                                >
                                    {match.teamA}
                                </TableCell>
                                <TableCell
                                    sx={{ padding: 2, textAlign: "center" }}
                                >
                                    {match.scoreA}
                                </TableCell>
                                <TableCell
                                    sx={{ padding: 2, textAlign: "center" }}
                                >
                                    {match.teamB}
                                </TableCell>
                                <TableCell
                                    sx={{ padding: 2, textAlign: "center" }}
                                >
                                    {match.scoreB}
                                </TableCell>

                                <TableCell sx={{ textAlign: "center" }}>
                                    <IconButton
                                        onClick={() => handleClickOpen(index)}
                                        color="error"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{"Confirm Deletion"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {selectedMatch
                            ? `Are you sure you want to delete the match between "${selectedMatch.teamA}" and "${selectedMatch.teamB}"? This action cannot be undone.`
                            : "Are you sure you want to delete this match?"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirmDelete}
                        color="error"
                        autoFocus
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default MatchTable;
