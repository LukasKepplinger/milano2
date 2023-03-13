migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x2oivrs9pj715t2")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x2oivrs9pj715t2")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
