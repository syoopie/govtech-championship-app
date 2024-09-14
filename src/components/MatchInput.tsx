// src/components/MatchInput.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";

interface MatchInputProps {
    onMatchSubmit: (matchInput: string) => void;
}

const MatchInput: React.FC<MatchInputProps> = ({ onMatchSubmit }) => {
    const [matchInput, setMatchInput] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onMatchSubmit(matchInput);
        setMatchInput(""); // Clear input after submission
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMatchInput(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="my-4">
            <label className="block text-gray-700">Enter Match Results:</label>
            <textarea
                value={matchInput}
                onChange={handleChange}
                className="w-full p-2 border rounded-md mt-2"
                rows={5}
                placeholder="e.g. TeamA TeamB 1 2"
            ></textarea>
            <button
                type="submit"
                className="mt-2 bg-green-500 text-white py-2 px-4 rounded"
            >
                Submit Matches
            </button>
        </form>
    );
};

export default MatchInput;
