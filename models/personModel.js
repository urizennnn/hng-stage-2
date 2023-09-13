const mongoose = require('mongoose');

// Define a custom validator function
const nameValidator = (value) => {
    // Use a regular expression to check if the value contains only letters and spaces
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(value);
};

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Make the "name" field required
        
    }
});

module.exports = mongoose.model('Person', personSchema);
