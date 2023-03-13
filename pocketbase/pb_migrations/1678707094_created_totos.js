migrate((db) => {
  const collection = new Collection({
    "id": "23fe01f8eoluk58",
    "created": "2023-03-13 11:31:34.554Z",
    "updated": "2023-03-13 11:31:34.554Z",
    "name": "totos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hkuon2lm",
        "name": "text",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qawtw21v",
        "name": "isdone",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("23fe01f8eoluk58");

  return dao.deleteCollection(collection);
})
