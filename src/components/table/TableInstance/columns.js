import { format } from "date-fns";
export const COLUMNS = [
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Start Date",
    accessor: "start_date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyy");
    },
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Date of Birth",
    accessor: "date_Of_Birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyy");
    },
  },
  {
    Header: "Street",
    accessor: "street",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "State",
    accessor: "state",
  },
  {
    Header: "Zip Code",
    accessor: "zip_code",
  },
];
