"use client";
import {
    Excalidraw,
    exportToCanvas,
    exportToSvg,
    exportToBlob
} from "@excalidraw/excalidraw";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import React, { useEffect, useRef, useState } from "react";
interface CanvasProps {

    apiUrl?: string;
}

const DrawBoard: React.FC<CanvasProps> = (props) => {
    const excalidrawRef = useRef<ExcalidrawImperativeAPI>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [isPolling, setIsPolling] = useState(false);
    const [images, setImages] = useState([]);

    const [selectedPrompt, setSelectedPrompt] = useState({
        key: "",
        value: "",
    });



    // const handleImageSubmission = async () => {
    //     setIsLoading(true);
    //     try {
    //         const blob = await canvasToBlob(canvasRef);
    //         const remixId = await submitImage(blob, selectedPrompt.value);
    //         if (!remixId) {
    //             alert("Something went wrong. Please try again.");
    //         } else {
    //             // Start polling for status
    //             const modelId = "1e7737d7-545e-469f-857f-e4b46eaa151d";
    //             setIsPolling(true);
    //             setIsLoading(false);
    //             pollRemixStatus(modelId, remixId, setImages, setIsPolling);
    //         }
    //     } catch (error: unknown) {
    //         if (error instanceof Error) {
    //             console.error("Error while submitting the form data:", error.message);
    //         }
    //         setIsLoading(false);
    //     }
    // };





    return (
        <div style={{ height: "600px", width: '800px', margin: '5rem' }}>
            <Excalidraw
                ref={excalidrawRef}
                gridModeEnabled={true}
                theme='dark'
                autoFocus={true}

            />
        </div>

    );
};

export default DrawBoard;