import React from "react";
import { Skeleton, Grid } from "@mui/material";
import Chart from "./chart";
import { useSelector } from "react-redux";
import "./searchResult.scss";

function SearchResult() {
  const { list, loading } = useSelector((state: any) => state);
  return (
    <div className="search-result-container">
      <div className="search-result-title">Related product trends</div>
      <Grid container spacing={2}>
        {(loading ? Array.from(new Array(4)) : list).map((item: any) => {
          return (
            <React.Fragment>
              {item ? (
                <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                  <div style={{ backgroundColor: "#fff", border: '1px solid #e1e1df' }}>
                    <div style={{padding: '10px'}}>
                      <div style={{ marginBottom: "10px" }}>{item.name}</div>
                      <div style={{ marginBottom: "10px" }}>
                        <span style={{ marginRight: '10px' }}>Growth</span>
                        <span>{item.growth}%</span>
                      </div>
                    </div>
                    <div className="container">
                      <div className="square">
                        <Chart data={item.search_msv} />
                      </div>
                    </div>
                  </div>
                </Grid>
              ) : (
                <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                  <div style={{ marginBottom: "10px" }}>
                    <Skeleton variant="text" width="70%" />
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <Skeleton variant="text" width="30%" />
                  </div>
                  <Skeleton variant="rectangular" />
                </Grid>
              )}
            </React.Fragment>
          );
        })}
      </Grid>
    </div>
  );
}

export default SearchResult;
