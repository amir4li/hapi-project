const Tour = require("./../models/tourModel");

exports.getAllTours = async (reqest, h) => {
    try {
        const tours = await Tour.find();

    const data = {
        status: "success",           
        results: tours.length,
        data: {
            tours
        }
    }

    return h.response(data).code(200);

    } catch (err) {
        console.log(err);
    }
};


exports.getTour = async (request, h) => {
    try {
        const tour = await Tour.findById(request.params.id)

        const data = {
            status: "success",
            data: {
                tour
            }
        };

        return h.response(data).code(200);

    } catch(err) {
        console.log(err)
    }
};

exports.createTour = async (request, h) => {
    try {
        const payload = request.payload;
        const newTour = await Tour.create(payload);

        responseObj = {
            status: "success",
            data: {
                payload
            }
        };

        return h.response(responseObj).code(201)

    } catch (err) {
        console.log(err)
    }
    
};


