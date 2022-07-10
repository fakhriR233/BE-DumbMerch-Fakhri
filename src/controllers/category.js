const { category } = require("../../models");

exports.addCategory = async (req, res) => {
    try {
        await category.create(req.body)

        res.status(200).send({
            status: "Success",
            message: "New category successfully Added!",
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: "Failed",
            message: "Server error, can't add new Category"
        })
    }
}


exports.getCategory = async (req,res) => {
try {
    const data = await category.findAll({
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        }
    })

    res.status(200).send({
        status: "Success",
        message: "Showing all Categories",
        data: {
            categories:data
        }
    })
    }
    catch (error) {
        console.log(error);
        res.status(400).send({
            status: "Failed",
            message: "Server error, can't show all Categories"
        })
    }
}
