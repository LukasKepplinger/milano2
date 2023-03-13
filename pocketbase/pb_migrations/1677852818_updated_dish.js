migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0")

  collection.name = "dishes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcd71ur3stj1gi0")

  collection.name = "dish"

  return dao.saveCollection(collection)
})
