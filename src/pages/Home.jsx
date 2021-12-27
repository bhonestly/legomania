import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

const {REACT_APP_BASE_URL, REACT_APP_API_KEY} = process.env;

const Home = () => {
    // const [dataList, setDataList] = useState([]);

    // const handleData = () => {
    //     console.log(Array.isArray(data));
    //     let createList = data.results.map((el, idx) => {
    //         return (<li id={idx}>{el.name}</li>);
    //     })
    //     console.log('this is createList', createList);
    //     setDataList(createList);
    // }

    // useEffect(() => {
    //     console.log(data);
    //     if (data) {
    //         handleData();
    //     }
    // }, [data]);


    const [searchType, setSearchType] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([])

    const getData = async () => {
        const response = await fetch(`${REACT_APP_BASE_URL}/${searchType}/?key=${REACT_APP_API_KEY}`);
        const data = await response.json();
        console.log(data);
        setData(data);
    }

    useEffect(() => {
        getData();
    }, [searchType]);

    let list = data.results.map((el, idx) => {
        return (<li id={idx}>{el.name}</li>);
    })

    return (
        <main>
            <h1>Home Page</h1>
            <SearchBar setSearchType={setSearchType} setSearchInput={setSearchInput} />
            {list}
        </main>
    );
};

export default Home;