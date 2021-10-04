import axios from 'axios';
import { useEffect, useState } from 'react';

interface user {
    id: number;
    name: string;
    username: string;
    email: string;
}

const Typicode: React.FunctionComponent = () => {

    const [users, setUsers] = useState<user[] | undefined>([]);

    const fetchData = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');

        console.log(data);
        setUsers(data);
    };

    const renderUsers = users && users.map( user => {
        return (
            <div key={user.id}>
                <p>{user && user.name}</p>
                <p>{user && user.email}</p>
            </div>
        );
    });

    useEffect(()=>{
        fetchData();
        
    },[])

    return (
        <div>
            <h2>TypiCode</h2>
            {renderUsers}
        </div>
    );
};

export default Typicode;