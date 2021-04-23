module.exports = {
    multipleMongoosesToObject: (mongooses) => mongooses.map(mongoose => mongoose.toObject()),
    mongoToObject: (mongoose) => mongoose ? mongoose.toObject() : mongoose
}