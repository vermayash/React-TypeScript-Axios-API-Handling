import axios from 'axios';
import { useEffect, useState } from 'react';

interface Name {
    first: string;
    last: string;
}

interface Login {
    username: string;
}

interface Picture {
    large: string;
}

interface User {
    name: Name;
    login: Login;
    picture: Picture;
}

const RandomUser: React.FunctionComponent = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState<number>(1);

    const fetchData = async () => {
        const res: any = await axios.get('https://randomuser.me/api/', {
            params: {
                results: 3,
                seed: 'foobar',
                page: page,
            }
        });
        
        setUsers(res.data.results);
    };

    const renderUser = users.map( (user: User) => {
        return (
            <div key={user.login.username}>
                <img src={user.picture.large} alt={user.name.first} /><br />
                <span>{user.name.first + " " + user.name.last}</span>
            </div>
        );
    });

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <div>
            <h2>Random User</h2>
            <div>
                {renderUser}
            </div>

            <div style={{marginTop: "5px"}}>
                <input type="button" value="Back Page" onClick={() => (page > 1 ? setPage(page - 1) : '' )} />
                <input type="button" value="Next Page" onClick={() => setPage(page + 1)} />
            </div>
            
            
        </div>
    );
};

export default RandomUser;