
# My House Plants Care
> My web application is a tool that helps me keep track of the watering schedule of my house plants. If I'm out of town, my friend or neighbor can use this app to easily identify which plant needs to be watered on a particular day. 


## Home Page
![My Garden 2021-11-04 14-02-29.png](https://user-images.githubusercontent.com/88004335/140408198-86020796-cbd0-4115-bcd2-835021dcd41a.png)
> When the app first loads, the user is brought to the home page where the current date is displayed. The user would only need to water the plants that are shown on the page. Each plant card contains general watering instructions, a "watered" button, and a delete button. The "watered" button is droplets of water that turns blue when it's clicked on, which indicates that the plant has already been watered for the day. The tombstone is the delete button, which will delete the plant if it died.

## New Plant Page
![New Plant 2021-11-04 15-15-12](https://user-images.githubusercontent.com/88004335/140413311-744c7aa2-5302-4488-8537-d3be30410cf9.png)
> The New Plant page contains a form. If I, or the user, acquires a new plant, the details of the plant can be added to the database. The Water Schedule form field is a multi-select dropdown of the days of the week. When a new plant is submmited, a picture of the plant is displayed below the form. As I continue to grow my skills and build on this app, I'd want the user to be able to upload a photo of their actual plant (instead of a URL image) to make it much easier for the plant-sitter to identify where the plant is located in the house. 

## My Plants Page
![My Garden 2021-11-05 09-40-13](https://user-images.githubusercontent.com/88004335/140530602-8945ad5f-ae70-4c9f-902e-634850ca93fe.png)
> The My Plants page displays all of the plants in the database with additional information about the plants such as their botanical names and fertilizer schedule. The user will also be able to delete a plant that has died on this page. 


## Installing / Getting started

> The information about all the plants can be found in the `db.json` file. For this project, I'm using json-server to create a RESTful API for my database.

```shell
npm install -g json-server
json-server --watch db.json --port 3004
npm start
```

## Built With
* React
* React Bootstrap
* JSON

## License
> Distributed under the MIT License. 
