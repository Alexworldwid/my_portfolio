"use client";

import { toast } from "react-hot-toast";


type Props = {
    value: string;
    label?: string;
    children: React.ReactNode;
}

export default function CopyToClipboard({ value, label = "Copy to clipboard", children }: Props) {
    const handleCopy = () => {
        navigator.clipboard
            .writeText(value)
            .then(() => {
                toast.success(label); // Success toast
            })
            .catch((error) => {
                toast.error(`Failed to copy: ${error.message}`); // Error toast
            });
    };

    return (
        <span onClick={handleCopy} style={{ cursor: "pointer" }} title="Copy to clipboard">
            {children}
        </span>
    );
}