import { FaPeopleLine } from "react-icons/fa6";

export const SelectTravelsList=[

    {
        id:1,
        title:'Just Me',
        desc:'A sole travels in exploration',
        icon:'🧍',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travels in tandem',
        icon:'👨🏻‍❤️‍👨🏻',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving ady',
        icon:<FaPeopleLine />,
        people:'3 to 5 people'
    }
]

export const BudgetOptions=[

    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💰'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on average side',
        icon:'💵'
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont Worry about cost',
        icon:'💸'
    }
]

export const AI_PROMPT='Generate Travel Plan for location: {location}, for {noOfDays} days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName,Place Details, Place Image Url, Geo Coordinates, ticket pricing, rating, Time to travel to each location for {totalDays} days with each day plan with best time to visit in JSON format.'