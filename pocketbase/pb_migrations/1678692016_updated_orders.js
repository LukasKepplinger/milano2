migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x2oivrs9pj715t2")

  collection.updateRule = "@request.auth.isAdmin = true "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x2oivrs9pj715t2")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
