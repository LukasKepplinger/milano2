migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0")

  collection.listRule = "@request.auth.isAdmin = true "
  collection.viewRule = null
  collection.createRule = "@request.auth.isAdmin = true "
  collection.deleteRule = "@request.auth.isAdmin = true "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0")

  collection.listRule = null
  collection.viewRule = ""
  collection.createRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
