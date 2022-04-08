import React, { useEffect, useState, Fragment } from "react";

export default function CharacterView({ hero, bgColor }) {
  const [fetchData, setFetchData] = useState([]);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  // Bad practice
  //   const fetchName = async () => {
  //     fetch(`https://rickandmortyapi.com/api/character/?name=${hero}`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setFetchData(res.results);
  //         setStatus("load");
  //       });
  //   };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (hero !== "") {
      fetch(`https://rickandmortyapi.com/api/character/?name=${hero}`)
        .then((res) => res.json())
        .then((res) => {
          setFetchData(res.results);
          setStatus("load");
        });
    }
  }, [hero]);

  return (
    <>
      <div
        ref={bgColor}
        //   onClick={() => fetchName()}
      >
        Search characters:{hero}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {fetchData
          ?.filter((el) =>
            el.status.toLowerCase().includes(search.toLowerCase())
          )
          .map((el) => (
            <Fragment key={el.id}>
              name:{el.name} - status:{el.status}
              <br />
            </Fragment>
          ))}
      </div>
      <div>
        Filter characters by status
        {status === "load" && (
          <>
            <input type={"text"} onChange={handleOnChange} />
          </>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      ></div>
    </>
  );
}
