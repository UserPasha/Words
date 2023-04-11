// import React, { useState } from "react";
// import {Shape} from "./Shape/Shape";
// import {Cell} from "./Cell/Cell";
//
//
// export const GameBoard = () => {
//     const SHAPES = ["square", "circle", "triangle", "rhombus", "oval"];
//
//     const [cells, setCells] = useState<Array<string>>(new Array(5).fill(""));
//
//     const handleDrop = (shape: string, index: number) => {
//         const shapeCount = cells.filter((cell) => cell === shape).length;
//
//         if (shapeCount === 2) {
//             return;
//         }
//
//         const newCells = [...cells];
//         newCells[index] = shape;
//         setCells(newCells);
//     };
//
//     const handleDragStart = (event: React.DragEvent<HTMLDivElement>, shape: string) => {
//         event.dataTransfer.setData("text/plain", shape);
//     };
//
//     return (
//         <div className="game-board">
//             {SHAPES.map((shape) => (
//                 <Shape key={shape} shape={shape} onDragStart={handleDragStart} />
//             ))}
//             {cells.map((shape, index) => (
//                 <Cell key={index} index={index} shape={shape} onDrop={handleDrop} />
//             ))}
//         </div>
//     );
// };
import React, {FC, useState} from 'react';
import {RenderShapes} from "./Shape/Shape";
import {Cell} from "./Cell/Cell";

// Define the shape types
// Определите типы фигур
export type ShapeType = 'square' | 'circle' | 'triangle' | 'rhombus' | 'oval' | '';

// Define the shape interface
// Определите интерфейс формы
export interface Shape {
    id: number;
    type: ShapeType;
}

export const DragMatch = () => {
    // Initialize the shapes array
    // Инициализация массива фигур
    const [shapes, setShapes] = useState<Shape[]>([
        {id: 1, type: 'square'},
        {id: 2, type: 'square'},
        {id: 3, type: 'circle'},
        {id: 4, type: 'circle'},
        {id: 5, type: 'triangle'},
        {id: 6, type: 'triangle'},
        {id: 7, type: 'rhombus'},
        {id: 8, type: 'rhombus'},
        {id: 9, type: 'oval'},
        {id: 10, type: 'oval'},
    ]);


// Initialize the cells array
// Инициализация массива ячеек
    const [cells, setCells] = useState<ShapeType[]>([]);

    // Define the handleDragStart function
    // Определите функцию handleDragStart
    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, shape: Shape) => {
        // Set the data transfer object
        // Установите объект передачи данных
        event.dataTransfer.setData('text/plain', shape.id.toString());

        // Set the dragged shape
        // Установите перетаскиваемую форму
        event.dataTransfer.setDragImage(event.currentTarget, 0, 0);
    };

    // Define the handleDrop function
    // Определите функцию handleDrop
    const handleDrop = (event: React.DragEvent<HTMLDivElement>, cellIndex: number) => {
        event.preventDefault();

        // Get the shape ID from the data transfer object
        // Получение идентификатора формы из объекта передачи данных
        const shapeId = Number(event.dataTransfer.getData('text'));

        // Find the shape in the shapes array
        // Найдите фигуру в массиве shapes
        const shape = shapes.find(shape => shape.id === shapeId);

        // Check if the cell already contains a shape of the same type
        // Проверьте, содержит ли ячейка уже фигуру того же типа.
        if (cells[cellIndex] !== undefined && cells[cellIndex] !== shape?.type) {
            return;
        }

        // Update the cells array with the dropped shape
        // Обновление массива ячеек с измененной формой
        const newCells = [...cells];
        newCells[cellIndex] = shape?.type || '';
        setCells(newCells);

        // Remove the shape from the shapes array
        // Удалите форму из массива shapes
        const newShapes = shapes.filter(shape => shape.id !== shapeId);
        setShapes(newShapes);
    };

    // Define the handleDragOver function
    // Определите функцию handleDragOver
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    // Define the renderShapes function
    // Определяем функцию renderShapes
    // const renderShapes = () => {
    //     return shapes.map(shape => (
    //         <div
    //             key={shape.id}
    //             className={`shape ${shape.type}`}
    //             draggable
    //             onDragStart={event => handleDragStart(event, shape)}
    //         ></div>
    //     ));
    // };
    // Define the renderCells function
    // Определите функцию renderCells

    return (
        <div className="App">
           <RenderShapes shapes={shapes} handleDragStart={handleDragStart}/>
           <Cell handleDragOver={handleDragOver} handleDrop={handleDrop}/>
        </div>
    );


}