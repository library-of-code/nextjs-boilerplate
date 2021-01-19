## Overview
This is a **next-js starter boilerplate** to help you get started with NextJS quickly. It can be used as a static site generator or can also be served live from a server.

It comes prebuilt with:
- OAuth Authentication
- Ant Design
- Tabbed Layout

## Getting Started
- Git clone this repo or use it as template.
- Install the components using `yarn install` or `npm install`
- Run the server using `yarn dev` or `next run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folders
- **constants**: This folder contains the constant values to be used throughout the app. _e.g. link to CMS_
- **components**: This folder contains individual components that you design in React to be used in the app.
- **pages**: This folder contains all the pages in your website.
- **styles**: This contains the global styles to be used throughout the app. _e.g. Antd.less contains css prefs pertaining to Ant Design._

## Some important points
- You can remove **ant design** from the project by simply removing its import statement in **pages/_app.js**
- You can use **OAuth** by configuring your _providers_ in **api/auth/[...nextauth.js]** (Only for non-static sites).
- Yout can change the **components/layout/Layout.jsx** file to change the tabbed layout of the site
- You can make a component private so that only authenticated users can see it by using the `<Layout protected>` tag with it.

## Contribute
Contribute to this project by:
- Opening an **issue** requesting for a new feature or bug fix.
- Sending a **pull request** with your additions.
