### api (server):

- I have used prisma as the ORM lib. The main reason to use this lib is to import the existing table structure without changing the table structure.
- I have decided to use the given table structure `quotes` without modifying. The form data will be stored in `quote_data` JSON object.
- If time permits I would have created a separate table for user data referred by uuid.
- Two endpoints are created: `GET : quotes` and `POST : quotes` for listing and creating quotes respectively.
- I would have to create the filter, delete and edit functionalities if time permits.
- Sever-side input validation was done using `express-validator` middleware.
- files were separated to controller, models and rout folders and the expressjs server is kept in the main folder for easy to navigate. 
- More unit-test to be added if time permits.

#### DB URL Update:
I had a port conflict in my local machine, so had to use the prot `4306` to connect to the mysql. Please update the DATABASE_URL value found in  `.env` file to reflect the DB configuration under `server/`.

### ui (client):

- I  have used the `react.semantic-ui` as the view library.
- All the ui fields are validated using the `react-hook-form` library.
- Navigation between pages is implemented using the `react-router-dom v6`.
- Data is stored to local storage before sending to the server.
- Error messages are modularized to be loaded from the 3rd party service to support internationalization.
- I have added a few TODO's that could have been done if time permits. These includes moving certain code to separate components, adding caching for performance etc.
- Definelty more unit-test to be added if time permits.


## ui screenshots
![Step 01](/solution_1.png?raw=true "Step One")
![Step 02](/solution_2.png?raw=true "Step Two")


### Reference:

https://restfulapi.net/resource-naming/

https://openbase.com/js/prisma

https://github.com/textbook/starter-kit/tree/1567d269b8afe5d93408202900ac0ac1473fd89e/server

https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript

https://www.prisma.io/docs/concepts/components/introspection#what-does-introspection-do

https://www.prisma.io/dataguide/mysql/introduction-to-data-types#other-useful-types
