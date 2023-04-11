import React, {FC} from "react";
import {Shape} from "../DragMatch";

interface ShapeProps {
    shapes: Shape[]
    handleDragStart: (event: React.DragEvent<HTMLDivElement>, shape: Shape) => void
}

export const RenderShapes: FC<ShapeProps> = ({shapes, handleDragStart}) => {
    return <>
        <div className="shapes">
        {shapes.map(shape => (<div
            key={shape.id}
            className={`shape ${shape.type}`}
            draggable
            onDragStart={event => handleDragStart(event, shape)}
        >
        </div>))}
            </div>
    </>
};

