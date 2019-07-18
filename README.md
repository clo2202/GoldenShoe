# Golden Shoe API

**A shoe stock API using Express, PSQL and Knex**

The API can be viewed on https://be-golden-shoe.herokuapp.com/api/shoes

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

## Step 1 - Prerequisites 

In order to use this project you'll need the following;

1. A JS code editor (I used VS code)
2. [PostgreSQL](https://www.postgresql.org/) db set up. 
3. [Insomnia](https://insomnia.rest/) view API responses and create requests (optional). 
4. A heroku account to view your requests (optional).

## Step 2 - Set up your own version of the repo

Clone this repo;

```bash
git clone https://github.com/clo2202/golden-shoe
```

## Step 3 - Set up the DB locally

Run the command;

```bash
npm run setup-db
# This will set-up the db on your local machine.
```

## Step 4 - Getting started with your project

Once you're in the repo, ensure you have downloaded all of the dependencies using the following command;

```bash
npm install

# This will download all the dependencies required to work with this project.
```

In this repo you have been provided with a knexfile. If you are on linux you will need to insert your postgres username and password into the knexfile. Make sure to add it to the `.gitignore` if you plan on pushing to your own repository.

## Running the tests

To run the tests simply enter the following command;

```bash
npm run test

# Testing has been built using Mocha and Chai. They are to check the endpoints are retrieving the correct data, in the expected format. For example . . .

  describe("/shoes", () => {
    it("GET responds with status: 200 and an array of shoe objects", () => {
      return request
        .get("/api/shoes")
        .expect(200)
        .then(({ body: { shoes } }) => {
          expect(shoes).to.be.a("array");
          expect(shoes.length).to.equal(15);
        });
    });
```

## Deployment

```bash
npm run start

# This will connect you to localhost:9090
```

```bash
npm run seed:prod

# This will connect you to your heroku app if you've set one up
```
## Built With 

* SQL - the database
* Express - create the API
* Heroku - hosting of the application & database
* VS Code (Node JS) - language used to write the app

## Authors 

* **Chloe Williams** - [clo2202](https://github.com/clo2202)

