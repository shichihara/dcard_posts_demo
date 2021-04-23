import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '../../../asserts/search.svg';
import Reset from '../../../asserts/reset.svg';

const Form = styled.form`
    display: flex;
    position: relative;
    justify-content: space-between;
    margin: 9px 32px;
    flex-shrink: 1;
    width: 666px;
    min-width: 200px;
    height: 30px;
    border-radius: 4px;
    overflow: hidden;
  `;

  const ResetBtn = styled.button`
    display: inline-flex;
    align-items: center;
    position: absolute;
    background: rgb(0, 88, 138);
    top: 0;
    bottom: 0;
    margin: 0 auto;
    border: 0ch;
    right: 47px;
  `;

  const SearchBtn = styled.button`
    flex-shrink: 0;
    background: rgb(0, 106, 166);
    border: 1px solid rgb(0, 88, 138);
    display: flex;
    align-items: center;
    padding: 0 9px;
    cursor: pointer;

    &:disabled {
      cursor: default;  
    }
  `;

  const SearchInput = styled.input`
    height: 100%;
    padding: 0px 8px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    flex-grow: 1;
    flex-shrink: 1;
    border: none;
    min-width: 130px;
    max-width: 640px;
    background: rgb(0, 88, 138);
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.75);
    }
  `;

const SearchBar = () => {

  const [value, setValue] = useState("");

  return (
    <Form
      role="search"
      onSubmit={(event) => {
        event.preventDefault();

        // if (value) {
        //   router.push({
        //     pathname: '/search',
        //     query: {
        //       query: value,
        //       ...(searchForumAlias
        //         ? {
        //             forum: searchForumAlias,
        //           }
        //         : {}),
        //     },
        //   });
        // }
      }}
    >
      <label htmlFor="header-search">
        {/* <VisuallyHidden>搜尋</VisuallyHidden> */}
      </label>

      <SearchInput
        type="text"
        id="header-search"
        value={value}
        placeholder=""
          // searchForumAlias && forumData
          //   ? `在${forumData.name}板搜尋`
          //   : undefined
        
        onChange={(event) => {
          // event.preventDefault();
          setValue(event.target.value);
        }}
      />

      {!!value && (
        <ResetBtn
          type="reset"
          title="清除"
          onClick={() => setValue('')}
        >
          <img src={Reset} alt="清除" width={14} height={14} />
        </ResetBtn>
      )}

      <SearchBtn
        type="submit"
        title="搜尋"
      >
        <img src={Search} alt="搜尋" width={20} height={20} />
      </SearchBtn>
    </Form>
  )
}

export default SearchBar
