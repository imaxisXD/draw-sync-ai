"use client";

import {
    handleMouseDown,
    handleMouseLeave,
    handleMouseMove,
    handleMouseUp,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
} from "@/lib/canvasHandlers";
import { canvasToBlob } from "@/lib/canvasUtils";
import React, { useEffect, useRef, useState } from "react";
import rough from 'roughjs/bundled/rough.esm.js';
interface CanvasProps {
    width: number;
    height: number;
    apiUrl?: string;
}

const DrawBoard: React.FC<CanvasProps> = (props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drawing = useRef<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPolling, setIsPolling] = useState(false);
    const [images, setImages] = useState([]);

    const [selectedPrompt, setSelectedPrompt] = useState({
        key: "",
        value: "",
    });

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            console.log(canvas);

            const ctx = canvas.getContext("2d");

            // x, y, width, height
            if (ctx) {
                // Fill the canvas with a white background
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, props.width, props.height);
            }
        }
    }, [props.height, props.width, images]);

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

    const clearCanvas = () => {
        setImages([]);
    };

    function drawreact() {
        const rc = rough.canvas(canvasRef.current);
        rc.rectangle(50, 50, 200, 200)
    }

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={props.width}
                height={props.height}
                onMouseDown={(e) => handleMouseDown(e, drawing, canvasRef)}
                onMouseMove={(e) => handleMouseMove(e, drawing, canvasRef)}
                onMouseUp={() => handleMouseUp(drawing)}
                onMouseLeave={() => handleMouseLeave(drawing)}
                onTouchStart={(e) => handleTouchStart(e, drawing, canvasRef)}
                onTouchMove={(e) => handleTouchMove(e, drawing, canvasRef)}
                onTouchEnd={() => handleTouchEnd(drawing)}
                style={{
                    touchAction: "none",
                    maxWidth: "100%",
                    cursor: "url('pen-fountain.svg') 4 28, default",
                }}
            ></canvas>
            <button onClick={drawreact}>Reacctt</button>
        </div>
    );
};

export default DrawBoard;