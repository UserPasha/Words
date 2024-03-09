// import React, { useState, useEffect } from 'react';
// import style from './Calendar.module.css';
//
// interface IMonthOptions {
//     month: 'long';
//     year: 'numeric';
// }
//
// const monthNames = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];
//
// const generateYearCalendar = () => {
//     const daysInYear = 365;
//     const year = new Date().getFullYear();
//     const dayColors = ['blue', 'blue', 'blue', 'red', 'red', 'red']; // Example array of colors for each day
//     const calendar = [];
//
//     for (let i = 0; i < daysInYear; i++) {
//         const currentDate = new Date(year, 0, i + 1);
//         const month = currentDate.toLocaleString('en-US', { month: 'long' });
//         const dayNumber = currentDate.getDate();
//         const color = dayColors[i % dayColors.length];
//         calendar.push({ index: i, month, dayNumber, color });
//     }
//
//     return calendar;
// };
//
// export const Calendar = () => {
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [calendarData, setCalendarData] = useState<{ index: number; month: string; dayNumber: number; color: string; }[]>([]);
//
//     useEffect(() => {
//         setCurrentDate(new Date());
//     }, []);
//
//     useEffect(() => {
//         const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
//         const calendar = generateMonthGrid(monthName);
//         setCalendarData(() => calendar);
//     }, [currentDate]);
//
//     const goToPreviousMonth = () => {
//         setCurrentDate(prevDate => {
//             const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
//             return prevMonth;
//         });
//     };
//
//     const goToNextMonth = () => {
//         setCurrentDate(prevDate => {
//             const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
//             return nextMonth;
//         });
//     };
//
//     const generateMonthGrid = (targetMonth: string) => {
//         const targetMonthIndex = monthNames.findIndex(month => month.toLowerCase() === targetMonth.toLowerCase());
//
//         if (targetMonthIndex === -1) {
//             console.error('Invalid month name');
//             return [];
//         }
//
//         const year = currentDate.getFullYear();
//         const firstDayOfMonth = new Date(year, targetMonthIndex, 1).getDay();
//         const daysInMonth = new Date(year, targetMonthIndex + 1, 0).getDate();
//
//         const yearCalendar = generateYearCalendar();
//         const monthDays = yearCalendar.slice(firstDayOfMonth, firstDayOfMonth + daysInMonth);
//
//         const gridItems = monthDays.map(day => ({
//             index: day.index,
//             month: day.month,
//             dayNumber: day.dayNumber,
//             color: day.color
//         }));
//
//         return gridItems;
//     };
//
//     const monthOptions: IMonthOptions = { month: 'long', year: 'numeric' };
//     const displayDate = currentDate.toLocaleDateString(undefined, monthOptions);
//     const month = monthNames[currentDate.getMonth()];
//
//     return (
//         <div className={style.calendar}>
//             <div className={style.calendarHeader}>
//                 <button className={style.arrow} onClick={goToPreviousMonth}>
//                     &#8249;
//                 </button>
//                 <h2 className={style.month}>{displayDate}</h2>
//                 <button onClick={goToNextMonth}>&#8250;</button>
//             </div>
//             <div className={style.calendarGrid}>
//                 {generateMonthGrid(month).map(item => (
//                     <div key={item.index} style={{ backgroundColor: item.color }}>
//                         {item.dayNumber}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };





    // const generateMonthGrid = (targetMonth: string) => {
    //     const targetMonthIndex = monthNames.findIndex(month => month.toLowerCase() === targetMonth.toLowerCase());
    //
    //     if (targetMonthIndex === -1) {
    //         console.error('Invalid month name');
    //         return [];
    //     }
    //
    //     const year = currentDate.getFullYear();
    //     const firstDayOfMonth = new Date(year, targetMonthIndex, 1).getDay();
    //     const daysInMonth = new Date(year, targetMonthIndex + 1, 0).getDate();
    //
    //     const yearCalendar = generateYearCalendar();
    //     const monthDays = yearCalendar.slice(firstDayOfMonth, firstDayOfMonth + daysInMonth);
    //
    //     const gridItems = monthDays.map(day => (
    //         <div key={`day-${day.index}`} className={`${style.gridItem} ${style[day.color]}`}>
    //             {day.dayNumber}
    //         </div>
    //     ));
    //
    //     return gridItems;
    // };

//     const generateMonthGrid = (targetMonth: string) => {
//         const targetMonthIndex = monthNames.findIndex(month => month.toLowerCase() === targetMonth.toLowerCase());
//
//         if (targetMonthIndex === -1) {
//             console.error('Invalid month name');
//             return [];
//         }
//
//         const year = currentDate.getFullYear();
//         const firstDayOfMonth = new Date(year, targetMonthIndex, 1).getDay();
//         const daysInMonth = new Date(year, targetMonthIndex + 1, 0).getDate();
//
//         const yearCalendar = generateYearCalendar();
//         const monthDays = yearCalendar.slice(firstDayOfMonth, firstDayOfMonth + daysInMonth);
//
//         const gridItems = monthDays.map(day => ({
//             index: day.index,
//             month: day.month,
//             dayNumber: day.dayNumber,
//             color: day.color
//         }));
//
//         return gridItems;
//     };
//
//     const monthOptions: IMonthOptions = { month: 'long', year: 'numeric' };
//     const displayDate = currentDate.toLocaleDateString(undefined, monthOptions);
//     const month = monthNames[currentDate.getMonth()];
//
//     return (
//         <div className={style.calendar}>
//             <div className={style.calendarHeader}>
//                 <button className={style.arrow} onClick={goToPreviousMonth}>
//                     &#8249;
//                 </button>
//                 <h2 className={style.month}>{displayDate}</h2>
//                 <button onClick={goToNextMonth}>&#8250;</button>
//             </div>
//             <div className={style.calendarGrid}>{generateMonthGrid()}</div>
//         </div>
//     );
// };


// import React, { useState, useEffect } from 'react';
// import style from './Calendar.module.css';
//
// export const Calendar = () => {
//
//     interface IMonthOptions {
//         month: 'long'
//         year: 'numeric'
//     }
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [calendarData, setCalendarData] = useState<{ index: number; month: string; dayNumber: number; color: string; }[]>([]);
//     //console.log(calendarData)
//     useEffect(() => {
//         setCurrentDate(new Date());
//     }, []);
//
//     useEffect(() => {
//         const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
//         const calendar = generateMonthGrid(monthName);
//         setCalendarData(calendar);
//     }, [currentDate]);
//
//     useEffect(() => {
//         const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
//         const calendar = generateMonthGrid(monthName);
//         setCalendarData(calendar);
//     }, [currentDate]);
//
//     const goToPreviousMonth = () => {
//         setCurrentDate(prevDate => {
//             const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
//             return prevMonth;
//         });
//     };
//
//     const goToNextMonth = () => {
//         setCurrentDate(prevDate => {
//             const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
//             return nextMonth;
//         });
//     };
//     const monthOptions: IMonthOptions = { month: 'long', year: 'numeric' };
//     const displayDate = currentDate.toLocaleDateString(undefined, monthOptions);
//
//     const monthNames = [
//         'January', 'February', 'March', 'April', 'May', 'June',
//         'July', 'August', 'September', 'October', 'November', 'December'
//     ];
//     const month = monthNames[currentDate.getMonth()];
//     //console.log(monthNames[month])
//     const generateMonthGrid = (targetMonth: string) => {
//
//
//         const monthNames = [
//                 'January', 'February', 'March', 'April', 'May', 'June',
//                 'July', 'August', 'September', 'October', 'November', 'December'
//             ];
//             const targetMonthIndex = monthNames.findIndex(month => month.toLowerCase() === targetMonth.toLowerCase());
//
//             if (targetMonthIndex === -1) {
//                 console.error('Invalid month name');
//                 return [];
//             }
//
//
//
//
//
//         const year = currentDate.getFullYear();
//         const month = currentDate.getMonth();
//
//
//
//
//
//         const firstDayOfMonth = new Date(year, targetMonthIndex, 1).getDay();
//         const daysInMonth = new Date(year, targetMonthIndex + 1, 0).getDate();
//
//
//
//         const yearCalendar = generateYearCalendar();
//         const monthDays = yearCalendar.slice(firstDayOfMonth, firstDayOfMonth + daysInMonth);
//
//          //console.log(monthDays)
//
//         const gridItems = monthDays.map(day => (
//             <div key={`day-${day.index}`} className={`${style.gridItem} ${style[day.color]}`}>
//                 {day.dayNumber}
//             </div>
//         ));
//
//         return gridItems;
//     };
//
//     const generateYearCalendar = () => {
//         const daysInYear = 365;
//         const year = new Date().getFullYear();
//
//         const calendar = [];
//         const dayColors = ['blue', 'blue', 'blue', 'red', 'red', 'red']; // Example array of colors for each day
//
//         for (let i = 0; i < daysInYear; i++) {
//             const currentDate = new Date(year, 0, i + 1);
//             const month = currentDate.toLocaleString('en-US', { month: 'long' });
//             const dayNumber = currentDate.getDate();
//             const color = dayColors[i % dayColors.length];
//
//             calendar.push({ index: i, month, dayNumber, color });
//         }
//
//         return calendar;
//     };
//
//     return (
//         <div className={style.calendar}>
//             <div className={style.calendarHeader}>
//                 <button className={style.arrow} onClick={goToPreviousMonth}>
//                     &#8249;
//                 </button>
//                 <h2 className={style.month}>{displayDate}</h2>
//                 <button onClick={goToNextMonth}>&#8250;</button>
//             </div>
//             <div className={style.calendarGrid}>{generateMonthGrid(month)}</div>
//         </div>
//     );
// };






// import React, {useState} from 'react';
// import style from './Calendar.module.css'
//
// type monthOptionsType = {
//     month: 'long'
//     year: 'numeric'
// }
// export const Calendar = () => {
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const startAlternatingAt = 5;
// //(i - startAlternatingAt)
//     const goToPreviousMonth = () => {
//         setCurrentDate(prevDate => {
//             const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
//             return prevMonth;
//         });
//     };
//
//     const goToNextMonth = () => {
//         setCurrentDate(prevDate => {
//             const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
//             return nextMonth;
//         });
//     };
//
//     const generateYearCalendar = () => {
//     const daysInYear = 365;
//     const year = new Date().getFullYear();
//
//     const calendar = [];
//     const dayColors = ['blue', 'blue', 'blue', 'red', 'red', 'red']; // Example array of colors for each day
//
//     for (let i = 0; i < daysInYear; i++) {
//         const currentDate = new Date(year, 0, i + 1);
//         const month = currentDate.toLocaleString('en-US', { month: 'long' });
//         const dayNumber = currentDate.getDate();
//         const color = dayColors[i % dayColors.length];
//
//         calendar.push({ index: i, month, dayNumber, color });
//     }
//
//     return calendar;
// };
//
//     const monthOptions: monthOptionsType = { month: 'long', year: 'numeric' };
//     const displayDate = currentDate.toLocaleDateString(undefined, monthOptions);
//
//     const generateMonthGrid = () => {
//         const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
//         const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
//
//         const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//
//         const gridItems = [];
//
//         for (let i = 0; i < 7; i++) {
//             gridItems.push(
//                 <div key={`day-of-week-${i}`} className={style.dayOfWeek}>
//                     {daysOfWeek[i]}
//                 </div>
//             );
//         }
//
//
//         for (let i = 0; i < firstDayOfMonth; i++) {
//             gridItems.push(<div key={`empty-${i}`} className={`${style.gridItem} ${style.empty}`}></div>);
//         }
//
//         for (let i = 1; i <= daysInMonth; i++) {
//             const colorClass =(i + startAlternatingAt) % 6 <= 2 ? 'red' : 'blue';
//             gridItems.push(
//                 <div key={`day-${i}`} className={`${style.gridItem} ${style[colorClass]}`}>
//                     {i}
//                 </div>
//             );
//         }
//
//         return gridItems;
//     };
//
//     return (
//         <div className={style.calendar}>
//             <div className={style.calendarHeader}>
//                 <button className={style.arrow} onClick={goToPreviousMonth}>&#8249;</button>
//                 <h2 className={style.month}>{displayDate}</h2>
//                 <button onClick={goToNextMonth}>&#8250;</button>
//
//             </div>
//             <div className={style.calendarGrid}>{generateMonthGrid()}</div>
//         </div>
//     );
// };
//
// import React, { useState } from 'react';
// import style from './Calendar.module.css';
//
//
// type monthOptionsType = {
//     month: 'long'
//     year: 'numeric'
// }
// function generateYearCalendar() {
//     const daysInYear = 365;
//     const year = new Date().getFullYear();
//
//     const calendar = [];
//
//     for (let i = 0; i < daysInYear; i++) {
//         const currentDate = new Date(year, 0, i + 1);
//         const month = currentDate.toLocaleString('en-US', { month: 'long' });
//         const dayNumber = currentDate.getDate();
//         const color = i % 6 <= 2 ? 'blue' : 'red';
//
//         calendar.push({ index: i, month, dayNumber, color });
//     }
//     console.log(calendar)
//     return calendar;
//
// }

// export const Calendar = () => {
//     const [currentDate, setCurrentDate] = useState(new Date());
//
//     const goToPreviousMonth = () => {
//         setCurrentDate(prevDate => {
//             const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
//             return prevMonth;
//         });
//     };
//
//     const goToNextMonth = () => {
//         setCurrentDate(prevDate => {
//             const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
//             return nextMonth;
//         });
//     };
//
//     const monthOptions: monthOptionsType = { month: 'long', year: 'numeric' };
//     const displayDate = currentDate.toLocaleDateString(undefined, monthOptions);
//
//     const generateMonthGrid = () => {
//         const year = currentDate.getFullYear();
//         const month = currentDate.getMonth();
//         const daysInMonth = new Date(year, month + 1, 0).getDate();
//         const firstDayOfMonth = new Date(year, month, 1).getDay();
//
//         const yearCalendar = generateYearCalendar();
//         const monthDays = yearCalendar.slice(firstDayOfMonth, firstDayOfMonth + daysInMonth);
//
//         console.log(monthDays)
//
//         const gridItems = monthDays.map(day => (
//             <div key={`day-${day.index}`} className={`${style.gridItem} ${style[day.color]}`}>
//                 {day.dayNumber}
//             </div>
//         ));
//
//         return gridItems;
//     };
//
//     const generateYearCalendar = () => {
//         const daysInYear = 365;
//         const year = new Date().getFullYear();
//
//         const calendar = [];
//         const dayColors = ['blue', 'blue', 'blue', 'red', 'red', 'red']; // Example array of colors for each day
//
//         for (let i = 0; i < daysInYear; i++) {
//             const currentDate = new Date(year, 0, i + 1);
//             const month = currentDate.toLocaleString('en-US', { month: 'long' });
//             const dayNumber = currentDate.getDate();
//             const color = dayColors[i % dayColors.length];
//
//             calendar.push({ index: i, month, dayNumber, color });
//         }
//
//         return calendar;
//     };
//
//     return (
//         <div className={style.calendar}>
//             <div className={style.calendarHeader}>
//                 <button className={style.arrow} onClick={goToPreviousMonth}>
//                     &#8249;
//                 </button>
//                 <h2 className={style.month}>{displayDate}</h2>
//                 <button onClick={goToNextMonth}>&#8250;</button>
//             </div>
//             <div className={style.calendarGrid}>{generateMonthGrid()}</div>
//         </div>
//     );
// };


// import React, { useState } from 'react';
// import style from './Calendar.module.css';
//
// export const Calendar = () => {
//
//     type monthOptionsType = {
//     month: 'long'
//     year: 'numeric'
// }
//     const [currentDate, setCurrentDate] = useState(new Date());
//
//     const goToPreviousMonth = () => {
//         setCurrentDate(prevDate => {
//             const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
//             return prevMonth;
//         });
//     };
//
//     const goToNextMonth = () => {
//         setCurrentDate(prevDate => {
//             const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
//             return nextMonth;
//         });
//     };
//
//     const monthOptions: monthOptionsType = { month: 'long', year: 'numeric' };
//     const displayDate = currentDate.toLocaleDateString(undefined, monthOptions);
//
//     const generateMonthGrid = () => {
//         const year = currentDate.getFullYear();
//         const month = currentDate.getMonth();
//         const daysInMonth = new Date(year, month + 1, 0).getDate();
//         const firstDayOfMonth = new Date(year, month, 1).getDay();
//
//         const yearCalendar = generateYearCalendar();
//         const monthDays = yearCalendar.slice(firstDayOfMonth, firstDayOfMonth + daysInMonth);
//
//         const gridItems = monthDays.map(day => (
//             <div key={`day-${day.index}`} className={`${style.gridItem} ${style[day.color]}`}>
//                 {day.dayNumber}
//             </div>
//         ));
//
//         return gridItems;
//     };
//
//     return (
//         <div className={style.calendar}>
//             <div className={style.calendarHeader}>
//                 <button className={style.arrow} onClick={goToPreviousMonth}>
//                     &#8249;
//                 </button>
//                 <h2 className={style.month}>{displayDate}</h2>
//                 <button onClick={goToNextMonth}>&#8250;</button>
//             </div>
//             <div className={style.calendarGrid}>{generateMonthGrid()}</div>
//         </div>
//     );
// };
//
// const generateYearCalendar = () => {
//     const daysInYear = 365;
//     const year = new Date().getFullYear();
//
//     const calendar = [];
//     const dayColors = ['blue', 'blue', 'blue', 'red', 'red', 'red']; // Example array of colors for each day
//
//     for (let i = 0; i < daysInYear; i++) {
//         const currentDate = new Date(year, 0, i + 1);
//         const month = currentDate.toLocaleString('en-US', { month: 'long' });
//         const dayNumber = currentDate.getDate();
//         const color = dayColors[i % dayColors.length];
//
//         calendar.push({ index: i, month, dayNumber, color });
//     }
//
//     return calendar;
// };

// import React, {useState} from 'react';
// import style from './Calendar.module.css';
//
//
//     type monthOptionsType = {
//         month: 'long'
//         year: 'numeric'
//     }
//     export const Calendar = () => {
//         const [currentDate, setCurrentDate] = useState(new Date());
//
//         const goToPreviousMonth = () => {
//             setCurrentDate(prevDate => {
//                 const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
//                 return prevMonth;
//             });
//         };
//
//         const goToNextMonth = () => {
//             setCurrentDate(prevDate => {
//                 const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
//                 return nextMonth;
//             });
//         };
//
//         const monthOptions: monthOptionsType = {month: 'long', year: 'numeric'};
//         const displayDate = currentDate.toLocaleDateString(undefined, monthOptions);
//
//         const generateYearCalendar = (targetMonth: any) => {
//             const year = currentDate.getFullYear();
//             const monthNames = [
//                 'January', 'February', 'March', 'April', 'May', 'June',
//                 'July', 'August', 'September', 'October', 'November', 'December'
//             ];
//             const targetMonthIndex = monthNames.findIndex(month => month.toLowerCase() === targetMonth.toLowerCase());
//
//             if (targetMonthIndex === -1) {
//                 console.error('Invalid month name');
//                 return [];
//             }
//
//             const firstDayOfMonth = new Date(year, targetMonthIndex, 1).getDay();
//             const daysInMonth = new Date(year, targetMonthIndex + 1, 0).getDate();
//
//             const calendar = [];
//             const dayColors = ['blue', 'blue', 'blue', 'red', 'red', 'red']; // Example array of colors for each day
//
//             for (let i = 0; i < daysInMonth; i++) {
//                 const currentDate = new Date(year, targetMonthIndex, i + 1);
//                 const month = monthNames[targetMonthIndex];
//                 const dayNumber = currentDate.getDate();
//                 const color = dayColors[i % dayColors.length];
//
//                 calendar.push({index: i, month, dayNumber, color});
//             }
//
//             return calendar;
//         };
//
//         const generateMonthGrid = () => {
//             const year = currentDate.getFullYear();
//             const month = currentDate.getMonth();
//             const daysInMonth = new Date(year, month + 1, 0).getDate();
//             const firstDayOfMonth = new Date(year, month, 1).getDay();
//
//             const yearCalendar = generateYearCalendar(currentDate.toLocaleString('en-US', {month: 'long'}));
//             const monthDays = yearCalendar.slice(firstDayOfMonth, firstDayOfMonth + daysInMonth);
//
//             // Add empty grid items for days before the first day of the month
//             const emptyGridItemsBefore = Array(firstDayOfMonth)
//                 .fill(null)
//                 .map((_, index) => (
//                     <div key={`empty-before-${index}`} className={`${style.gridItem} ${style.empty}`}></div>
//                 ));
//
//             // Add empty grid items for days after the last day of the month
//             const emptyGridItemsAfter = Array(7 - ((firstDayOfMonth + daysInMonth) % 7))
//                 .fill(null)
//                 .map((_, index) => (
//                     <div key={`empty-after-${index}`} className={`${style.gridItem} ${style.empty}`}></div>
//                 ));
//
//             const gridItems = [...emptyGridItemsBefore, ...monthDays, ...emptyGridItemsAfter].map(day => (
//                 // @ts-ignore
//                 <div key={`day-${day.index}`} className={`${style.gridItem} ${style[day.color]}`}>
//
//                     {
//                         // @ts-ignore
//                         day.dayNumber}
//                 </div>
//             ));
//
//             return gridItems;
//         };
//
//         return (
//             <div className={style.calendar}>
//                 <div className={style.calendarHeader}>
//                     <button className={style.arrow} onClick={goToPreviousMonth}>
//                         &#8249;
//                     </button>
//                     <h2 className={style.month}>{displayDate}</h2>
//                     <button onClick={goToNextMonth}>&#8250;</button>
//                 </div>
//                 <div className={style.calendarGrid}>{generateMonthGrid()}</div>
//             </div>
//         );
//     };

import React, {useState} from 'react';
import style from './Calendar.module.css'

type monthOptionsType = {
    month: 'long'
    year: 'numeric'
}
export const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const startAlternatingAt = 4;
//(i - startAlternatingAt)
    const goToPreviousMonth = () => {
        setCurrentDate(prevDate => {
            const prevMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
            return prevMonth;
        });
    };

    const goToNextMonth = () => {
        setCurrentDate(prevDate => {
            const nextMonth = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
            return nextMonth;
        });
    };

    const monthOptions: monthOptionsType = { month: 'long', year: 'numeric' };
    const displayDate = currentDate.toLocaleDateString(undefined, monthOptions);

    const generateMonthGrid = () => {
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const gridItems = [];

        for (let i = 0; i < 7; i++) {
            gridItems.push(
                <div key={`day-of-week-${i}`} className={style.dayOfWeek}>
                    {daysOfWeek[i]}
                </div>
            );
        }


        for (let i = 0; i < firstDayOfMonth; i++) {
            gridItems.push(<div key={`empty-${i}`} className={`${style.gridItem} ${style.empty}`}></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const colorClass =(i + startAlternatingAt) % 6 <= 2 ? 'red' : 'blue';
            gridItems.push(
                <div key={`day-${i}`} className={`${style.gridItem} ${style[colorClass]}`}>
                    {i}
                </div>
            );
        }

        return gridItems;
    };

    return (
        <div className={style.calendar}>
            <div className={style.calendarHeader}>
                <button className={style.arrow} onClick={goToPreviousMonth}>&#8249;</button>
                <h2 className={style.month}>{displayDate}</h2>
                <button onClick={goToNextMonth}>&#8250;</button>

            </div>
            <div className={style.calendarGrid}>{generateMonthGrid()}</div>
        </div>
    );
};