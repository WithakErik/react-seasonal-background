# Seasonal Backgrounds
Live example: [Here](https://withakerik.github.io/react-seasonal-background/)
![alt text](https://i.imgur.com/pYxKWwc.png_ "4 Seasons")
---
Example:
```
  <SeasonalBackground
    background='https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-company-profile-corporate-culture-brochure-cross-page-design-background-material-image_131621.jpg'
    droplet='https://cdn.pixabay.com/photo/2012/04/26/12/37/dollar-42338_960_720.png'
    season='winter'
    fadeLength='4'
    fadeDelay='2'
    innerContent={<h1>Hello World!</h1>}
    development
  />
  ```
  |Key               |Type     |Required|Options/Action                    |
  |-----------------:|---------|:------:|----------------------------------|
  |***background***  |String   |No      |Path to image                     |
  |***droplet***     |String   |No      |Path to image                     |
  |***season***      |String   |No      |winter, spring, summer, fall      |
  |***fadeLength***  |Number   |No      |                                  |
  |***fadeDelay***   |Number   |No      |                                  |
  |***innerContent***|Valid JSX|No      |                                  |
  |***development*** |Boolean  |No      |Displays dropdown to select season|