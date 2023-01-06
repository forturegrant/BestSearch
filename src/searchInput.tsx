import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSearchAsync } from "./action";

import SearchIcon from "@mui/icons-material/Search";

function SearchInput(props: any) {
  const dispatch = useDispatch();
  const propsValue = props?.searchContent?.replace('/+/g', ' ');
  const [value, setValue] = useState(propsValue || '');
  const { searchAsync } = useSearchAsync();
  const search = () => {
    // @ts-ignore
    dispatch(searchAsync(value));
  };
  return (  
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", marginRight: "10px" }}>
        <TextField
          placeholder="Search for new products in 961K stores"  
          fullWidth
          size="small"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Button size="small" onClick={search} variant="outlined">
        <SearchIcon />
      </Button>
    </div>
  );
}

export default SearchInput;
