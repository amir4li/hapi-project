const tourController = require("./../controller/tourController");
const tourSchema = require("./../validator/tourSchema");

module.exports = [
    {
        method: "GET",
        path: "/api/v1/tours/",
        handler: tourController.getAllTours,
        options: {
            auth: false
        }
    },
    {
        method: "GET",
        path: "/api/v1/tours/{id}",
        handler: tourController.getTour,
        options: {
            auth: false
        }
    },
    {
        method: "POST",
        path: "/api/v1/tours/",
        handler: tourController.createTour,
        options: {
            validate: {
                validate: tourSchema
            },
            auth: false
        }
    }
]

