export const MediaQueryMatch = () => {
  const mdMediaQuery = window.innerWidth <= 768 ? true : false;
  window.onresize = () => {
    if (mdMediaQuery) {
      return { width: "100%", height: "fit-content" };
    } else {
      return { width: "50%", height: "fit-content" };
    }
  };
};

//

export const HeadNameArr = [
  "No .",
  "Employee name",
  "Join Date",
  "End Date",
  "phone number",
  "carrer",
  "salery",
  "brithday",
  "sanctions",
  "delete",
  "edit",
];

export const emploeesListArr = [
  {
    id: "1",
    "full-Name": "Ahmed Shehata",
    "join-date": "2022-05-10",
    "end-date": "2022-09-10",
    "phone-number": "Ahmed Shehata",
    carrer: "General manager",
    salery: "10-000",
    brithday: "1998-01-10",
    sanctions: "800",
  },
  {
    id: "2",
    "full-Name": "john due",
    "join-date": "2022-05-10",
    "end-date": "2022-09-10",
    "phone-number": "Ahmed Shehata",
    carrer: "General manager",
    salery: "10-000",
    brithday: "1998-01-10",
    sanctions: "800",
  },
  {
    id: "3",
    "full-Name": "john due",
    "join-date": "2022-05-10",
    "end-date": "2022-09-10",
    "phone-number": "Ahmed Shehata",
    carrer: "General manager",
    salery: "10-000",
    brithday: "1998-01-10",
    sanctions: "800",
  },
];
