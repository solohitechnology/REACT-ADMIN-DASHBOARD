export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt='' />
                    {params.row.username}
                </div>
            );
        },
    },

    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus  ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        },
    }

]
//temporary data
export const userRows = [
    {
        id: 1,
        username: 'victor',
        img: "./img/tech.png",
        status: 'pendding',
        email: 'solohitech@gmailcom',
        age: '23',

    },
    {
        
        id: 2,
        username: 'solomon john',
        img: "./img/tech.png",
        status: 'active',
        email: 'soft@gmail.com',
        age: '21',

    },
    {
        id: 3,
        username: ' david john',
        img: "./img/tech.png",
        status: 'passive',
        email: 'david@gmail.com',
        age: '21',

    },
    {
        id: 4,
        username: 'wisdom',
        img: "./img/tech.png",
        status: 'pendding',
        email: 'wisdom@gmail.com',
        age: '20',

    },
    {
        id: 5,
        username: 'peter',
        img: "./img/tech.png",
        status: 'active',
        email: 'peter@gmail.com',
        age: '26',

    },
    {
        id: 6,
        username: 'Romeo',
        img: "./img/tech.png",
        status: 'passive',
        email: 'Romeo@gmail.com',
        age: '30',

    },
    {
        id: 7,
        username: 'martins john',
        img: "./img/tech.png",
        status: 'passive',
        email: 'martins@gmail.com',
        age: '21',

    },
    {
        id: 8,
        username: 'martins john',
        img: "./img/tech.png",
        status: 'active',
        email: 'martins@gmail.com',
        age: '15',

    },
    {
        id: 9,
        username: 'martins john',
        img: "./img/tech.png",
        status: 'pendding',
        email: 'martins@gmail.com',
        age: '10',

    },
    {
        id: 10,
        username: 'martins john',
        img: "./img/tech.png",
        status: 'active',
        email: 'martins@gmail.com',
        age: '12',

    },


]