let theaters = [
  {
    name: "Amba Cinema: Delhi",
    prices: { gold: 240, recliner: 450 },
    shows: ["10:30 AM", "02:15 PM", "06:05 PM", "09:55 PM"],
    movies: [
      {
        name: "Animal",
        seatBooked: {
          "10:30 AM": ["A1", "A2", "C12", "C12", "B6", "B7"],
          "02:15 PM": ["A11", "A12", "C1", "C12", "D6", "D7"],
          "06:05 PM": ["A6", "A7", "C6", "C7", "E6", "E7"],
          "09:55 PM": ["A7", "A8", "C13", "C14", "G6", "G7"],
        },
      },
      {
        name: "Sam Bahadur",
        seatBooked: {
          "10:30 AM": ["A1", "A2", "C12", "C12", "B6", "B7"],
          "02:15 PM": ["A11", "A12", "C1", "C12", "D6", "D7"],
          "06:05 PM": ["A6", "A7", "C6", "C7", "E6", "E7"],
          "09:55 PM": ["A7", "A8", "C13", "C14", "G6", "G7"],
        },
      },
      {
        name: "Tiger 3",
        seatBooked: {
          "10:30 AM": ["A1", "A2", "C12", "C12", "B6", "B7"],
          "02:15 PM": ["A11", "A12", "C1", "C12", "D6", "D7"],
          "06:05 PM": ["A6", "A7", "C6", "C7", "E6", "E7"],
          "09:55 PM": ["A7", "A8", "C13", "C14", "G6", "G7"],
        },
      },
      {
        name: "12th Fail",
        seatBooked: {
          "10:30 AM": ["A1", "A2", "C12", "C12", "B6", "B7"],
          "02:15 PM": ["A11", "A12", "C1", "C12", "D6", "D7"],
          "06:05 PM": ["A6", "A7", "C6", "C7", "E6", "E7"],
          "09:55 PM": ["A7", "A8", "C13", "C14", "G6", "G7"],
        },
      },
      {
        name: "The Marvels",
        seatBooked: {
          "10:30 AM": ["A1", "A2", "C12", "C12", "B6", "B7"],
          "02:15 PM": ["A11", "A12", "C1", "C12", "D6", "D7"],
          "06:05 PM": ["A6", "A7", "C6", "C7", "E6", "E7"],
          "09:55 PM": ["A7", "A8", "C13", "C14", "G6", "G7"],
        },
      },
    ],
  },
  {
    name: "Cinepolis: Cross River Mall, Shahdara",
    prices: { gold: 250, recliner: 450 },
    shows: ["9:45 AM", "01:15 PM", "04:50 PM", "08:25 PM", "11:55 PM"],
    movies: [
      {
        name: "Animal",
        seatBooked: {
          "9:45 AM": ["A16", "A17", "A15", "C1", "C2", "E5", "E6"],
          "01:15 PM": ["A13", "A13", "A15", "C10", "C9", "E17", "E18"],
          "04:50 PM": ["A16", "A17", "A15", "C11", "C12", "D5", "D6"],
          "08:25 PM": ["A18", "A17", "A16", "C14", "C14", "G5", "G6"],
          "11:55 PM": ["A4", "A5", "A6", "C1", "C2", "E15", "E16"],
        },
      },
      {
        name: "Sam Bahadur",
        seatBooked: {
          "9:45 AM": ["A16", "A17", "A15", "C1", "C2", "E5", "E6"],
          "01:15 PM": ["A13", "A13", "A15", "C10", "C9", "E17", "E18"],
          "04:50 PM": ["A16", "A17", "A15", "C11", "C12", "D5", "D6"],
          "08:25 PM": ["A18", "A17", "A16", "C14", "C14", "G5", "G6"],
          "11:55 PM": ["A4", "A5", "A6", "C1", "C2", "E15", "E16"],
        },
      },
      {
        name: "Tiger 3",
        seatBooked: {
          "9:45 AM": ["A16", "A17", "A15", "C1", "C2", "E5", "E6"],
          "01:15 PM": ["A13", "A13", "A15", "C10", "C9", "E17", "E18"],
          "04:50 PM": ["A16", "A17", "A15", "C11", "C12", "D5", "D6"],
          "08:25 PM": ["A18", "A17", "A16", "C14", "C14", "G5", "G6"],
          "11:55 PM": ["A4", "A5", "A6", "C1", "C2", "E15", "E16"],
        },
      },
      {
        name: "12th Fail",
        seatBooked: {
          "9:45 AM": ["A16", "A17", "A15", "C1", "C2", "E5", "E6"],
          "01:15 PM": ["A13", "A13", "A15", "C10", "C9", "E17", "E18"],
          "04:50 PM": ["A16", "A17", "A15", "C11", "C12", "D5", "D6"],
          "08:25 PM": ["A18", "A17", "A16", "C14", "C14", "G5", "G6"],
          "11:55 PM": ["A4", "A5", "A6", "C1", "C2", "E15", "E16"],
        },
      },
      {
        name: "The Marvels",
        seatBooked: {
          "9:45 AM": ["A16", "A17", "A15", "C1", "C2", "E5", "E6"],
          "01:15 PM": ["A13", "A13", "A15", "C10", "C9", "E17", "E18"],
          "04:50 PM": ["A16", "A17", "A15", "C11", "C12", "D5", "D6"],
          "08:25 PM": ["A18", "A17", "A16", "C14", "C14", "G5", "G6"],
          "11:55 PM": ["A4", "A5", "A6", "C1", "C2", "E15", "E16"],
        },
      },
    ],
  },
  {
    name: "Cinepolis: DLF Avenue, Saket",
    prices: { gold: 200, recliner: 450 },
    shows: ["08:30 AM", "12:00 PM", "03:30 PM", "07:00 PM", "10:15 PM"],
    movies: [
      {
        name: "Animal",
        seatBooked: {
          "08:30 AM": ["A3", "A4", "B5", "B6", "B7", "E9", "E10", "D6"],
          "12:00 PM": ["A1", "A2", "B15", "B16", "B17", "E1", "E1"],
          "03:30 PM": ["A13", "A14", "B5", "B6", "B7", "E9", "E10", "D2"],
          "07:00 PM": ["A6", "A7", "B15", "B16", "B14", "E5", "E4", "D6"],
          "10:15 PM": ["A12", "A12", "B5", "B6", "B7", "E9", "E10", "D11"],
        },
      },
      {
        name: "Sam Bahadur",
        seatBooked: {
          "08:30 AM": ["A3", "A4", "B5", "B6", "B7", "E9", "E10", "D6"],
          "12:00 PM": ["A1", "A2", "B15", "B16", "B17", "E1", "E1"],
          "03:30 PM": ["A13", "A14", "B5", "B6", "B7", "E9", "E10", "D2"],
          "07:00 PM": ["A6", "A7", "B15", "B16", "B14", "E5", "E4", "D6"],
          "10:15 PM": ["A12", "A12", "B5", "B6", "B7", "E9", "E10", "D11"],
        },
      },
      {
        name: "Tiger 3",
        seatBooked: {
          "08:30 AM": ["A3", "A4", "B5", "B6", "B7", "E9", "E10", "D6"],
          "12:00 PM": ["A1", "A2", "B15", "B16", "B17", "E1", "E1"],
          "03:30 PM": ["A13", "A14", "B5", "B6", "B7", "E9", "E10", "D2"],
          "07:00 PM": ["A6", "A7", "B15", "B16", "B14", "E5", "E4", "D6"],
          "10:15 PM": ["A12", "A12", "B5", "B6", "B7", "E9", "E10", "D11"],
        },
      },
      {
        name: "12th Fail",
        seatBooked: {
          "08:30 AM": ["A3", "A4", "B5", "B6", "B7", "E9", "E10", "D6"],
          "12:00 PM": ["A1", "A2", "B15", "B16", "B17", "E1", "E1"],
          "03:30 PM": ["A13", "A14", "B5", "B6", "B7", "E9", "E10", "D2"],
          "07:00 PM": ["A6", "A7", "B15", "B16", "B14", "E5", "E4", "D6"],
          "10:15 PM": ["A12", "A12", "B5", "B6", "B7", "E9", "E10", "D11"],
        },
      },
      {
        name: "The Marvels",
        seatBooked: {
          "08:30 AM": ["A3", "A4", "B5", "B6", "B7", "E9", "E10", "D6"],
          "12:00 PM": ["A1", "A2", "B15", "B16", "B17", "E1", "E1"],
          "03:30 PM": ["A13", "A14", "B5", "B6", "B7", "E9", "E10", "D2"],
          "07:00 PM": ["A6", "A7", "B15", "B16", "B14", "E5", "E4", "D6"],
          "10:15 PM": ["A12", "A12", "B5", "B6", "B7", "E9", "E10", "D11"],
        },
      },
    ],
  },
  {
    name: "M2K: Pitampura",
    prices: { gold: 300, recliner: 400 },
    shows: ["09:30 AM", "11:15 AM", "03:00 PM", "07:30 PM"],
    movies: [
      {
        name: "Animal",
        seatBooked: {
          "09:30 AM": ["A2", "A3", "B5", "B6", "C11", "C12", "D14", "D15"],
          "11:15 AM": ["A5", "A6", "B11", "B12", "C14", "C15", "D1", "D2"],
          "03:00 PM": ["A11", "A12", "B14", "B15", "C1", "C2", "D4", "D5"],
          "07:30 PM": ["A14", "A15", "B1", "B2", "C5", "C6", "D12", "D13"],
        },
      },
      {
        name: "Sam Bahadur",
        seatBooked: {
          "09:30 AM": ["A2", "A3", "B5", "B6", "C11", "C12", "D14", "D15"],
          "11:15 AM": ["A5", "A6", "B11", "B12", "C14", "C15", "D1", "D2"],
          "03:00 PM": ["A11", "A12", "B14", "B15", "C1", "C2", "D4", "D5"],
          "07:30 PM": ["A14", "A15", "B1", "B2", "C5", "C6", "D12", "D13"],
        },
      },
      {
        name: "Tiger 3",
        seatBooked: {
          "09:30 AM": ["A2", "A3", "B5", "B6", "C11", "C12", "D14", "D15"],
          "11:15 AM": ["A5", "A6", "B11", "B12", "C14", "C15", "D1", "D2"],
          "03:00 PM": ["A11", "A12", "B14", "B15", "C1", "C2", "D4", "D5"],
          "07:30 PM": ["A14", "A15", "B1", "B2", "C5", "C6", "D12", "D13"],
        },
      },
      {
        name: "12th Fail",
        seatBooked: {
          "09:30 AM": ["A2", "A3", "B5", "B6", "C11", "C12", "D14", "D15"],
          "11:15 AM": ["A5", "A6", "B11", "B12", "C14", "C15", "D1", "D2"],
          "03:00 PM": ["A11", "A12", "B14", "B15", "C1", "C2", "D4", "D5"],
          "07:30 PM": ["A14", "A15", "B1", "B2", "C5", "C6", "D12", "D13"],
        },
      },
      {
        name: "The Marvels",
        seatBooked: {
          "09:30 AM": ["A2", "A3", "B5", "B6", "C11", "C12", "D14", "D15"],
          "11:15 AM": ["A5", "A6", "B11", "B12", "C14", "C15", "D1", "D2"],
          "03:00 PM": ["A11", "A12", "B14", "B15", "C1", "C2", "D4", "D5"],
          "07:30 PM": ["A14", "A15", "B1", "B2", "C5", "C6", "D12", "D13"],
        },
      },
    ],
  },
  {
    name: "Miraj Cinemas: Vikas Cine Mall, Shahdara",
    prices: { gold: 150, recliner: 300 },
    shows: ["10:30 AM", "02:15 PM", "06:05 PM", "09:55 PM"],
    movies: [
      {
        name: "Animal",
        seatBooked: {
          "10:30 AM": ["A1", "A2", "A3", "C11", "C12"],
          "02:15 PM": ["B12", "B13", "D9", "D10"],
          "06:05 PM": ["A11", "A12", "A13", "B1", "B2"],
          "09:55 PM": ["A9", "A10", "B1", "B2", "C11", "C12"],
        },
      },
      {
        name: "Sam Bahadur",
        seatBooked: {
          "10:30 AM": ["A1", "A2", "A3", "C11", "C12"],
          "02:15 PM": ["B12", "B13", "D9", "D10"],
          "06:05 PM": ["A11", "A12", "A13", "B1", "B2"],
          "09:55 PM": ["A9", "A10", "B1", "B2", "C11", "C12"],
        },
      },
      {
        name: "Tiger 3",
        seatBooked: {
          "10:30 AM": ["A1", "A2", "A3", "C11", "C12"],
          "02:15 PM": ["B12", "B13", "D9", "D10"],
          "06:05 PM": ["A11", "A12", "A13", "B1", "B2"],
          "09:55 PM": ["A9", "A10", "B1", "B2", "C11", "C12"],
        },
      },
      {
        name: "12th Fail",
        seatBooked: {
          "10:30 AM": ["A1", "A2", "A3", "C11", "C12"],
          "02:15 PM": ["B12", "B13", "D9", "D10"],
          "06:05 PM": ["A11", "A12", "A13", "B1", "B2"],
          "09:55 PM": ["A9", "A10", "B1", "B2", "C11", "C12"],
        },
      },
      {
        name: "The Marvels",
        seatBooked: {
          "10:30 AM": ["A1", "A2", "A3", "C11", "C12"],
          "02:15 PM": ["B12", "B13", "D9", "D10"],
          "06:05 PM": ["A11", "A12", "A13", "B1", "B2"],
          "09:55 PM": ["A9", "A10", "B1", "B2", "C11", "C12"],
        },
      },
    ],
  },
];

let movies = [
  {
    id: 0,
    name: "Animal",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAxOTMuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311762-zjjwutxtls-portrait.jpg",
    languages: ["Hindi", "Malayalam", "Kannada", "Telugu", "Tamil"],
    format: ["2D", "IMAX 2D"],
    Genre: ["Action", "Drama", "Crime"],
    likes: "90%",
    votes: "206,106",
  },
  {
    id: 1,
    name: "Sam Bahadur",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMjYuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310187-fewskwnwwt-portrait.jpg",
    languages: ["Hindi"],
    format: ["2D"],
    Genre: ["Action", "Biography"],
    likes: "86%",
    votes: "27,968",
  },
  {
    id: 2,
    name: "Tiger 3",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICAyMDQuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00313411-kzwupkjajz-portrait.jpg",
    languages: ["Hindi", "Telugu", "Tamil"],
    format: ["2D", "IMAX 2D", "4DX"],
    Genre: ["Action", "Thriller"],
    likes: "74%",
    votes: "246,516",
  },
  {
    id: 3,
    name: "12th Fail",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICA5MC41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363787-yhbpdldwtp-portrait.jpg",
    languages: ["Hindi", "Tamil", "Kannada"],
    format: ["2D"],
    Genre: ["Drama"],
    likes: "96%",
    votes: "94,855",
  },
  {
    id: 4,
    name: "The Marvels",
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAxOC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310793-zmxvapngxx-portrait.jpg",
    languages: ["English", "Tamil", "Hindi", "Telugu"],
    format: ["2D", "3D", "3D SCREEN X", "2D SCREEN X", "IMAX 3D"],
    Genre: ["Action", "Adventure", "Fantasy"],
    likes: "72%",
    votes: "18,673K",
  },
];

let users = [
  {
    email: "test@gmail.com",
    Fname: "Test",
    Lname: "Email",
    Mnum: "9999999999",
    purchases: [],
    married: "No",
  },
];

module.exports.theaters = theaters;
module.exports.movies = movies;
module.exports.users = users;
