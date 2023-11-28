import React, { useEffect, useState } from "react";
import ListCast from "./components/ListCast";
import Modals from "./components/Modals";
import Nav from "./components/Nav";

function App() {
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch("cast.json");
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <>
      <Nav
        cast={cast}
        onChoice={(info) => {
          setMemberInfo(info);
        }}
      />
      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the Stargazers</h1>
          <p>
            Members of an <b>intergalactic alliance</b> paving the way for peace
            and benevolence among all species. They are known for their
            enthusiasm for science, for their love of fun, and their dedication
            to education.
          </p>
          <ListCast
            cast={cast}
            onChoice={(info) => {
              setMemberInfo(info);
            }}
          />
          {memberInfo && (
            <Modals
              member={memberInfo}
              handleClose={() => {
                setMemberInfo(null);
              }}
              handlePrevious={() => {
                let currentIndex = cast.findIndex(
                  (o) => o.name === memberInfo.name
                );

                let nextMemberIndex = currentIndex - 1;
                if (nextMemberIndex <= 0) {
                  nextMemberIndex = 0;
                }

                setMemberInfo(cast[nextMemberIndex]);
              }}
              handleNext={() => {
                let currentIndex = cast.findIndex(
                  (o) => o.name === memberInfo.name
                );

                let nextMemberIndex = currentIndex + 1;
                if (nextMemberIndex >= cast.length) {
                  nextMemberIndex = cast.length - 1;
                }

                setMemberInfo(cast[nextMemberIndex]);
              }}
            />
          )}
        </hgroup>
      </div>
    </>
  );
}
export default App;
