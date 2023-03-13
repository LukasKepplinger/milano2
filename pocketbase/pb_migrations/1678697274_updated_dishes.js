migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0")

  collection.listRule = "enabled = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0")

  collection.listRule = null

  return dao.saveCollection(collection)
})
