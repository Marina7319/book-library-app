// var userModel = require('./userModel');
// var bookModel = require('./bookModel');
// var jwt = require('jsonwebtoken');

// // module.exports.getBookFromDBService = () => { 
// //     return new Promise(function checkURL(resolve, reject) {
// //         bookModel.find({}, function returnData(error, result) {
// //             if(error) { 
// //                 reject(false);
// //             } else { 
// //                 resolve(result);
// //             }
// //         });
// //     });
// // }

// // module.exports.getDataFromDBService = () => { 
// //     return new Promise(function checkURL(resolve, reject) {
// //         userModel.find({}, function returnData(error, result) {
// //             if(error) { 
// //                 reject(false);
// //             } else { 
// //                 resolve(result);
// //             }
// //         });
// //     });
// // }


// // module.exports.createUserDBService =  (userDetails) => { 
// //     return new Promise(async function myFn(resolve, reject) {
// //         var userModelData = new userModel();

// //         userModelData.firstname = userDetails.firstname;
// //         userModelData.lastname = userDetails.lastname;
// //         userModelData.email = userDetails.email;
// //         userModelData.password = userDetails.password;
// //       //  var encrypted = encryptor.encrypt(userDetails.password);
// //         //userModelData.password = encrypted;
        

// //         userModelData.save(function resultHandle(error, result) { 
// //             if(error) { 
// //                 reject(false);
// //             } else {
// //                 resolve(true);
// //             }
// //         });
    

// //     })
// // }

// // module.exports.loginuserDBService = (userDetails) => {
// //     return new Promise(function myFn(resolve, reject) {
// //         userModel.findOne({ email: userDetails.email}, function getresult(errorvalue, result){
// //             if(errorvalue) {
// //                 reject({status: false, msg: "Invalid Data"});
// //             } else {
// //                 if(result != undefined && result != null) 
// //                 {
// //                   //  var decrypted = encryptor.decrypt(result.password);

// //                     if(result.password == userDetails.password)
// //                     {
// //                         resolve({status: true, msg: "User Validated Successfully"});
// //                     } else {
// //                         reject({status: false, msg: "User Validated failed"});
// //                     }
// //                 } else {
// //                     reject({status: false, msg: "Invalid User Details"});
// //                 }
// //             }
// //         });
// //     });
// // }


// // module.exports.createBookDBService = (bookDetails) => { 
// //     return new Promise(function myFn(resolve, reject) {
// //         var bookModelData = new bookModel();

// //         bookModelData.title = bookDetails.title;
// //         bookModelData.writer = bookDetails.writer;
// //         bookModelData.genre = bookDetails.genre;


// //         bookModelData.save(function resultHandle(error, result) { 
// //             if(error) { 
// //                 reject(false);
// //             } else {
// //                 resolve(true);
// //             }
// //         });
// //     })
// // }


// module.exports.updateBookDBService = (title, bookDetails) => {
//     var findOne = bookModel.findOne({title: req.params.title});
// var findAll = bookModel.find({});

// Promise.all([findOne, findAll]).then(book => { 
//   console.log(book); // articles[0] contains findOne result, articles[1] findAll
// }, reason => {
//   console.log(reason)    // if one of the promises rejected
// });
//     // console.log(bookDetails);
//     // return new Promise(function myFn(resolve, reject) {
//     //     bookModel.findOne(id, bookDetails, function returnData(error, result) {
//     //         if(error) 
//     //         {
//     //             reject(false);
//     //         }
//     //         else 
//     //         {
//     //             resolve(result);
//     //         }
//     //     });
//     // });
// }


// module.exports.removeBookDbService = (id) => {
//     return new Promise(function myFn(resolve, reject) {
//         bookModel.findByIdAndDelete(id, function returnData(error, result) {
//             if(error) 
//             {
//                 reject(false);
//             }
//             else 
//             {
//                 resolve(result);
//             }
//         });
//     });
// }
