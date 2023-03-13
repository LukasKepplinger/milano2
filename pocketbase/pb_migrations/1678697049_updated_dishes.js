migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0")

  collection.updateRule = "@request.auth.isAdmin = true "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
