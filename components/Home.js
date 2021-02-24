import React from "react";

const Home = (props) => {
  console.log(props);
  const _gotoRandomUser = () => {
    //   pick a user at random
    const students = [
      "Anchorite1001",
      "AndreAnggono",
      "aronweston",
      "DaniiBlack",
      "ethmoses1",
      "gotem4ever1",
      "jyeharry",
      "leopengilley",
      "little-chi-mai",
      "mufcs",
      "nataliepauchard",
      "Naveen2008",
      "oisa",
      "PegliOne",
      "plantdink",
      "ScottCausby",
      "trentthom",
      "wuersen",
      "zohaf",
    ];

    const username = _(students).sample();
    console.log();
    //  navigate to that user
    props.history.push(`/details/${username}`);
  };

  return (
    <div>
      <h1>Github search</h1>
      <link to="/Search">
        <button>Search for a user</button>
      </link>

      <button onClick={_gotRandomUser}>Random User</button>
    </div>
  );
};

export default Home;
