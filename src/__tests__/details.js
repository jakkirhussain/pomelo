import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";

import { fetchArticleDetail } from "../apis/apis";

import Details from "../details/Details";
import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";

jest.mock("../apis/apis");

jest.mock("axios");

const detailsResult = {
  status: "OK",
  copyright:
    "Copyright (c) 2021 The New York Times Company. All Rights Reserved.",
  response: {
    docs: [
      {
        abstract:
          "Holly Herrmann vowed to move to Italy when she was 20. Her dream came true 38 years later.",
        web_url:
          "https://www.nytimes.com/2021/11/23/style/italy-retirement-holly-herrmann.html",
        snippet:
          "Holly Herrmann vowed to move to Italy when she was 20. Her dream came true 38 years later.",
        lead_paragraph:
          "“It’s Never Too Late” is a series that tells the stories of people who decide to pursue their dreams on their own terms.",
        source: "The New York Times",
        multimedia: [
          {
            rank: 0,
            subtype: "xlarge",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-articleLarge.jpg",
            height: 900,
            width: 600,
            legacy: {
              xlarge:
                "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-articleLarge.jpg",
              xlargewidth: 600,
              xlargeheight: 900,
            },
            subType: "xlarge",
            crop_name: "articleLarge",
          },
          {
            rank: 0,
            subtype: "popup",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-popup.jpg",
            height: 500,
            width: 334,
            legacy: {},
            subType: "popup",
            crop_name: "popup",
          },
          {
            rank: 0,
            subtype: "blog480",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-blog480.jpg",
            height: 720,
            width: 480,
            legacy: {},
            subType: "blog480",
            crop_name: "blog480",
          },
          {
            rank: 0,
            subtype: "blog533",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-blog533.jpg",
            height: 800,
            width: 533,
            legacy: {},
            subType: "blog533",
            crop_name: "blog533",
          },
          {
            rank: 0,
            subtype: "blog427",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-blog427.jpg",
            height: 641,
            width: 427,
            legacy: {},
            subType: "blog427",
            crop_name: "blog427",
          },
          {
            rank: 0,
            subtype: "tmagSF",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-tmagSF.jpg",
            height: 543,
            width: 362,
            legacy: {},
            subType: "tmagSF",
            crop_name: "tmagSF",
          },
          {
            rank: 0,
            subtype: "tmagArticle",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-tmagArticle.jpg",
            height: 888,
            width: 592,
            legacy: {},
            subType: "tmagArticle",
            crop_name: "tmagArticle",
          },
          {
            rank: 0,
            subtype: "slide",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-slide.jpg",
            height: 500,
            width: 334,
            legacy: {},
            subType: "slide",
            crop_name: "slide",
          },
          {
            rank: 0,
            subtype: "jumbo",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-jumbo.jpg",
            height: 1024,
            width: 683,
            legacy: {},
            subType: "jumbo",
            crop_name: "jumbo",
          },
          {
            rank: 0,
            subtype: "superJumbo",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-superJumbo.jpg",
            height: 2048,
            width: 1366,
            legacy: {},
            subType: "superJumbo",
            crop_name: "superJumbo",
          },
          {
            rank: 0,
            subtype: "blog225",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-blog225.jpg",
            height: 338,
            width: 225,
            legacy: {},
            subType: "blog225",
            crop_name: "blog225",
          },
          {
            rank: 0,
            subtype: "master1050",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-master1050.jpg",
            height: 1575,
            width: 1050,
            legacy: {},
            subType: "master1050",
            crop_name: "master1050",
          },
          {
            rank: 0,
            subtype: "master675",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-master675.jpg",
            height: 1013,
            width: 675,
            legacy: {},
            subType: "master675",
            crop_name: "master675",
          },
          {
            rank: 0,
            subtype: "master495",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-master495.jpg",
            height: 743,
            width: 495,
            legacy: {},
            subType: "master495",
            crop_name: "master495",
          },
          {
            rank: 0,
            subtype: "master180",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-master180.jpg",
            height: 270,
            width: 180,
            legacy: {},
            subType: "master180",
            crop_name: "master180",
          },
          {
            rank: 0,
            subtype: "master315",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-master315.jpg",
            height: 473,
            width: 315,
            legacy: {},
            subType: "master315",
            crop_name: "master315",
          },
          {
            rank: 0,
            subtype: "master768",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-master768.jpg",
            height: 1152,
            width: 768,
            legacy: {},
            subType: "master768",
            crop_name: "master768",
          },
          {
            rank: 0,
            subtype: "thumbnail",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-thumbStandard.jpg",
            height: 75,
            width: 75,
            legacy: {
              thumbnail:
                "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-thumbStandard.jpg",
              thumbnailwidth: 75,
              thumbnailheight: 75,
            },
            subType: "thumbnail",
            crop_name: "thumbStandard",
          },
          {
            rank: 0,
            subtype: "blogSmallThumb",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-blogSmallThumb.jpg",
            height: 50,
            width: 50,
            legacy: {},
            subType: "blogSmallThumb",
            crop_name: "blogSmallThumb",
          },
          {
            rank: 0,
            subtype: "thumbLarge",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-thumbLarge.jpg",
            height: 150,
            width: 150,
            legacy: {},
            subType: "thumbLarge",
            crop_name: "thumbLarge",
          },
          {
            rank: 0,
            subtype: "smallSquare168",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-smallSquare168.jpg",
            height: 168,
            width: 168,
            legacy: {},
            subType: "smallSquare168",
            crop_name: "smallSquare168",
          },
          {
            rank: 0,
            subtype: "smallSquare252",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-smallSquare252.jpg",
            height: 252,
            width: 252,
            legacy: {},
            subType: "smallSquare252",
            crop_name: "smallSquare252",
          },
          {
            rank: 0,
            subtype: "square320",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-square320.jpg",
            height: 320,
            width: 320,
            legacy: {},
            subType: "square320",
            crop_name: "square320",
          },
          {
            rank: 0,
            subtype: "moth",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-moth.jpg",
            height: 151,
            width: 151,
            legacy: {},
            subType: "moth",
            crop_name: "moth",
          },
          {
            rank: 0,
            subtype: "filmstrip",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-filmstrip.jpg",
            height: 190,
            width: 190,
            legacy: {},
            subType: "filmstrip",
            crop_name: "filmstrip",
          },
          {
            rank: 0,
            subtype: "square640",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-square640.jpg",
            height: 640,
            width: 640,
            legacy: {},
            subType: "square640",
            crop_name: "square640",
          },
          {
            rank: 0,
            subtype: "mediumSquare149",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-mediumSquare149.jpg",
            height: 149,
            width: 149,
            legacy: {},
            subType: "mediumSquare149",
            crop_name: "mediumSquare149",
          },
          {
            rank: 0,
            subtype: "mediumSquareAt3X",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-mediumSquareAt3X.jpg",
            height: 1799,
            width: 1800,
            legacy: {},
            subType: "mediumSquareAt3X",
            crop_name: "mediumSquareAt3X",
          },
          {
            rank: 0,
            subtype: "sfSpan",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-sfSpan.jpg",
            height: 263,
            width: 395,
            legacy: {},
            subType: "sfSpan",
            crop_name: "sfSpan",
          },
          {
            rank: 0,
            subtype: "largeHorizontal375",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-largeHorizontal375.jpg",
            height: 250,
            width: 375,
            legacy: {},
            subType: "largeHorizontal375",
            crop_name: "largeHorizontal375",
          },
          {
            rank: 0,
            subtype: "largeHorizontalJumbo",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-largeHorizontalJumbo.jpg",
            height: 682,
            width: 1024,
            legacy: {},
            subType: "largeHorizontalJumbo",
            crop_name: "largeHorizontalJumbo",
          },
          {
            rank: 0,
            subtype: "horizontalMediumAt2X",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-horizontalMediumAt2X.jpg",
            height: 2665,
            width: 4000,
            legacy: {},
            subType: "horizontalMediumAt2X",
            crop_name: "horizontalMediumAt2X",
          },
          {
            rank: 0,
            subtype: "hpLarge",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-hpLarge.jpg",
            height: 287,
            width: 511,
            legacy: {},
            subType: "hpLarge",
            crop_name: "hpLarge",
          },
          {
            rank: 0,
            subtype: "largeWidescreen573",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-largeWidescreen573.jpg",
            height: 322,
            width: 573,
            legacy: {},
            subType: "largeWidescreen573",
            crop_name: "largeWidescreen573",
          },
          {
            rank: 0,
            subtype: "largeWidescreen1050",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-largeWidescreen1050.jpg",
            height: 590,
            width: 1050,
            legacy: {},
            subType: "largeWidescreen1050",
            crop_name: "largeWidescreen1050",
          },
          {
            rank: 0,
            subtype: "wide",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-thumbWide.jpg",
            height: 126,
            width: 190,
            legacy: {
              widewidth: 190,
              wideheight: 126,
              wide: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-thumbWide.jpg",
            },
            subType: "wide",
            crop_name: "thumbWide",
          },
          {
            rank: 0,
            subtype: "videoThumb",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoThumb.jpg",
            height: 50,
            width: 75,
            legacy: {},
            subType: "videoThumb",
            crop_name: "videoThumb",
          },
          {
            rank: 0,
            subtype: "videoLarge",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoLarge.jpg",
            height: 507,
            width: 768,
            legacy: {},
            subType: "videoLarge",
            crop_name: "videoLarge",
          },
          {
            rank: 0,
            subtype: "mediumThreeByTwo210",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-mediumThreeByTwo210.jpg",
            height: 140,
            width: 210,
            legacy: {},
            subType: "mediumThreeByTwo210",
            crop_name: "mediumThreeByTwo210",
          },
          {
            rank: 0,
            subtype: "mediumThreeByTwo225",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-mediumThreeByTwo225.jpg",
            height: 150,
            width: 225,
            legacy: {},
            subType: "mediumThreeByTwo225",
            crop_name: "mediumThreeByTwo225",
          },
          {
            rank: 0,
            subtype: "mediumThreeByTwo440",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-mediumThreeByTwo440.jpg",
            height: 293,
            width: 440,
            legacy: {},
            subType: "mediumThreeByTwo440",
            crop_name: "mediumThreeByTwo440",
          },
          {
            rank: 0,
            subtype: "mediumThreeByTwo252",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-mediumThreeByTwo252.jpg",
            height: 168,
            width: 252,
            legacy: {},
            subType: "mediumThreeByTwo252",
            crop_name: "mediumThreeByTwo252",
          },
          {
            rank: 0,
            subtype: "mediumThreeByTwo378",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-mediumThreeByTwo378.jpg",
            height: 252,
            width: 378,
            legacy: {},
            subType: "mediumThreeByTwo378",
            crop_name: "mediumThreeByTwo378",
          },
          {
            rank: 0,
            subtype: "threeByTwoLargeAt2X",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-threeByTwoLargeAt2X.jpg",
            height: 2665,
            width: 4000,
            legacy: {},
            subType: "threeByTwoLargeAt2X",
            crop_name: "threeByTwoLargeAt2X",
          },
          {
            rank: 0,
            subtype: "threeByTwoMediumAt2X",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-threeByTwoMediumAt2X.jpg",
            height: 999,
            width: 1500,
            legacy: {},
            subType: "threeByTwoMediumAt2X",
            crop_name: "threeByTwoMediumAt2X",
          },
          {
            rank: 0,
            subtype: "threeByTwoSmallAt2X",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-threeByTwoSmallAt2X.jpg",
            height: 400,
            width: 600,
            legacy: {},
            subType: "threeByTwoSmallAt2X",
            crop_name: "threeByTwoSmallAt2X",
          },
          {
            rank: 0,
            subtype: "articleInline",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-articleInline.jpg",
            height: 285,
            width: 190,
            legacy: {},
            subType: "articleInline",
            crop_name: "articleInline",
          },
          {
            rank: 0,
            subtype: "hpSmall",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-hpSmall.jpg",
            height: 245,
            width: 163,
            legacy: {},
            subType: "hpSmall",
            crop_name: "hpSmall",
          },
          {
            rank: 0,
            subtype: "blogSmallInline",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-blogSmallInline.jpg",
            height: 227,
            width: 151,
            legacy: {},
            subType: "blogSmallInline",
            crop_name: "blogSmallInline",
          },
          {
            rank: 0,
            subtype: "mediumFlexible177",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-mediumFlexible177.jpg",
            height: 266,
            width: 177,
            legacy: {},
            subType: "mediumFlexible177",
            crop_name: "mediumFlexible177",
          },
          {
            rank: 0,
            subtype: "videoSmall",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSmall.jpg",
            height: 281,
            width: 500,
            legacy: {},
            subType: "videoSmall",
            crop_name: "videoSmall",
          },
          {
            rank: 0,
            subtype: "videoHpMedium",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoHpMedium.jpg",
            height: 211,
            width: 375,
            legacy: {},
            subType: "videoHpMedium",
            crop_name: "videoHpMedium",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine600",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine600.jpg",
            height: 338,
            width: 600,
            legacy: {},
            subType: "videoSixteenByNine600",
            crop_name: "videoSixteenByNine600",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine540",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine540.jpg",
            height: 304,
            width: 540,
            legacy: {},
            subType: "videoSixteenByNine540",
            crop_name: "videoSixteenByNine540",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine495",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine495.jpg",
            height: 278,
            width: 495,
            legacy: {},
            subType: "videoSixteenByNine495",
            crop_name: "videoSixteenByNine495",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine390",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine390.jpg",
            height: 219,
            width: 390,
            legacy: {},
            subType: "videoSixteenByNine390",
            crop_name: "videoSixteenByNine390",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine1050",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine1050.jpg",
            height: 591,
            width: 1050,
            legacy: {},
            subType: "videoSixteenByNine1050",
            crop_name: "videoSixteenByNine1050",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine480",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine480.jpg",
            height: 270,
            width: 480,
            legacy: {},
            subType: "videoSixteenByNine480",
            crop_name: "videoSixteenByNine480",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine310",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine310.jpg",
            height: 174,
            width: 310,
            legacy: {},
            subType: "videoSixteenByNine310",
            crop_name: "videoSixteenByNine310",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine225",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine225.jpg",
            height: 126,
            width: 225,
            legacy: {},
            subType: "videoSixteenByNine225",
            crop_name: "videoSixteenByNine225",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine96",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine96.jpg",
            height: 54,
            width: 96,
            legacy: {},
            subType: "videoSixteenByNine96",
            crop_name: "videoSixteenByNine96",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine3000",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine3000.jpg",
            height: 1687,
            width: 3000,
            legacy: {},
            subType: "videoSixteenByNine3000",
            crop_name: "videoSixteenByNine3000",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine768",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine768.jpg",
            height: 432,
            width: 768,
            legacy: {},
            subType: "videoSixteenByNine768",
            crop_name: "videoSixteenByNine768",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNine150",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNine150.jpg",
            height: 84,
            width: 150,
            legacy: {},
            subType: "videoSixteenByNine150",
            crop_name: "videoSixteenByNine150",
          },
          {
            rank: 0,
            subtype: "videoSixteenByNineJumbo1600",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoSixteenByNineJumbo1600.jpg",
            height: 900,
            width: 1600,
            legacy: {},
            subType: "videoSixteenByNineJumbo1600",
            crop_name: "videoSixteenByNineJumbo1600",
          },
          {
            rank: 0,
            subtype: "miniMoth",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-miniMoth.jpg",
            height: 70,
            width: 151,
            legacy: {},
            subType: "miniMoth",
            crop_name: "miniMoth",
          },
          {
            rank: 0,
            subtype: "windowsTile336H",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-windowsTile336H.jpg",
            height: 336,
            width: 694,
            legacy: {},
            subType: "windowsTile336H",
            crop_name: "windowsTile336H",
          },
          {
            rank: 0,
            subtype: "videoFifteenBySeven1305",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoFifteenBySeven1305.jpg",
            height: 609,
            width: 1305,
            legacy: {},
            subType: "videoFifteenBySeven1305",
            crop_name: "videoFifteenBySeven1305",
          },
          {
            rank: 0,
            subtype: "videoFifteenBySeven2610",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-videoFifteenBySeven2610.jpg",
            height: 1218,
            width: 2610,
            legacy: {},
            subType: "videoFifteenBySeven2610",
            crop_name: "videoFifteenBySeven2610",
          },
          {
            rank: 0,
            subtype: "facebookJumbo",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-facebookJumbo.jpg",
            height: 549,
            width: 1050,
            legacy: {},
            subType: "facebookJumbo",
            crop_name: "facebookJumbo",
          },
          {
            rank: 0,
            subtype: "watch308",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-watch308.jpg",
            height: 348,
            width: 312,
            legacy: {},
            subType: "watch308",
            crop_name: "watch308",
          },
          {
            rank: 0,
            subtype: "watch268",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-watch268.jpg",
            height: 303,
            width: 272,
            legacy: {},
            subType: "watch268",
            crop_name: "watch268",
          },
          {
            rank: 0,
            subtype: "verticalTwoByThree735",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/23NeverTooLate2-verticalTwoByThree735.jpg",
            height: 1102,
            width: 735,
            legacy: {},
            subType: "verticalTwoByThree735",
            crop_name: "verticalTwoByThree735",
          },
          {
            rank: 0,
            subtype: "mobileMasterAt3x",
            caption: null,
            credit: null,
            type: "image",
            url: "images/2021/11/23/fashion/23NeverTooLate2/merlin_195420420_140acb85-6bf7-4424-843c-9b525b8e9c3e-mobileMasterAt3x.jpg",
            height: 2700,
            width: 1800,
            legacy: {},
            subType: "mobileMasterAt3x",
            crop_name: "mobileMasterAt3x",
          },
        ],
        headline: {
          main: "It’s Never Too Late to Pick Up Your Life and Move to Italy",
          kicker: "It’s Never Too Late",
          content_kicker: null,
          print_headline: null,
          name: null,
          seo: null,
          sub: null,
        },
        keywords: [
          {
            name: "subject",
            value: "Travel and Vacations",
            rank: 1,
            major: "N",
          },
          {
            name: "subject",
            value: "Italian Language",
            rank: 2,
            major: "N",
          },
          {
            name: "subject",
            value: "Classical Music",
            rank: 3,
            major: "N",
          },
          {
            name: "glocations",
            value: "Italy",
            rank: 4,
            major: "N",
          },
          {
            name: "subject",
            value: "Content Type: Personal Profile",
            rank: 6,
            major: "N",
          },
        ],
        pub_date: "2021-11-23T10:00:17+0000",
        document_type: "article",
        news_desk: "SpecialSections",
        section_name: "Style",
        byline: {
          original: "By Alix Strauss",
          person: [
            {
              firstname: "Alix",
              middlename: null,
              lastname: "Strauss",
              qualifier: null,
              title: null,
              role: "reported",
              organization: "",
              rank: 1,
            },
          ],
          organization: null,
        },
        type_of_material: "News",
        _id: "nyt://article/ad951232-92fb-5aa4-8fff-f8e86f772087",
        word_count: 1209,
        uri: "nyt://article/ad951232-92fb-5aa4-8fff-f8e86f772087",
      },
    ],
    meta: {
      hits: 1,
      offset: 0,
      time: 5,
    },
  },
};

afterEach(() => {
  jest.clearAllMocks();
});

const mockUseLocationValue = {
  pathname: "/details/1234",
  search: "",
  hash: "",
  web_url: "test",
};
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router"),

  useLocation: () => {
    console.log("sad");
    return mockUseLocationValue;
  },
}));

describe("details component rendered or not", () => {
  test("details results present or not", async () => {
    fetchArticleDetail.mockResolvedValue(detailsResult);
    render(
      <Router>
        <Details />
      </Router>
    );

    let text = await screen.findByText(/Holly/i);
    expect(text).toBeInTheDocument();
  });
});