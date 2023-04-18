// import React, {FC, useEffect, useState} from 'react';
// import style from './Circle.module.css'
//
// export const Circle: FC = () => {
//     const [rotationAngle, setRotationAngle] = useState(0);
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRotationAngle((prevAngle) => prevAngle + 1);
//         }, 30);
//
//         return () => clearInterval(interval);
//     }, []);
//
//     const numHoles = 3;
//     const angleBetweenHoles = 360 / numHoles;
//
//     const holeElements = Array.from({ length: numHoles }).map((_, index) => {
//         const angle = index * angleBetweenHoles + rotationAngle;
//         const style = {
//             transform: `rotate(${angle}deg) translate(0, -50%) rotate(-${angle}deg)`,
//         };
//         return <div key={index} className="hole" style={style}></div>;
//     });
//
//     const circleStyle = {
//         transform: `rotate(${rotationAngle}deg)`,
//     };
//
//     return (
//         <div className="container">
//             <div className="circle" style={circleStyle}>
//                 {holeElements}
//             </div>
//         </div>
//     );
// };
//
//
//
 import React, { useState, useEffect } from 'react';
//
// interface CircleProps {
//     width: number;
//     height: number;
//     holeRadius: number;
//     drumRadius: number;
// }
//
// export const Circle: React.FC<CircleProps> = ({
//                                        width,
//                                        height,
//                                        holeRadius,
//                                        drumRadius,
//                                    }) => {
//     const [rotation, setRotation] = useState(0);
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRotation(rotation + 1);
//         }, 10);
//         return () => clearInterval(interval);
//     }, [rotation]);
//
//     return (
//         <div
//             style={{
//                 width: `${width}px`,
//                 height: `${height}px`,
//                 borderRadius: '40%',
//                 border: '1px solid black',
//                 position: 'relative',
//                 backgroundColor: 'green'
//             }}
//         >
//             <div
//                 style={{
//                     width: `${holeRadius}px`,
//                     height: `${holeRadius}px`,
//                     borderRadius: '40%',
//                     backgroundColor: 'black',
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
//                 }}
//             />
//             <div
//                 style={{
//                     width: `${drumRadius}px`,
//                     height: `${drumRadius}px`,
//                     borderRadius: '40%',
//                     border: '1px solid black',
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
//                     backgroundColor: 'yellow'
//                 }}
//             />
//         </div>
//     );
// };

