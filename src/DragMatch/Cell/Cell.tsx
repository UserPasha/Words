import React, {FC} from 'react';

interface CellProps {
    handleDrop: (event: React.DragEvent<HTMLDivElement>, cellIndex: number)=>void
    handleDragOver: (event: React.DragEvent<HTMLDivElement>)=>void
}

export const Cell:FC<CellProps> = ({handleDrop, handleDragOver}) => {
    const cells = [0,1,2,3,4]
    return <>
        <div className="cells">
        {cells.map((cell, index) => (
            <div
                key={index}
                className={`cell ${cells[index] ? 'full' : ''}`}
                onDrop={event => handleDrop(event, index)}
                onDragOver={event => handleDragOver(event)}
            >
                {cells[index] && <div className={`shape ${cells[index]}`}></div>}
            </div>
        ))}
        </div>
    </>
};

