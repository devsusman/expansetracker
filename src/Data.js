
// import { v4 as uuidv4 } from 'uuid';

// export default[
//     {item: "milk",
//         id: uuidv4(), 
//     category:"grocery",
//     amount:50
//     },
//     {item:"book",
//         id: uuidv4(), 
//         category:"education",
//         amount:"150"
//     },
//     {
//      item:"painkiller",
//      id: uuidv4(), 
//      category:"medicine",
//      amount:"120"
//     }
// ]

import { v4 as uuidv4 } from 'uuid';
const data = [
    {
        item: "milk",
        id: uuidv4(),
        category: "grocery",
        amount: 50
    },
    {
        item: "book",
        id: uuidv4(),
        category: "education",
        amount: "150"
    },
    {
        item: "painkiller",
        id: uuidv4(),
        category: "medicine",
        amount: "120"
    }
];

export default data;
