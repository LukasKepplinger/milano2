migrate((db) => {
  const collection = new Collection({
    "id": "zcd71ur3stj1gi0",
    "created": "2023-03-03 14:11:28.258Z",
    "updated": "2023-03-03 14:11:28.258Z",
    "name": "dish",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gkcczx3j",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dyk17obe",
        "name": "price",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0");

  return dao.deleteCollection(collection);
})
