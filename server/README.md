# 17001 || BUST: Reservations API v1.0

### `GET /api/menu/:meal`
Returns a menu based on meal type.

 **URL Params**
  * `meal` _(String)_ : type of meal menu to retrieve

 **Success Response:**
  * **Status Code:** 200
  * **Content:**  Array with objects conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`id`             |Number  |
   |`name`           |String  |
   |`description`    |String  |
   |`price`          |Number  |

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

### `GET /api/menu/:meal/:id`
Returns a menu item based on meal type and id.

 **URL Params**
  * `id` _(String)_ : id to retrieve
  * `meal` _(String)_ : type of meal menu to retrieve

 **Success Response:**
  * **Status Code:** 200
  * **Content:**  Object conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`id`             |Number  |
   |`name`           |String  |
   |`description`    |String  |
   |`price`          |Number  |

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `POST /api/menu/:meal`
Posts a menu item into a table. 

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
  * **Content:** Result

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `PUT /api/menu/:meal/:id`
Edits a item in a table.

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
  * **Content:** Result

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `DELETE /api/menu/:meal/:id`
Deletes restaurant from table.

 **URL Params**
  * `id` _(Number)_ : ID of the restaurant to delete

 **Success Response:**
  * **Status Code:** 200
  * **Content:** Result

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<hr>