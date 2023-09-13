require('../models/database')
const Person = require('../models/personModel');

// CREATE - Add a new person
exports.createPerson = async (req, res) => {
    try {
        const { name } = req.body;
        const existing = await Person.findOne({ name }); 

        if (existing) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        if(typeof name !== 'string'){
            return res.status(404).json({msg:'Name must be a string'})
        }
        const newPerson = await Person.create({ name });
        res.status(201).json(newPerson);
    } catch (err) {
        console.error('Error saving person to the database', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// READ - Fetch details of a person by ID
exports.getPersonById = async (req, res) => {
    try {
        const personId = req.params.id;
        const person = await Person.findById(personId);
        if (!person) {
            res.status(404).json({ error: 'Person not found' });
            return;
        }
        res.json(person);
    } catch (err) {
        console.error('Error fetching person from the database', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getAll = async(req,res)=>{
    try{
        const user = await Person.find({})
        res.status(200).json({user})
    }catch (err){
res.status(404).json({err:"Error"})
    }
}
// UPDATE - Modify details of an existing person by ID
exports.updatePerson = async (req, res) => {
    try {
        const personId = req.params.id;
        const { name } = req.body;
        const updatedPerson = await Person.findByIdAndUpdate(
            personId,
            { name },
            { new: true }
        );
        if (!updatedPerson) {
            res.status(404).json({ error: 'Person not found' });
            return;
        }
        res.json(updatedPerson);
    } catch (err) {
        console.error('Error updating person in the database', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// DELETE - Remove a person by ID
exports.deletePerson = async (req, res) => {
    try {
        const personId = req.params.id;
        const deletedPerson = await Person.findByIdAndRemove(personId);
        if (!deletedPerson) {
            res.status(404).json({ error: 'Person not found' });
            return;
        }
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting person from the database', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};