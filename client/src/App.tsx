import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
    useEffect(() => {
        axios
            .get(`/userInfo/getSummonerId/쫀득한빵`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return <div className="App">ㅎㅇ</div>;
}

export default App;
