# Introduction to Tabloid Filter

Tabloid Filter was built as part of my front end project for the Northcoders skills bootcamp and provides a front end to the PSQL news server built for the back end project. It aims to deliver stories from the news server in a clean and intuitive way to the end user and can be easily hosted on any react compatible hosting such as Heroku. 

A hosted version of this project can be viewed here: [Tabloid Filter](https://tabloid-filter.herokuapp.com/).

The back end project can be viewed here: [bc-nc-news](https://github.com/OwenPortfolio/be-nc-news).

## Usage

Tabloid Filter was designed to be intuitive to the user, requiring little instruction and using clear language and accepted web design conventions to keep the site accessible. The landing page, by default, directs to user to all articles while a responsive bar of sorting and filtering buttons allows the user to quickly narrow down these results. Clicking through to an article will also allow you to upvote an article, views the comments, post a comment, or delete a previously posted comment. All providing immediate feedback to the user. If the user would like to return to the landing page, or individual topics, the navbar remains accessible at all times. 

## Users

Tabloid Filter does not include user authentication currently and so user is hardcoded by default, but can be modified by changing the default user state in `App.js`

## Requirements

Tabloid Filter requires `Node v18.0.0`

## Run Locally

To run Tabloid Filter locally clone the repo use `git clone` https://github.com/OwenPortfolio/FE-nc-news, `cd` to the install folder, then `\nc-news`, and type `npm start`.