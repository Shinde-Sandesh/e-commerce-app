import { v4 as uuid } from "uuid";
import menImage from '../../assets/png-transparent-soccer-player-silhouette-sport-football-player-silhouette-wall-decal-soccer-player-hand-poster-sticker-thumbnail.png';
import womanImage from '../../assets/360_F_441631832_XtUO79iG5KTMPaP0XwX0v3xN9bxiVW8i.jpg'
import kidsImage from '../../assets/8820094.jpg'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Kids",
    // description: "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: `${kidsImage}`
  },
  {
    _id: uuid(),
    categoryName: "Women",
    // description: "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: `${womanImage}`
  },
  {
    _id: uuid(),
    categoryName: "Men",
    // description: "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: `${menImage}`
  },
];
