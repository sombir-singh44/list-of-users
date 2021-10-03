import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  ListGroup,
  ListGroupItem,
  PaginationLink,
  PaginationItem,
  Pagination
} from "reactstrap";
import "./styles.css";

function App() {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?", {
        params: {
          page: 1
        }
      })
      .then(function (response) {
        setListData(response.data && response.data.data);
      });
  }, []);
  const handlePageClick = (i) => {
    axios
      .get("https://reqres.in/api/users?", {
        params: {
          page: i
        }
      })
      .then(function (response) {
        setListData(response.data && response.data.data);
      });
  };
  return (
    <div className="App">
      <h1>Assignment - 2</h1>
      <h2>List of Users</h2>
      {listData.length !== 0 ? (
        <Fragment>
          {listData.map((v, i) => {
            return (
              <ListGroup key={i}>
                <ListGroupItem className="justify-content-between">
                  <img
                    style={{ border: "1px solid black", margin: "10px" }}
                    src={v.avatar}
                    alt="avatar"
                  />
                  {`${v.first_name} ${v.last_name} - Email : ${v.email}`}{" "}
                </ListGroupItem>
              </ListGroup>
            );
          })}
        </Fragment>
      ) : (
        <div style={{ border: "2px Solid red", margin: "10px" }}>
          No Data to display : Empty Array response from API
        </div>
      )}

      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              handlePageClick(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              handlePageClick(2);
            }}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              handlePageClick(3);
            }}
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              handlePageClick(4);
            }}
          >
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              handlePageClick(5);
            }}
          >
            5
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default App;
