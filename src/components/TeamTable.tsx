import React, { useState } from "react";
import { Team } from "../types";
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

interface TeamTableProps {
    teams: Team[];
    onDelete: (index: number) => void;
}

const TeamTable: React.FC<TeamTableProps> = ({ teams, onDelete }) => {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selectedTeamName, setSelectedTeamName] = useState<string | null>(
        null
    );

    const handleClickOpen = (index: number) => {
        setSelectedIndex(index);
        setSelectedTeamName(teams[index].name);
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
                                <TableCell
                                    sx={{ padding: 2, textAlign: "center" }}
                                >
                                    {team.name}
                                </TableCell>
                                <TableCell
                                    sx={{ padding: 2, textAlign: "center" }}
                                >
                                    {team.regDate}
                                </TableCell>
                                <TableCell
                                    sx={{ padding: 2, textAlign: "center" }}
                                >
                                    {team.groupNum}
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
                        {selectedTeamName
                            ? `Are you sure you want to delete the team "${selectedTeamName}"? This action cannot be undone.`
                            : "Are you sure you want to delete this team?"}
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

export default TeamTable;
