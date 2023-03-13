migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hvx1nxht",
    "name": "enabled",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0")

  // remove
  collection.schema.removeField("hvx1nxht")

  return dao.saveCollection(collection)
})
