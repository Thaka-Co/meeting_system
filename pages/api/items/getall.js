import itemModel from "../../../lib/models/Items/itemsModel";

export default async function getall(req, res) {
  try {
    // const { id } = req.body;
    console.log("here");
    console.log(itemModel);
    // const items = await itemModel.find().limit(10).forEach(item=>{
    /* 0 opend
       1 inprogress 
      2 completed */
    // add new property
    // const new_property = await itemModel.updateMany({}, [{ $set: { status: "0" } }]);
    // })
    // await items.save;
    // res.status(200).json(new_property);
    res.status(200).json(update_limited_documents);
    // } else {
    //   res.status(200).json("delayedItems not found");
    // }
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
}
