import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import cross from '../../../assets/icons/cross.svg';
import search from '../../../assets/icons/search.svg';
import { Search,Inputbar,Button } from "./Search.styled";

const Searchbar = ({placeholderValue}) => {
    const [isValue,setisValue] = useState(false);
    const [searchInput,setSearchInput] = useState('');
    const onChangeHandler = (e) => {
        setSearchInput(e.target.value);  
    }
    const handleClick = (e) => {
        setSearchInput('');
    }
    useEffect(() => {
        if(searchInput) {
            setisValue(true);
        }
        else {
            setisValue(false);
        } 
      }, [searchInput]);
     
    return (
        <Search>
            <img src={search} alt="search"/>
            <Inputbar placeholder={placeholderValue} onInput={onChangeHandler} value={searchInput}/>
            {isValue ? <Button onClick={handleClick}><img src={cross} alt="cross"/></Button> : null }
        </Search>
    );
};
Searchbar.propTypes = {
    placeholderValue: PropTypes.string,
}
Searchbar.defaultProps = {
    backgroundColor:null,
    placeholderValue: 'Search store'
}
export default Searchbar;

