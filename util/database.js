const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root','Aryan@123', {dialect:'mysql',
 host:'localhost'});

module.exports = sequelize;

// Sequelize Command CS

// To update
// Model.update(
//     { column1: 'new value' },
//     { where: { id: 1 } } // specify the condition
//   ).then(result => {
//     console.log('Record updated successfully:', result);
//   }).catch(error => {
//     console.error('Error updating record:', error);
//   });


//   To Delete
// Model.destroy({
//   where: { id: 1 } // specify the condition
// }).then(result => {
//   console.log('Record deleted successfully:', result);
// }).catch(error => {
//   console.error('Error deleting record:', error);
// });


// To add some data
// Model.create({
//   column1: 'value1',
//   column2: 'value2',
//   // ... other columns
// }).then(newRecord => {
//   console.log('New record created:', newRecord);
// }).catch(error => {
//   console.error('Error creating record:', error);
// });


// To Retrieve Data
// Model.findAll().then(records => {
//     console.log('All records:', records);
//   }).catch(error => {
//     console.error('Error retrieving records:', error);
//   });


// To find by id
// Model.findByPk(recordId)
//   .then(record => {
//     if (record) {
//       console.log('Found record by ID:', record);
//     } else {
//       console.log('Record not found.');
//     }
//   })
//   .catch(error => {
//     console.error('Error finding record by ID:', error);
//   });