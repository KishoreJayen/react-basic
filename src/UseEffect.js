import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [name, setName] = useState(null);

    useEffect(() => {
        const fetchData = async ()=>{
             try{
                const response = await fetch ("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error("Failed to fetch the data")
                }
                const data = await response.json();
                const [item]= data;
                setName(item);
             }catch(error){
                console.error("Error to handling the API")
             }
    };
   fetchData();
    }, []);

    return (
        <div>
            <h1>UseEffect</h1>
            {name && (
                <div>
                    <h2>{name.name}</h2>
                    <p>Email: {name.email}</p>
                    <p>Phone: {name.phone}</p>
                    <p>Sreet: {name.address.street}</p>
                </div>
            )}
            <hr></hr>
        </div>
    );
};

export default UseEffect;

// import React, { useEffect, useState } from 'react';

// const UseEffect = () => {
//     const [secondName, setSecondName] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users");
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                     const secondItem = data[1]; // Get the second item from the array
//                     setSecondName(secondItem.name);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Second Name from API</h1>
//             {secondName && (
//                 <div>
//                     <h2>{secondName}</h2>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UseEffect;

