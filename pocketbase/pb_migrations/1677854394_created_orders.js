migrate((db) => {
  const collection = new Collection({
    "id": "x2oivrs9pj715t2",
    "created": "2023-03-03 14:39:54.580Z",
    "updated": "2023-03-03 14:39:54.580Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rivrriwa",
        "name": "date",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "v1rkkkdg",
        "name": "payment_received",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "daqhasxm",
        "name": "dish",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "zcd71ur3stj1gi0",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "name"
          ]
        }
      },
      {
        "system": false,
        "id": "kzeody8i",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "name"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x2oivrs9pj715t2");

  return dao.deleteCollection(collection);
})
