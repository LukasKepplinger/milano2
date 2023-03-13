migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x2oivrs9pj715t2")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x2oivrs9pj715t2")

  collection.createRule = null

  return dao.saveCollection(collection)
})
