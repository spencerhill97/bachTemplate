// portraits
import jesseImg from "./images/jesse.webp";
import michelleImg from "./images/michelle.webp";
import kelseyImg from "./images/kelsey.webp";
import abbyImg from "./images/abby.webp";
import saraImg from "./images/sara.webp";
import bogusImg from "./images/bogus.webp";
import teutschImg from "./images/teutsch.webp";
import maddieImg from "./images/maddie.webp";
import erinImg from "./images/erin.webp";
import cherylImg from "./images/cheryl.webp";
import chelseaImg from "./images/chelsea.webp";
import breImg from "./images/bre.webp";
import bridgetteImg from "./images/bridgette.webp";

// rooms
import room1 from "./images/room1.webp";
import room2 from "./images/room2.webp";
import room3 from "./images/room3.webp";
import room4 from "./images/room4.webp";
import room5 from "./images/room5.webp";

export const navLinks = [
  { id: 1, href: "#home", name: "Home" },
  { id: 2, href: "#girlies", name: "Girlies" },
  { id: 3, href: "#schedules", name: "Schedule" },
  { id: 4, href: "#travel", name: "Travel" },
  { id: 5, href: "#stay", name: "Stay" },
  { id: 6, href: "#rooms", name: "Rooms" },
];

// people going to the party
export const girls = [
  {
    id: 1,
    name: "Jessie",
    image: jesseImg,
    horoscope: "Taurus",
    room: 3,
    relationship: "The Bride!",
  },
  {
    id: 2,
    name: "Michelle",
    image: michelleImg,
    horoscope: "Libra",
    room: 3,
    relationship: "Sister of the Bride",
  },
  {
    id: 3,
    name: "Abby",
    image: abbyImg,
    horoscope: "Sagittarius",
    room: 1,
    relationship: "One of the OSU twins",
  },
  {
    id: 4,
    name: "Kelsey",
    image: kelseyImg,
    horoscope: "Sagittarius",
    room: 1,
    relationship: "One of the OSU twins",
  },
  {
    id: 5,
    name: "Sara",
    image: saraImg,
    horoscope: "Libra",
    room: 2,
    relationship: "OSU friend",
  },
  {
    id: 6,
    name: "Jess",
    image: bogusImg,
    horoscope: "Capricorn",
    room: 4,
    relationship: "OSU friend",
  },
  {
    id: 7,
    name: "Teutsch",
    image: teutschImg,
    horoscope: "Cancer",
    room: 2,
    relationship: "OSU friend",
  },
  {
    id: 8,
    name: "Maddie",
    image: maddieImg,
    horoscope: "Aquarius",
    room: 2,
    relationship: "OSU friend",
  },
  {
    id: 9,
    name: "Erin",
    image: erinImg,
    horoscope: "Libra",
    room: 2,
    relationship: "OSU friend",
  },
  {
    id: 10,
    name: "Cheryl",
    image: cherylImg,
    horoscope: "Cancer",
    room: 3,
    relationship: "High School friend",
  },
  {
    id: 11,
    name: "Chelsea",
    image: chelseaImg,
    horoscope: "Libra",
    room: 5,
    relationship: "OSU friend",
  },
  {
    id: 12,
    name: "Bre",
    image: breImg,
    horoscope: "Sagittarius",
    room: 5,
    relationship: "OSU friend",
  },
  {
    id: 13,
    name: "Brigitte",
    image: bridgetteImg,
    horoscope: "Sagittarius",
    room: 5,
    relationship: "Columbus friend",
  },
];

export const arrivals = [
  {
    id: 1,
    group: 1,
    day: "Wed",
    time: "6:00PM",
    people: "Jess, Abby and Kelsey",
  },
  {
    id: 2,
    group: 2,
    day: "Thurs",
    time: "10:00AM",
    people: "Jessie, Michelle, Teutsch, Chelsea and Brigitte",
  },
  {
    id: 3,
    group: 3,
    day: "Thur",
    time: "10:30PM",
    people: "Erin, Maddie and Cheryl",
  },
  {
    id: 4,
    group: 4,
    day: "Fri",
    time: "5:00AM",
    people: "Sara and Bre",
  },
];

export const departures = [
  {
    id: 1,
    group: 1,
    day: "Sun",
    time: "7:15AM",
    people: "Michelle, Sara, Teutsch, Cheryl and Brigitte",
  },
  {
    id: 2,
    group: 2,
    day: "Sun",
    time: "11:15AM",
    people: "Jessie, Abby, Kelsey and Chelsea",
  },
  {
    id: 3,
    group: 3,
    day: "Sun",
    time: "4:00PM",
    people: "Jess",
  },
];

// rooms for the Airbnb
export const bedrooms = [
  { id: 1, name: "Room 1", image: room1, description: "1 Queen" },
  { id: 2, name: "Room 2", image: room2, description: "2 Bunk Beds" },
  { id: 3, name: "Room 3", image: room3, description: "1 King, 1 Queen" },
  { id: 4, name: "Room 4", image: room4, description: "1 Queen" },
  { id: 5, name: "Room 5", image: room5, description: "1 Queen, 1 Single" },
];

export const Thursday = [
  { id: 1, time: "8:00AM", event: "First round of arrivals on Thursday!" },
  { id: 2, time: "1:00PM", event: "Second round of arrivals" },
  { id: 3, time: "2:00PM", event: "Explore Charleston" },
  { id: 4, time: "4:00PM", event: "Airbnb check-in and hangout" },
  { id: 5, time: "8:30PM", event: "Dinner out @ Farafalle" },
  { id: 6, time: "10:30PM", event: "Final arrivals of the day" },
];

export const Friday = [
  { id: 1, time: "10:00AM", event: "Breakfast @ TBD" },
  { id: 2, time: "11:00AM", event: "Airbnb get ready for boat" },
  { id: 3, time: "3:00PM", event: "Boat day!" },
  { id: 5, time: "6:00PM", event: "Dinner @ Saltwater Cowboy" },
  { id: 6, time: "10:30PM", event: "Night out on King Street" },
];

export const Saturday = [
  { id: 1, time: "12:00PM", event: "Brunch @ Prohibition" },
  { id: 2, time: "1:30PM", event: "Bar Golf Crawl!" },
  { id: 3, time: "7:00PM", event: "Finish up Bar Golf" },
  { id: 4, time: "7:30PM", event: "Head back to the Airbnb" },
  { id: 5, time: "7:30PM", event: "Chinese dinner at the Airbnb" },
];

export const Sunday = [
  { id: 1, time: "7:00AM", event: "First round of departures" },
  { id: 2, time: "10:00AM", event: "Check out of the Airbnb" },
  { id: 3, time: "11:00AM", event: "Second round of departures" },
  { id: 4, time: "3:00PM", event: "The final departures" },
];
