import { useState } from "react";
import SearchBar from "../components/SearchBar";

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

    return (
        <main>
            <h1>Home Page</h1>
            <SearchBar setSearchType={setSearchType} setSearchInput={setSearchInput} />
        </main>
    );
};

export default Home;