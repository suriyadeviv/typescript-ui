# UI Dev Technical - Dishwasher App

## Overview

This website showcases the variety of dishwashers available for purchase from company.

### Product Grid

Upon launching the website, users will see a grid displaying the first 20 dishwashers retrieved from the API that are available for purchase.

### Product Page

Clicking on a dishwasher will navigate to a detailed view of that product. The layout will switch to landscape mode for screen widths greater than 768px and portrait mode for screen widths less than 768px

### Suggestions

1. Implement a `Load more` button and pagination to display additional products in the listing page
2. Lazy load images that are out of the viewport, with the first image prioritized to enhance performance
3. Consider using an accordion for the Product Specifications, displaying main details initially with the option to expand for more information.
4. Improve error handling to address 5xx and 4xx errors more effectively
5. Analytics to understand the user pattern of search and showcase the similar and cross-sell products
6. create environment based config files to use the dev and prod api and keys

## Installation

Install the NPM dependencies using `npm i`.

Run the development server with `npm run dev`

Run TypeScript with `npm run tsc -- -w` or alternatively make use of the TypeScript functionality in your editor of choice.

Run the test cases and get coverage `npm run test`

Open [http://localhost:3001](http://localhost:3001) with your browser.

### Coverage

The coverage report of unit test cases written.

<img alt="coverage" src="/images/coverage.png" width="50%">

### Performance, Accessibility and SEO 

The lighthouse report for Mobile and Desktop is

| Mobile                                           | Desktop                                          |
|--------------------------------------------------|--------------------------------------------------|
| <img alt="coverage" src="/images/mobile-lighthouse.png" width="50%"> | <img alt="coverage" src="/images/desktop-lighthouse.png" width="50%"> |

