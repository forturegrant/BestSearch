import React from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import SearchInput from "./searchInput";

function Header() {
  const { searchContent } = useParams();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <header style={{ maxWidth: "1200px" }}>
        <div style={{ display: "flex", padding: '10px 20px', alignItems: 'center' }}>
          <div style={{ marginRight: '20px', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <span style={{ fontWeight: 600 }}>Best</span>
            <span>Search</span>
          </div>
          {
            searchContent && <div style={{ flex: "1" }}>
              <SearchInput searchContent={searchContent} />
            </div>
          }
        </div>
      </header>
      <Divider />
      <Outlet />
    </React.Fragment>
  );
}

export default Header;
