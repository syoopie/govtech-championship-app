// src/components/TeamInput.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";

interface TeamInputProps {
    onTeamSubmit: (teamInput: string) => void;
}

const TeamInput: React.FC<TeamInputProps> = ({ onTeamSubmit }) => {
    const [teamInput, setTeamInput] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onTeamSubmit(teamInput);
        setTeamInput(""); // Clear input after submission
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTeamInput(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="my-4">
            <textarea
                value={teamInput}
                onChange={handleChange}
                className="w-full p-2 border rounded-md mt-2"
                rows={5}
                placeholder="e.g. TeamA 17/05 1"
            ></textarea>
            <button
                type="submit"
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
                Submit Teams
            </button>
        </form>
    );
};

export default TeamInput;
