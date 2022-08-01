import React from "react";

const Sort = ({ data, setUsersData, headCell }) => {
  //   console.log("data", data);

  const sortByDesc = () => {
    let tmp = data;
    const newAray = [];

    if (headCell.id === "startDate" || headCell.id === "dateOfBirth") {
      tmp = data.sort((a, b) => {
        // console.log("new D", new Date(a[headCell.id]).toLocaleDateString());
        return new Date(a[headCell.id]) - new Date(b[headCell.id]);
      });
    } else if (headCell.id === "zipCode") {
      tmp = data.sort((a, b) => {
        // console.log(a[headCell.id].codePointAt(0));
        return a[headCell.id] - b[headCell.id];
      });
    } else {
      tmp = data.sort((a, b) => {
        // console.log(a[headCell.id].codePointAt(0));

        // a > b ? -1 : 1)
        return a[headCell.id].toLowerCase() > b[headCell.id].toLowerCase()
          ? -1
          : 1;
        // return a[headCell.id].codePointAt(0) - b[headCell.id].codePointAt(0);
      });
    }

    tmp.map((u) => {
      newAray.push({
        firstName: u.firstName,
        lastName: u.lastName,
        startDate:
          u.startDate === ""
            ? "Pas de date"
            : new Date(u.startDate).toLocaleDateString(),
        department: u.department,
        dateOfBirth:
          u.dateOfBirth === ""
            ? "Pas de date"
            : new Date(u.dateOfBirth).toLocaleDateString(),
        street: u.street,
        city: u.city,
        state: u.state,
        zipCode: u.zipCode.toString(),
      });

      return tmp;
    });

    setUsersData(newAray);

    // console.log("after Data ", data);
    // setUsersData([...data]);
  };
  //   console.log("dataAFT", data);

  const sortByAsc = () => {
    let tmp = data;
    const newAray = [];

    if (headCell.id === "startDate" || headCell.id === "dateOfBirth") {
      tmp = data.sort((a, b) => {
        // console.log("new D", new Date(a[headCell.id]).toLocaleDateString());
        return new Date(b[headCell.id]) - new Date(a[headCell.id]);
      });
    } else if (headCell.id === "zipCode") {
      tmp = data.sort((a, b) => {
        // console.log(a[headCell.id].codePointAt(0));
        return b[headCell.id] - a[headCell.id];
      });
    } else {
      tmp = data.sort((a, b) => {
        // console.log(a[headCell.id].codePointAt(0));
        // return b[headCell.id].codePointAt(0) - a[headCell.id].codePointAt(0);
        return b[headCell.id].toLowerCase() > a[headCell.id].toLowerCase()
          ? -1
          : 1;
      });
    }

    tmp.map((u) => {
      newAray.push({
        firstName: u.firstName,
        lastName: u.lastName,
        startDate:
          u.startDate === ""
            ? "Pas de date"
            : new Date(u.startDate).toLocaleDateString(),
        department: u.department,
        dateOfBirth:
          u.dateOfBirth === ""
            ? "Pas de date"
            : new Date(u.dateOfBirth).toLocaleDateString(),
        street: u.street,
        city: u.city,
        state: u.state,
        zipCode: u.zipCode.toString(),
      });

      return newAray;
    });

    setUsersData(newAray);

    // setUsersData([
    //   ...data.sort((a, b) => {
    //     // console.log(a[headCell.id].codePointAt(0));
    //     return b[headCell.id].codePointAt(0) - a[headCell.id].codePointAt(0);
    //   }),
    // ]);
  };

  //   console.log("column", headCell);
  return (
    <>
      <button onClick={sortByDesc}>desc</button>
      <button onClick={sortByAsc}>src</button>
    </>
  );
};

export default Sort;
