const mongoose = require("mongoose");
const { on } = require("nodemon");

const schema = mongoose.schema(
    {
        name: {
            type: String,
            require: [true, "Contact name is require"],
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        address: String,
        phone: String,
        favorite: Boolean,
    },
    {timestamps: true}
);

//Replace _id with id and remove __V
schema.method("toJSON", function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model("contact", schema0);
