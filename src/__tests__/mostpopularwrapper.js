import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";

import { fetchMostPopularResults } from "../apis/apis";

import MostPopularWrapper from "../mostpopular/MostPopularWrapper";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../apis/apis");

jest.mock("axios");

const mostPopularResult = {
  status: "OK",
  copyright:
    "Copyright (c) 2021 The New York Times Company.  All Rights Reserved.",
  num_results: 20,
  results: [
    {
      uri: "nyt://article/d13e3d87-8ebe-533d-8e24-9b4c4ff0ea72",
      url: "https://www.nytimes.com/2021/11/21/us/wisconsin-parade-crash.html",
      id: 100000008087625,
      asset_id: 100000008087625,
      source: "New York Times",
      published_date: "2021-11-21",
      updated: "2021-11-22 12:02:10",
      section: "U.S.",
      subsection: "",
      nytdsection: "u.s.",
      adx_keywords:
        "Murders, Attempted Murders and Homicides;Parades;Waukesha, Wis, Holiday Parade Attack (2021);Waukesha (Wis)",
      column: null,
      byline:
        "By Dan Simmons, Mitch Smith, Robert Chiarito, Jesus Jiménez and Livia Albeck-Ripka",
      type: "Article",
      title:
        "Five Dead in Wisconsin After Driver Plows S.U.V. Into Holiday Parade",
      abstract:
        "Officials said dozens of people were struck after the vehicle sped down the street during the Christmas parade in Waukesha, Wis., near Milwaukee.",
      des_facet: [
        "Murders, Attempted Murders and Homicides",
        "Parades",
        "Waukesha, Wis, Holiday Parade Attack (2021)",
      ],
      org_facet: [],
      per_facet: [],
      geo_facet: ["Waukesha (Wis)"],
      media: [],
      eta_id: 0,
    },
    {
      uri: "nyt://article/000d5bdf-6254-53fb-b8f8-156b7279d0c0",
      url: "https://www.nytimes.com/2021/11/18/science/lunar-eclipse-full-moon-tonight.html",
      id: 100000008080806,
      asset_id: 100000008080806,
      source: "New York Times",
      published_date: "2021-11-18",
      updated: "2021-11-19 12:38:47",
      section: "Science",
      subsection: "",
      nytdsection: "science",
      adx_keywords: "Space and Astronomy;Eclipses;Moon",
      column: null,
      byline: "By Joey Roulette",
      type: "Article",
      title:
        "Thursday and Friday’s Partial Lunar Eclipse Was the Longest in 580 Years",
      abstract:
        "The partial eclipse will turn the moon rusty reddish hues and be visible across North America and parts of South America, Asia and Australia.",
      des_facet: ["Space and Astronomy", "Eclipses", "Moon"],
      org_facet: [],
      per_facet: [],
      geo_facet: [],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "A lunar eclipse in May over Santa Monica, Calif. Tonight’s lunar eclipse, extending into tomorrow, will last just over six hours.",
          copyright: "Frederic J. Brown/Agence France-Presse — Getty Images",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/18/science/18lunareclipse1/18lunareclipse1-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/science/18lunareclipse1/18lunareclipse1-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/science/18lunareclipse1/18lunareclipse1-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/fa102828-c20a-5f7c-8685-de98792a764a",
      url: "https://www.nytimes.com/2020/08/27/us/kyle-rittenhouse-kenosha-shooting-video.html",
      id: 100000007309185,
      asset_id: 100000007309185,
      source: "New York Times",
      published_date: "2020-08-27",
      updated: "2021-11-22 15:04:22",
      section: "U.S.",
      subsection: "",
      nytdsection: "u.s.",
      adx_keywords:
        "Murders, Attempted Murders and Homicides;Demonstrations, Protests and Riots;Video Recordings, Downloads and Streaming;Rittenhouse, Kyle;Blake, Jacob (August 23, 2020 Shooting);Kenosha (Wis)",
      column: null,
      byline:
        "By Haley Willis, Muyi Xiao, Christiaan Triebert, Christoph Koettl, Stella Cooper, David Botti, John Ismay and Ainara Tiefenthäler",
      type: "Article",
      title: "Tracking the Suspect in the Fatal Kenosha Shootings",
      abstract:
        "Footage appears to show a teenager shooting three people during protests in Wisconsin. We tracked his movements that night.",
      des_facet: [
        "Murders, Attempted Murders and Homicides",
        "Demonstrations, Protests and Riots",
        "Video Recordings, Downloads and Streaming",
      ],
      org_facet: [],
      per_facet: [
        "Rittenhouse, Kyle",
        "Blake, Jacob (August 23, 2020 Shooting)",
      ],
      geo_facet: ["Kenosha (Wis)"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption: "",
          copyright: "Brendan Gutenschwager, via Storyful",
          approved_for_syndication: 0,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2020/08/28/video/vid-kenosha-hp-print/vid-kenosha-hp-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2020/08/28/video/vid-kenosha-hp-print/vid-kenosha-hp-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2020/08/28/video/vid-kenosha-hp-print/vid-kenosha-hp-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/f1eefe3d-ef16-5ec2-a022-530b16fb95ca",
      url: "https://www.nytimes.com/2021/11/18/nyregion/christopher-belter-rape-sentence.html",
      id: 100000008082159,
      asset_id: 100000008082159,
      source: "New York Times",
      published_date: "2021-11-18",
      updated: "2021-11-20 09:46:08",
      section: "New York",
      subsection: "",
      nytdsection: "new york",
      adx_keywords:
        "Sex Crimes;Decisions and Verdicts;Belter, Christopher J;Murphy, Matthew J III;Lewiston (NY)",
      column: null,
      byline: "By Ed Shanahan",
      type: "Article",
      title:
        "Judge Spares Man in Teen Rape Case: ‘Incarceration Isn’t Appropriate’",
      abstract:
        "The man, Christopher Belter, had pleaded guilty in the sexual assaults of four teens. He faced eight years in prison, but a judge sentenced him to probation instead.",
      des_facet: ["Sex Crimes", "Decisions and Verdicts"],
      org_facet: [],
      per_facet: ["Belter, Christopher J", "Murphy, Matthew J III"],
      geo_facet: ["Lewiston (NY)"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "Christopher Belter in court in 2019. He was sentenced to eight years’ probation after pleading guilty to rape, attempted sexual abuse and two misdemeanors in attacks on four girls.",
          copyright: "WKBW",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/18/nyregion/18rapesentence/18rapesentence-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/nyregion/18rapesentence/18rapesentence-mediumThreeByTwo210-v2.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/nyregion/18rapesentence/18rapesentence-mediumThreeByTwo440-v2.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/ac3dd354-221a-5d6e-8883-6ad37cdffcf0",
      url: "https://www.nytimes.com/2021/11/21/business/jonah-goldberg-steve-hayes-quit-fox-tucker-carlson.html",
      id: 100000008082782,
      asset_id: 100000008082782,
      source: "New York Times",
      published_date: "2021-11-21",
      updated: "2021-11-22 13:39:11",
      section: "Business",
      subsection: "",
      nytdsection: "business",
      adx_keywords:
        "News and News Media;United States Politics and Government;Storming of the US Capitol (Jan, 2021);Television;Right-Wing Extremism and Alt-Right;Conservatism (US Politics);Rumors and Misinformation;Carlson, Tucker;Goldberg, Jonah;Murdoch, Rupert;Trump, Donald J;Hayes, Stephen F;Fox News Channel;Dispatch, The (Web Site)",
      column: null,
      byline: "By Ben Smith",
      type: "Article",
      title:
        "Two Fox News Contributors Quit in Protest of Tucker Carlson’s Jan. 6 Special",
      abstract:
        "Jonah Goldberg and Stephen Hayes, stars of a brand of conservatism that has fallen out of fashion, decide they’ve had enough.",
      des_facet: [
        "News and News Media",
        "United States Politics and Government",
        "Storming of the US Capitol (Jan, 2021)",
        "Television",
        "Right-Wing Extremism and Alt-Right",
        "Conservatism (US Politics)",
        "Rumors and Misinformation",
      ],
      org_facet: ["Fox News Channel", "Dispatch, The (Web Site)"],
      per_facet: [
        "Carlson, Tucker",
        "Goldberg, Jonah",
        "Murdoch, Rupert",
        "Trump, Donald J",
        "Hayes, Stephen F",
      ],
      geo_facet: [],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "Stephen Hayes, left, and Jonah Goldberg, right, founders of The Dispatch, completed their resignations from Fox News last week.",
          copyright:
            "Lexey Swall for The New York Times; Alex Wroblewski/Reuters",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/22/business/21bensmith-top1/21bensmith-top1-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/22/business/21bensmith-top1/21bensmith-top1-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/22/business/21bensmith-top1/21bensmith-top1-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/24a547ed-4190-5989-a91f-4145d2752673",
      url: "https://www.nytimes.com/2021/11/18/health/covid-wuhan-market-lab-leak.html",
      id: 100000008072643,
      asset_id: 100000008072643,
      source: "New York Times",
      published_date: "2021-11-18",
      updated: "2021-11-19 09:38:35",
      section: "Health",
      subsection: "",
      nytdsection: "health",
      adx_keywords:
        "Coronavirus (2019-nCoV);Wildlife Trade and Poaching;Disease Rates;Politics and Government;Research;your-feed-science;Worobey, Michael G (1970- );World Health Organization;Wuhan Institute of Virology (China);Science (Journal);Wuhan (China);China",
      column: null,
      byline: "By Carl Zimmer, Benjamin Mueller and Chris Buckley",
      type: "Article",
      title:
        "First Known Covid Case Was Vendor at Wuhan Market, Scientist Says",
      abstract:
        "A new review of early Covid-19 cases in the journal Science will revive, though certainly not settle, the debate over how the pandemic began.",
      des_facet: [
        "Coronavirus (2019-nCoV)",
        "Wildlife Trade and Poaching",
        "Disease Rates",
        "Politics and Government",
        "Research",
        "your-feed-science",
      ],
      org_facet: [
        "World Health Organization",
        "Wuhan Institute of Virology (China)",
        "Science (Journal)",
      ],
      per_facet: ["Worobey, Michael G (1970- )"],
      geo_facet: ["Wuhan (China)", "China"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "Medical staff assisted a Covid patient into an ambulance in Wuhan, China, in March 2020.",
          copyright: "Agence France-Presse — Getty Images",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/18/science/18virus-market1/18virus-market1-thumbStandard-v2.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/science/18virus-market1/18virus-market1-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/science/18virus-market1/18virus-market1-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/ee725d99-70a5-5764-9005-4e78d9ec42dd",
      url: "https://www.nytimes.com/article/ahmaud-arbery-shooting-georgia.html",
      id: 100000007111220,
      asset_id: 100000007111220,
      source: "New York Times",
      published_date: "2020-04-28",
      updated: "2021-11-24 23:02:23",
      section: "U.S.",
      subsection: "",
      nytdsection: "u.s.",
      adx_keywords:
        "Black People;Racial Profiling;Race and Ethnicity;Self-Defense;Black Lives Matter Movement;Arbery, Ahmaud (1994-2020);McMichael, Gregory (1955- );McMichael, Travis (1986- );Brunswick (Ga)",
      column: null,
      byline: "By Richard Fausset",
      type: "Article",
      title: "What We Know About the Shooting Death of Ahmaud Arbery",
      abstract:
        "Mr. Arbery, a 25-year-old Black man, was chased by white residents of a South Georgia neighborhood. They were found guilty on murder charges.",
      des_facet: [
        "Black People",
        "Racial Profiling",
        "Race and Ethnicity",
        "Self-Defense",
        "Black Lives Matter Movement",
      ],
      org_facet: [],
      per_facet: [
        "Arbery, Ahmaud (1994-2020)",
        "McMichael, Gregory (1955- )",
        "McMichael, Travis (1986- )",
      ],
      geo_facet: ["Brunswick (Ga)"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "A memorial for Ahmaud Arbery at the entrance of the Satilla Shores neighborhood in Brunswick, Ga.",
          copyright: "Nicole Craine for The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/28/us/28arbery-explainer-top/28arbery-explainer-top-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/28/us/28arbery-explainer-top/merlin_198264846_67e103ea-6728-47c9-a1aa-824446ef6002-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/28/us/28arbery-explainer-top/merlin_198264846_67e103ea-6728-47c9-a1aa-824446ef6002-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/2a293579-ab35-5dc7-8dcb-d2383dadc3b4",
      url: "https://www.nytimes.com/2021/11/23/t-magazine/hayao-miyazaki-studio-ghibli.html",
      id: 100000008069038,
      asset_id: 100000008069038,
      source: "New York Times",
      published_date: "2021-11-23",
      updated: "2021-11-24 09:26:46",
      section: "T Magazine",
      subsection: "",
      nytdsection: "t magazine",
      adx_keywords:
        "Movies;Content Type: Personal Profile;Animated Films;Writing and Writers;Miyazaki, Hayao;Suzuki, Toshio;Takahata, Isao;Studio Ghibli;Japan",
      column: null,
      byline: "By Ligaya Mishan",
      type: "Article",
      title: "Hayao Miyazaki Prepares to Cast One Last Spell",
      abstract:
        "No artist has explored the contradictions of humanity as sympathetically and critically as the Japanese animation legend. Now, at 80, he’s coming out of retirement with another movie.",
      des_facet: [
        "Movies",
        "Content Type: Personal Profile",
        "Animated Films",
        "Writing and Writers",
      ],
      org_facet: ["Studio Ghibli"],
      per_facet: ["Miyazaki, Hayao", "Suzuki, Toshio", "Takahata, Isao"],
      geo_facet: ["Japan"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "Hayao Miyazaki photographed outside his atelier near Studio Ghibli in Tokyo on Oct. 4, 2021.",
          copyright: "Takahiro Kaneyama",
          approved_for_syndication: 0,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/24/t-magazine/24tmag-miyazaki-slide-FV6R-copy/24tmag-miyazaki-slide-FV6R-copy-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/24/t-magazine/24tmag-miyazaki-slide-FV6R-copy/24tmag-miyazaki-slide-FV6R-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/24/t-magazine/24tmag-miyazaki-slide-FV6R-copy/24tmag-miyazaki-slide-FV6R-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/7d8c5bde-ab7a-58f2-b8d5-da80201a6009",
      url: "https://www.nytimes.com/2021/11/12/dining/best-mashed-potatoes-recipe.html",
      id: 100000008064225,
      asset_id: 100000008064225,
      source: "New York Times",
      published_date: "2021-11-12",
      updated: "2021-11-23 09:16:16",
      section: "Food",
      subsection: "",
      nytdsection: "food",
      adx_keywords: "Cooking and Cookbooks;Potatoes;Content Type: Service",
      column: null,
      byline: "By Genevieve Ko",
      type: "Article",
      title: "Here’s the Secret to the Best Mashed Potatoes for Thanksgiving",
      abstract:
        "You’ve tried boiling, but Genevieve Ko found a better way to make this side dish fluffier — and more flavorful.",
      des_facet: ["Cooking and Cookbooks", "Potatoes", "Content Type: Service"],
      org_facet: [],
      per_facet: [],
      geo_facet: [],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "A final sprinkle of salt — or a ladle of gravy — can add an extra savory note to mashed potatoes.",
          copyright:
            "Armando Rafael for The New York Times. Food Stylist: Mariana Velasquez. Prop Stylist:Paige Hicks.",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/17/dining/12Ko3/12Ko3-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/17/dining/12Ko3/merlin_197633112_ff071fb5-5987-4158-98fe-af2cf0a14be4-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/17/dining/12Ko3/merlin_197633112_ff071fb5-5987-4158-98fe-af2cf0a14be4-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/a67a2c42-dd4a-5cd6-87a2-7d3ae27f6108",
      url: "https://www.nytimes.com/2021/11/18/nyregion/jimmy-hoffa-fbi-investigation.html",
      id: 100000007880965,
      asset_id: 100000007880965,
      source: "New York Times",
      published_date: "2021-11-18",
      updated: "2021-11-22 20:12:56",
      section: "New York",
      subsection: "",
      nytdsection: "new york",
      adx_keywords:
        "Murders, Attempted Murders and Homicides;Organized Crime;audio-neutral-informative;audio-neutral-immersive;Hoffa, James R;Provenzano, Anthony;Federal Bureau of Investigation;Jersey City (NJ);New Jersey;PJP Landfill (Jersey City, NJ)",
      column: null,
      byline: "By Michael Wilson",
      type: "Article",
      title: "Search for Jimmy Hoffa Leads the F.B.I. to Jersey City Landfill",
      abstract:
        "A deathbed statement by a man who claimed to bury the Teamster boss’ body in a steel drum brought agents to the site for an inspection.",
      des_facet: [
        "Murders, Attempted Murders and Homicides",
        "Organized Crime",
        "audio-neutral-informative",
        "audio-neutral-immersive",
      ],
      org_facet: ["Federal Bureau of Investigation"],
      per_facet: ["Hoffa, James R", "Provenzano, Anthony"],
      geo_facet: [
        "Jersey City (NJ)",
        "New Jersey",
        "PJP Landfill (Jersey City, NJ)",
      ],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "The site in Jersey City where it is believed the F.B.I. visited as part of its investigation into the disappearance of the union boss Jimmy Hoffa.",
          copyright: "Bryan Anselm for The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/18/nyregion/00hoffa/00hoffa-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/nyregion/00hoffa/00hoffa-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/nyregion/00hoffa/00hoffa-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/afb0b221-5a83-5896-87db-e73a3e044c80",
      url: "https://www.nytimes.com/2021/11/19/well/workout-exercise-knee-health.html",
      id: 100000008058416,
      asset_id: 100000008058416,
      source: "New York Times",
      published_date: "2021-11-19",
      updated: "2021-11-22 22:18:35",
      section: "Well",
      subsection: "",
      nytdsection: "well",
      adx_keywords:
        "Knees;Content Type: Service;Exercise;Research;Sports Injuries;Osteoarthritis;Muscles",
      column: null,
      byline: "By Alex Hutchinson",
      type: "Article",
      title: "How to Save Your Knees Without Giving Up Your Workout",
      abstract:
        "There’s no magic bullet to knee health, but staying active and building muscles around the joint are crucial.",
      des_facet: [
        "Knees",
        "Content Type: Service",
        "Exercise",
        "Research",
        "Sports Injuries",
        "Osteoarthritis",
        "Muscles",
      ],
      org_facet: [],
      per_facet: [],
      geo_facet: [],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption: "",
          copyright: "Patricia Voulgaris for The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/23/well/19WELL-KNEE-HEALTH1/19WELL-KNEE-HEALTH1-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/23/well/19WELL-KNEE-HEALTH1/19WELL-KNEE-HEALTH1-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/23/well/19WELL-KNEE-HEALTH1/19WELL-KNEE-HEALTH1-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/550ed065-ae93-59ca-9d1c-567309fb6b04",
      url: "https://www.nytimes.com/2021/11/17/us/julius-jones-oklahoma-clemency.html",
      id: 100000008081412,
      asset_id: 100000008081412,
      source: "New York Times",
      published_date: "2021-11-17",
      updated: "2021-11-19 09:44:35",
      section: "U.S.",
      subsection: "",
      nytdsection: "u.s.",
      adx_keywords:
        "Capital Punishment;Amnesties, Commutations and Pardons;Demonstrations, Protests and Riots;Politics and Government;Jones, Julius (1980- );Stitt, Kevin;Oklahoma",
      column: null,
      byline: "By Michael Levenson, Maria Cramer and Simon Romero",
      type: "Article",
      title:
        "Oklahoma Governor Commutes Inmate’s Death Sentence Hours Before Execution",
      abstract:
        "A coalition of celebrities, conservatives and Christian leaders had urged Gov. Kevin Stitt to commute the death penalty sentence of Julius Jones, who was convicted of murder in 2002.",
      des_facet: [
        "Capital Punishment",
        "Amnesties, Commutations and Pardons",
        "Demonstrations, Protests and Riots",
        "Politics and Government",
      ],
      org_facet: [],
      per_facet: ["Jones, Julius (1980- )", "Stitt, Kevin"],
      geo_facet: ["Oklahoma"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "Mr. Jones, 41, had been scheduled to be executed on Thursday.",
          copyright: "Oklahoma Department of Corrections, via Associated Press",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/17/multimedia/17xp-juliusjones-promo/17xp-juliusjones-photo02-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/17/multimedia/17xp-juliusjones-promo/17xp-juliusjones-photo02-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/17/multimedia/17xp-juliusjones-promo/17xp-juliusjones-photo02-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/6973cfa8-aed4-5994-8a82-c8751db16acf",
      url: "https://www.nytimes.com/2021/11/17/style/chaste-marriage-church.html",
      id: 100000007948595,
      asset_id: 100000007948595,
      source: "New York Times",
      published_date: "2021-11-17",
      updated: "2021-11-19 12:24:39",
      section: "Style",
      subsection: "",
      nytdsection: "style",
      adx_keywords:
        "Celibacy;Marriages;Abstinence (Sexual);Parenting;Roman Catholic Church",
      column: null,
      byline: "By Geoffrey Leavenworth",
      type: "Article",
      title: "One Chaste Marriage, Four Kids, and the Catholic Church",
      abstract:
        "A son reflects on his parents’ commitment, endorsed by the Catholic Church, to cohabit chastely like “brother and sister” to avoid mortal sin.",
      des_facet: ["Celibacy", "Marriages", "Abstinence (Sexual)", "Parenting"],
      org_facet: ["Roman Catholic Church"],
      per_facet: [],
      geo_facet: [],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption: "",
          copyright: "Camille Deschiens",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/17/fashion/17FirstPerson-ChasteMarriage/17FirstPerson-ChasteMarriage-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/17/fashion/17FirstPerson-ChasteMarriage/17FirstPerson-ChasteMarriage-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/17/fashion/17FirstPerson-ChasteMarriage/17FirstPerson-ChasteMarriage-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/4e6c3a05-3dd6-5871-84d2-0b9484471a44",
      url: "https://www.nytimes.com/2021/11/24/nyregion/macys-parade-time-thanksgiving.html",
      id: 100000008093552,
      asset_id: 100000008093552,
      source: "New York Times",
      published_date: "2021-11-24",
      updated: "2021-11-25 16:46:15",
      section: "New York",
      subsection: "",
      nytdsection: "new york",
      adx_keywords:
        "Thanksgiving Day;Parades;Coronavirus (2019-nCoV);Vaccination and Immunization;Macy's Inc;Ballet Hispanico;Hampton University;National Broadcasting Co;Young People's Chorus of New York City;Manhattan (NYC)",
      column: null,
      byline: "By Lola Fadulu",
      type: "Article",
      title: "How to watch the parade.",
      abstract:
        "This year’s parade will feature performers like Kelly Rowland and Carrie Underwood and will have 15 giant balloons and 28 floats.",
      des_facet: [
        "Thanksgiving Day",
        "Parades",
        "Coronavirus (2019-nCoV)",
        "Vaccination and Immunization",
      ],
      org_facet: [
        "Macy's Inc",
        "Ballet Hispanico",
        "Hampton University",
        "National Broadcasting Co",
        "Young People's Chorus of New York City",
      ],
      per_facet: [],
      geo_facet: ["Manhattan (NYC)"],
      media: [],
      eta_id: 0,
    },
    {
      uri: "nyt://article/6dbb6d07-7087-5fb4-b56e-0109bef4e59d",
      url: "https://www.nytimes.com/2021/11/23/business/stores-open-thanksgiving-black-friday.html",
      id: 100000008088440,
      asset_id: 100000008088440,
      source: "New York Times",
      published_date: "2021-11-23",
      updated: "2021-11-25 21:52:32",
      section: "Business",
      subsection: "",
      nytdsection: "business",
      adx_keywords:
        "Shopping and Retail;Black Friday and Cyber Monday (Shopping);Coronavirus (2019-nCoV);Thanksgiving Day",
      column: null,
      byline: "By Coral Murphy Marcos",
      type: "Article",
      title:
        "Open or closed on Thanksgiving? Here are stores’ plans for Thursday and Friday.",
      abstract:
        "Many retailers will close their stores on Thanksgiving Day, citing safety concerns and gratitude for their employees.",
      des_facet: [
        "Shopping and Retail",
        "Black Friday and Cyber Monday (Shopping)",
        "Coronavirus (2019-nCoV)",
        "Thanksgiving Day",
      ],
      org_facet: [],
      per_facet: [],
      geo_facet: [],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "Target will close its stores on Thanksgiving Day for the second year in a row.",
          copyright: "Ted Shaffrey/Associated Press",
          approved_for_syndication: 0,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/23/multimedia/23economy-briefing-thanksgivingretail/23economy-briefing-thanksgivingretail-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/23/multimedia/23economy-briefing-thanksgivingretail/23economy-briefing-thanksgivingretail-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/23/multimedia/23economy-briefing-thanksgivingretail/23economy-briefing-thanksgivingretail-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/f55ae103-16a1-5a21-9307-329645a37dc1",
      url: "https://www.nytimes.com/2021/11/23/us/charlottesville-rally-verdict.html",
      id: 100000008087346,
      asset_id: 100000008087346,
      source: "New York Times",
      published_date: "2021-11-23",
      updated: "2021-11-24 08:39:53",
      section: "U.S.",
      subsection: "",
      nytdsection: "u.s.",
      adx_keywords:
        "Charlottesville, Va, Violence (August, 2017);Right-Wing Extremism and Alt-Right;Race and Ethnicity;Neo Nazi Groups;Compensation for Damages (Law);Decisions and Verdicts;Suits and Litigation (Civil);Spencer, Richard B (1978- );Cantwell, Christopher C (1980- );Kessler, Jason E;Charlottesville (Va)",
      column: null,
      byline: "By Neil MacFarquhar",
      type: "Article",
      title:
        "Jury Finds Rally Organizers Responsible for Charlottesville Violence",
      abstract:
        "Jurors found the main organizers of the deadly far-right rally in Charlottesville, Va., in 2017 liable under state law, awarding more than $25 million in damages, but deadlocked on federal conspiracy charges.",
      des_facet: [
        "Charlottesville, Va, Violence (August, 2017)",
        "Right-Wing Extremism and Alt-Right",
        "Race and Ethnicity",
        "Neo Nazi Groups",
        "Compensation for Damages (Law)",
        "Decisions and Verdicts",
        "Suits and Litigation (Civil)",
      ],
      org_facet: [],
      per_facet: [
        "Spencer, Richard B (1978- )",
        "Cantwell, Christopher C (1980- )",
        "Kessler, Jason E",
      ],
      geo_facet: ["Charlottesville (Va)"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "Members of the Alt-Right leading a torch march through the University of Virginia in 2017.",
          copyright: "Edu Bayer for The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/22/us/00Charlottesville-Verdict-HFO-1/00Charlottesville-Verdict-HFO-1-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/22/us/00Charlottesville-Verdict-HFO-1/00Charlottesville-Verdict-HFO-1-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/22/us/00Charlottesville-Verdict-HFO-1/00Charlottesville-Verdict-HFO-1-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/7dc26c78-a291-5c43-bc72-5f3905d9851a",
      url: "https://www.nytimes.com/2021/11/17/opinion/kyle-rittenhouse-guns.html",
      id: 100000008079918,
      asset_id: 100000008079918,
      source: "New York Times",
      published_date: "2021-11-17",
      updated: "2021-11-19 14:50:37",
      section: "Opinion",
      subsection: "",
      nytdsection: "opinion",
      adx_keywords:
        "Murders, Attempted Murders and Homicides;Self-Defense;Firearms;Black Lives Matter Movement;Rittenhouse, Kyle;Huber, Anthony (d 2020);Grosskreutz, Gaige;Rosenbaum, Joseph (d 2020);Kenosha (Wis)",
      column: null,
      byline: "By Farhad Manjoo",
      type: "Article",
      title: "The Truth About Kyle Rittenhouse’s Gun",
      abstract:
        "Kyle Rittenhouse’s semiautomatic rifle endangered everybody around him —  and himself.",
      des_facet: [
        "Murders, Attempted Murders and Homicides",
        "Self-Defense",
        "Firearms",
        "Black Lives Matter Movement",
      ],
      org_facet: [],
      per_facet: [
        "Rittenhouse, Kyle",
        "Huber, Anthony (d 2020)",
        "Grosskreutz, Gaige",
        "Rosenbaum, Joseph (d 2020)",
      ],
      geo_facet: ["Kenosha (Wis)"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "The lead prosecutor in the Kyle Rittenhouse trial,  Thomas Binger, with the gun Mr. Rittenhouse used to shoot three people.",
          copyright: "Pool photo by Sean Krajacic",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/18/opinion/17manjoo1/17manjoo1-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/opinion/17manjoo1/17manjoo1-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/opinion/17manjoo1/17manjoo1-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/e0d0ecbe-6c53-5463-8eff-8a388de68e52",
      url: "https://www.nytimes.com/2021/11/23/us/ian-fishback-dead.html",
      id: 100000008089474,
      asset_id: 100000008089474,
      source: "New York Times",
      published_date: "2021-11-23",
      updated: "2021-11-24 17:52:58",
      section: "U.S.",
      subsection: "",
      nytdsection: "u.s.",
      adx_keywords:
        "Deaths (Obituaries);Iraq War (2003-11);Afghanistan War (2001- );United States Defense and Military Forces;Human Rights and Human Rights Violations;Torture;Post-Traumatic Stress Disorder;Detainees;Whistle-Blowers;Fishback, Ian;McCain, John;Warner, John W;Senate Committee on Armed Services",
      column: null,
      byline: "By Sam Roberts",
      type: "Article",
      title: "Maj. Ian Fishback, Who Exposed Abuse of Detainees, Dies at 42",
      abstract:
        "His letter to two senators about beatings by U.S. troops in Iraq led to legislation in 2005 prohibiting extreme mistreatment of military prisoners.",
      des_facet: [
        "Deaths (Obituaries)",
        "Iraq War (2003-11)",
        "Afghanistan War (2001- )",
        "United States Defense and Military Forces",
        "Human Rights and Human Rights Violations",
        "Torture",
        "Post-Traumatic Stress Disorder",
        "Detainees",
        "Whistle-Blowers",
      ],
      org_facet: ["Senate Committee on Armed Services"],
      per_facet: ["Fishback, Ian", "McCain, John", "Warner, John W"],
      geo_facet: [],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "The Army officer Ian Fishback on Capitol Hill in 2005. His reports of the abuse of prisoners in Iraq led to the passage of the Detainee Treatment Act with overwhelming bipartisan support.",
          copyright: " Jamie Rose for The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/24/obituaries/23Fishback/23Fishback-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/24/obituaries/23Fishback/23Fishback-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/24/obituaries/23Fishback/23Fishback-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/b1b776ae-5214-52c1-a510-a2234d9020c7",
      url: "https://www.nytimes.com/2021/11/19/science/lunar-eclipse-photos.html",
      id: 100000008084849,
      asset_id: 100000008084849,
      source: "New York Times",
      published_date: "2021-11-19",
      updated: "2021-11-20 14:56:12",
      section: "Science",
      subsection: "",
      nytdsection: "science",
      adx_keywords: "Eclipses;Moon;your-feed-science",
      column: null,
      byline: "By Michael Roston and Matt McCann",
      type: "Article",
      title: "Did You Miss the Lunar Eclipse? Here’s What It Looked Like.",
      abstract:
        "The partial eclipse on Thursday night and Friday morning lasted more than six hours, and these photos captured the moon’s rust-red hue.",
      des_facet: ["Eclipses", "Moon", "your-feed-science"],
      org_facet: [],
      per_facet: [],
      geo_facet: [],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption: "",
          copyright: "Alexander Drago/Reuters",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/19/science/19eclipsephotos-promo/19eclipsephotos-promo-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/19/science/19eclipsephotos-promo/19eclipsephotos-promo-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/19/science/19eclipsephotos-promo/19eclipsephotos-promo-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
    {
      uri: "nyt://article/a2892429-8222-55f6-9c71-0b2d7f905b25",
      url: "https://www.nytimes.com/2021/11/18/opinion/biden-infrastructure-stimulus-bill.html",
      id: 100000008082686,
      asset_id: 100000008082686,
      source: "New York Times",
      published_date: "2021-11-18",
      updated: "2021-11-19 14:53:46",
      section: "Opinion",
      subsection: "",
      nytdsection: "opinion",
      adx_keywords:
        "Infrastructure Investment and Jobs Act (2021);United States Economy;Infrastructure (Public Works);American Rescue Plan (2021);Labor and Jobs;Stimulus (Economic);United States Politics and Government;Child Tax Credits and Stipends;Inflation (Economics);Law and Legislation;Coronavirus (2019-nCoV);Wages and Salaries;Consumer Behavior;Biden, Joseph R Jr;Democratic Party;United States",
      column: null,
      byline: "By David Brooks",
      type: "Article",
      title: "Joe Biden Is Succeeding",
      abstract:
        "Voters may pummel Democrats next year, but future generations will be grateful. ",
      des_facet: [
        "Infrastructure Investment and Jobs Act (2021)",
        "United States Economy",
        "Infrastructure (Public Works)",
        "American Rescue Plan (2021)",
        "Labor and Jobs",
        "Stimulus (Economic)",
        "United States Politics and Government",
        "Child Tax Credits and Stipends",
        "Inflation (Economics)",
        "Law and Legislation",
        "Coronavirus (2019-nCoV)",
        "Wages and Salaries",
        "Consumer Behavior",
      ],
      org_facet: ["Democratic Party"],
      per_facet: ["Biden, Joseph R Jr"],
      geo_facet: ["United States"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption: "",
          copyright: "Kenny Holston for The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2021/11/18/opinion/18brooks-2/18brooks-2-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/opinion/18brooks-2/merlin_197976621_97bce421-5e9d-4f01-a105-5f916048b265-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2021/11/18/opinion/18brooks-2/merlin_197976621_97bce421-5e9d-4f01-a105-5f916048b265-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
  ],
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("most popular wrapper component rendered or not", () => {
  test("most popular heading present or not", async () => {
    fetchMostPopularResults.mockResolvedValue(mostPopularResult);
    render(
      <Router>
        <MostPopularWrapper />
      </Router>
    );

    let text = await screen.findByText(/Trending/i);
    expect(text).toBeInTheDocument();
  });
  test("most popular results present or not", async () => {
    fetchMostPopularResults.mockResolvedValue(mostPopularResult);
    render(
      <Router>
        <MostPopularWrapper />
      </Router>
    );

    let text = await screen.findByText(/Five Dead/i);
    expect(text).toBeInTheDocument();
  });
});
