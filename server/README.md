# 17001 || BUST: Reservations API v1.0

### `GET /api/menu/:meal/:id`
Returns a menu array at a given restaurant id and meal type.

 **URL Params**
  * `id` _(Number)_ : ID of the restaurant to retrieve all relevant details
  * `meal` _(String)_ : type of meal menu to retrieve

 **Success Response:**
  * **Status Code:** 200
  * **Content:**  Menu array with objects conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`name`           |String  |
   |`description`    |String  |
   |`price`          |Number  |

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `POST /api/menu/`
Returns the id of the restaurant created in the database.

 **Payload Params**
  *Object conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`id`             |Number  |
   |`restaurant_id`  |Number  |
   |`lunch`          |Object  |
   |`dinner`         |Object  |
   |`dessert`        |Object  |

 **Success Response:**
  * **Status Code:** 201
  * **Content:** `id`

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `PUT /api/menu/:id`
Returns the id of the restaurant edited in the database.

 **URL Params**
  * `id` _(Number)_ : ID of the reservation to update

 **Payload Params**
  * Valid object conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`id`             |Number  |
   |`restaurant_id`  |Number  |
   |`lunch`          |Object  |
   |`dinner`         |Object  |
   |`dessert`        |Object  |
  

 **Success Response:**
  * **Status Code:** 201
  * **Content:** `id`

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `DELETE /api/photos/:id`
Returns the restaurant deleted from the database.

 **URL Params**
  * `id` _(Number)_ : ID of the restaurant to delete

 **Success Response:**
  * **Status Code:** 200
  * **Content:** id of deleted restaurant

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<hr>