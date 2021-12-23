import { useState, useEffect } from "react";

const Home = ({data}) => {
    const [dataList, setDataList] = useState([]);

    const handleData = () => {
        console.log(Array.isArray(data));
        let createList = data.results.map((el, idx) => {
            return (<li id={idx}>{el.name}</li>);
        })
        console.log('this is createList', createList);
        setDataList(createList);
    }

    useEffect(() => {
        console.log('this is useEffect');
        console.log(data);
        if (data) {
            handleData();
        }
    }, [data]);

    return (
        <main>
            <h1>Home Page</h1>
            <ul>{dataList}</ul>
        </main>
    );
};

export default Home;