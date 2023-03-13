migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x2oivrs9pj715t2")

  collection.listRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x2oivrs9pj715t2")

  collection.listRule = null

  return dao.saveCollection(collection)
})
