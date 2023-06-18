# RESTful API with MongoDB, Node.js and Express

A RESTful API is an interface that two computer systems use to exchange information securely over the internet. This repository contains the code for running a RESTful API built with MongoDB, Node.js and Express. The RESTful API was developed as a Classroom exercise over the first quarter of 2023 at the National Service of Apprenticeship (SENA).

### Built with...

<div align="center">
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/></code>
</div>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Dependencies

Be sure to install the following dependencies so your API can run properly.
<ul>
  <li>express</li>
  <li>mongodb</li>
  <li>body-parser</li>
  <li>cors</li>
  <li>morgan</li>
  <li>ejs</li>
  <li>dotenv</li>  
</ul>

### Installation

1. Get a free MongoDB/Atlas account at [https://www.mongodb.com/](https://account.mongodb.com/account/register)
2. Load the sample datasets
3. Clone the repo
   ```sh
   git clone https://github.com/el-profe1/API2559202_V2.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Add your port and your connection string into your application code in `.env`
   ```js
   PORT = 4000
   URI = mongodb+srv://<user>:<password>@mycluster.mongodb.net/?retryWrites=true&w=majority
   ```

## Demo
Here is a working live demo :  https://api2559202v2.up.railway.app/api/v1/movies?limit=8&offset=15000

## License

[MIT](https://choosealicense.com/licenses/mit/)
<p align="right">(<a href="#readme-top">back to top</a>)</p>
