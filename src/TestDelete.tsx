 import React, {useRef, useState} from 'react';
//
// const TestDelete = () => {
//     const dragItem = useRef();
//     const dragOverItem = useRef();
//     const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
//
//     const dragStart = (e: React.DragEvent<HTMLDivElement>, position:any) => {
//             dragItem.current = position;
//         dragItem.current = position;
//         //console.log(e.target.innerHTML);
//     };
//
//     const dragEnter = (e: React.DragEvent<HTMLDivElement>, position:any) => {
//         dragOverItem.current = position;
//         //console.log(e.target.innerHTML);
//     };
//
//     const drop = (e: React.DragEvent<HTMLDivElement>) => {
//         const copyListItems = [...list];
//         if(dragItem){
//             // @ts-ignore
//             const dragItemContent = copyListItems[dragItem.current];
//             // @ts-ignore
//             copyListItems.splice(dragItem.current, 1);
//             // @ts-ignore
//             copyListItems.splice(dragOverItem.current, 0, dragItemContent);
//             // @ts-ignore
//             dragItem.current = null;
//             // @ts-ignore
//             dragOverItem.current = null;
//             setList(copyListItems);
//         }
//
//     };
//
//     return (
//         <>
//             {
//                 list&&
//                 list.map((item, index) => (
//                     <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
//                          onDragStart={(e) => dragStart(e, index)}
//                          onDragEnter={(e) => dragEnter(e, index)}
//                          onDragEnd={drop}
//                          key={index}
//                          draggable>
//                         {item}
//                     </div>
//                 ))}
//         </>
//     );
// };
//
// export default TestDelete;