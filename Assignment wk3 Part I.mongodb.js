use('ProductOrder');
db.createCollection("Product");
db.createCollection("Inventory");
db.createCollection("User");
db.createCollection("Order");

use('ProductOrder');
db.Product.find().limit(5);

use('ProductOrder');
db.Inventory.find().limit(5);

use('ProductOrder');
db.User.find().limit(5);

use('ProductOrder');
db.Order.find().limit(5);

use('ProductOrder');
db.Product.distinct("brand");

use('ProductOrder');
db.Product.distinct("model");

use('ProductOrder');
db.Product.aggregate([
    {"$group":{
        "_id":"id",
        "MaxPrice":{"$max":"$price"},
        "MinPrice":{"$min":"$price"}
    }}
])

use('ProductOrder');
db.Inventory.aggregate([
    {"$project":{
        "sku": "SNY-11001",
        "last_updated":1,
        "quantity":1

    }}
])

use('ProductOrder');
db.User.find({role:"Supplier"}).count();

use('ProductOrder');
db.Product.aggregate([
    {"$project":{
        "model": "Bravia-X",
        "sku":1,
        "code":1,
        "price":1,
        "brand":1,
        "warranty":1

    }}
])

use('ProductOrder');
db.Product.aggregate([
    {$match:{
        "brand":"Sony",
        "price":{
            $gt:100000
        }
    }}
])


use('ProductOrder');
db.Product.aggregate([
    {
        $group:{_id:"$brand",
        total_products:{$sum:1}}
    },{
        "$sort":{total_products:-1}
    }
])


use('ProductOrder');
db.User.aggregate([
    {
        $group:{_id:"$role",
        total_num_users:{$sum:1}}
    },{
        $out:"Total_num_Users"
    }

])
use('ProductOrder');
db.Total_num_Users.find()
