"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/S3APIs";
exports.ids = ["pages/api/S3APIs"];
exports.modules = {

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "xml2js":
/*!*************************!*\
  !*** external "xml2js" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("xml2js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/S3APIs.js":
/*!*****************************!*\
  !*** ./pages/api/S3APIs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ Hanlder)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xml2js */ \"xml2js\");\n/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst xml = '<ListBucketResult xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\"><Name>itay-audios</Name></ListBucketResult>';\nconst s3Client = new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().S3)({\n    endpoint: process.env.DO_SPACES_URL,\n    region: \"nyc3\",\n    credentials: {\n        accessKeyId: process.env.DO_SPACES_ID,\n        secretAccessKey: process.env.DO_SPACES_SECRET\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function Hanlder(req, res) {\n    const form = formidable__WEBPACK_IMPORTED_MODULE_2___default()();\n    form.parse(req, async (err, fields, files)=>{\n        console.log(files.demo.filepath);\n        if (!files.demo) {\n            res.status(400).send(\"no file uploaded\");\n            return;\n        }\n        try {\n            // return s3Client.putObject(\n            //   {\n            //     Bucket: process.env.DO_SPACES_BUCKET,\n            //     // Key: files.demo.originalFilename,\n            //     Key: \"newQ\",\n            //     Body: fs.createReadStream(\n            //       \"C:/Users/Yoga/Desktop/abilisense/abilisense/pages/api/newQ.mp3\"\n            //     ),\n            //     ACL: \"public-read\",\n            //   },\n            //   async () => res.status(205).send(\"file-uplaoded\")\n            // );\n            // return s3Client.getObject(\n            //   {\n            //     Bucket: process.env.DO_SPACES_BUCKET,\n            //     // Key: files.demo.originalFilename,\n            //     Key: \"newQ\",\n            //     // Body: fs.createReadStream(\n            //     //   \"C:/Users/Yoga/Desktop/abilisense/abilisense/pages/api/newQ.mp3\"\n            //     // ),\n            //     // ACL: \"public-read\",\n            //   },\n            //   async (err, data) => {\n            //     res.status(205).send(\"file-dowloaded\");\n            //     console.log(data);\n            //   }\n            // );\n            return s3Client.listObjectsV2({\n                Bucket: process.env.DO_SPACES_BUCKET,\n                MaxKeys: 6\n            }, async (err, data)=>{\n                res.status(205).send(\"file-uplaoded\");\n                console.log(data?.Contents);\n            // xml2js.parseString(data, function (err, result) {\n            //   if (err) {\n            //     console.log(\"ERROR: \" + err);\n            //     return;\n            //   }\n            //   fs.readFile(result, function (err, data) {\n            //     var doc = new xmldoc.XmlDocument(data);\n            //     console.log(doc);\n            //   });\n            // });\n            // console.log(JSON.stringify(data));\n            });\n        } catch (e) {\n            console.log(e);\n            res.status(500).send(\"Error uploading file\");\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvUzNBUElzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0I7QUFDTTtBQUNVO0FBQ1I7QUFFNUIsTUFBTUksTUFDSjtBQUVGLE1BQU1DLFdBQVcsSUFBSUosbURBQU0sQ0FBQztJQUMxQk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxhQUFhO0lBQ25DQyxRQUFRO0lBQ1JDLGFBQWE7UUFDWEMsYUFBYUwsUUFBUUMsR0FBRyxDQUFDSyxZQUFZO1FBQ3JDQyxpQkFBaUJQLFFBQVFDLEdBQUcsQ0FBQ08sZ0JBQWdCO0lBQy9DO0FBQ0Y7QUFFTyxNQUFNQyxTQUFTO0lBQ3BCQyxLQUFLO1FBQ0hDLFlBQVksS0FBSztJQUNuQjtBQUNGLEVBQUU7QUFFYSxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxPQUFPckIsaURBQVVBO0lBQ3ZCcUIsS0FBS0MsS0FBSyxDQUFDSCxLQUFLLE9BQU9JLEtBQUtDLFFBQVFDLFFBQVU7UUFDNUNDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsSUFBSSxDQUFDQyxRQUFRO1FBQy9CLElBQUksQ0FBQ0osTUFBTUcsSUFBSSxFQUFFO1lBQ2ZSLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDckI7UUFDRixDQUFDO1FBQ0QsSUFBSTtZQUNGLDZCQUE2QjtZQUM3QixNQUFNO1lBQ04sNENBQTRDO1lBQzVDLDJDQUEyQztZQUMzQyxtQkFBbUI7WUFDbkIsaUNBQWlDO1lBQ2pDLHlFQUF5RTtZQUN6RSxTQUFTO1lBQ1QsMEJBQTBCO1lBQzFCLE9BQU87WUFDUCxzREFBc0Q7WUFDdEQsS0FBSztZQUVMLDZCQUE2QjtZQUM3QixNQUFNO1lBQ04sNENBQTRDO1lBQzVDLDJDQUEyQztZQUMzQyxtQkFBbUI7WUFDbkIsb0NBQW9DO1lBQ3BDLDRFQUE0RTtZQUM1RSxZQUFZO1lBQ1osNkJBQTZCO1lBQzdCLE9BQU87WUFDUCwyQkFBMkI7WUFDM0IsOENBQThDO1lBQzlDLHlCQUF5QjtZQUN6QixNQUFNO1lBQ04sS0FBSztZQUVMLE9BQU81QixTQUFTNkIsYUFBYSxDQUMzQjtnQkFDRUMsUUFBUTNCLFFBQVFDLEdBQUcsQ0FBQzJCLGdCQUFnQjtnQkFDcENDLFNBQVM7WUFPWCxHQUNBLE9BQU9aLEtBQUthLE9BQVM7Z0JBQ25CaEIsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDckJMLFFBQVFDLEdBQUcsQ0FBQ1MsTUFBTUM7WUFFbEIsb0RBQW9EO1lBQ3BELGVBQWU7WUFDZixvQ0FBb0M7WUFDcEMsY0FBYztZQUNkLE1BQU07WUFDTiwrQ0FBK0M7WUFDL0MsOENBQThDO1lBQzlDLHdCQUF3QjtZQUN4QixRQUFRO1lBRVIsTUFBTTtZQUNOLHFDQUFxQztZQUN2QztRQUVKLEVBQUUsT0FBT0MsR0FBRztZQUNWWixRQUFRQyxHQUFHLENBQUNXO1lBQ1psQixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ3ZCO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJpbGlzZW5zZS8uL3BhZ2VzL2FwaS9TM0FQSXMuanM/N2Q2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBBV1MgZnJvbSBcImF3cy1zZGtcIjtcclxuaW1wb3J0IGZvcm1pZGFibGUgZnJvbSBcImZvcm1pZGFibGVcIjtcclxuaW1wb3J0IHhtbDJqcyBmcm9tIFwieG1sMmpzXCI7XHJcblxyXG5jb25zdCB4bWwgPVxyXG4gICc8TGlzdEJ1Y2tldFJlc3VsdCB4bWxucz1cImh0dHA6Ly9zMy5hbWF6b25hd3MuY29tL2RvYy8yMDA2LTAzLTAxL1wiPjxOYW1lPml0YXktYXVkaW9zPC9OYW1lPjwvTGlzdEJ1Y2tldFJlc3VsdD4nO1xyXG5cclxuY29uc3QgczNDbGllbnQgPSBuZXcgQVdTLlMzKHtcclxuICBlbmRwb2ludDogcHJvY2Vzcy5lbnYuRE9fU1BBQ0VTX1VSTCxcclxuICByZWdpb246IFwibnljM1wiLFxyXG4gIGNyZWRlbnRpYWxzOiB7XHJcbiAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuRE9fU1BBQ0VTX0lELFxyXG4gICAgc2VjcmV0QWNjZXNzS2V5OiBwcm9jZXNzLmVudi5ET19TUEFDRVNfU0VDUkVULFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBIYW5sZGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgZm9ybSA9IGZvcm1pZGFibGUoKTtcclxuICBmb3JtLnBhcnNlKHJlcSwgYXN5bmMgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZmlsZXMuZGVtby5maWxlcGF0aCk7XHJcbiAgICBpZiAoIWZpbGVzLmRlbW8pIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJubyBmaWxlIHVwbG9hZGVkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyByZXR1cm4gczNDbGllbnQucHV0T2JqZWN0KFxyXG4gICAgICAvLyAgIHtcclxuICAgICAgLy8gICAgIEJ1Y2tldDogcHJvY2Vzcy5lbnYuRE9fU1BBQ0VTX0JVQ0tFVCxcclxuICAgICAgLy8gICAgIC8vIEtleTogZmlsZXMuZGVtby5vcmlnaW5hbEZpbGVuYW1lLFxyXG4gICAgICAvLyAgICAgS2V5OiBcIm5ld1FcIixcclxuICAgICAgLy8gICAgIEJvZHk6IGZzLmNyZWF0ZVJlYWRTdHJlYW0oXHJcbiAgICAgIC8vICAgICAgIFwiQzovVXNlcnMvWW9nYS9EZXNrdG9wL2FiaWxpc2Vuc2UvYWJpbGlzZW5zZS9wYWdlcy9hcGkvbmV3US5tcDNcIlxyXG4gICAgICAvLyAgICAgKSxcclxuICAgICAgLy8gICAgIEFDTDogXCJwdWJsaWMtcmVhZFwiLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgYXN5bmMgKCkgPT4gcmVzLnN0YXR1cygyMDUpLnNlbmQoXCJmaWxlLXVwbGFvZGVkXCIpXHJcbiAgICAgIC8vICk7XHJcblxyXG4gICAgICAvLyByZXR1cm4gczNDbGllbnQuZ2V0T2JqZWN0KFxyXG4gICAgICAvLyAgIHtcclxuICAgICAgLy8gICAgIEJ1Y2tldDogcHJvY2Vzcy5lbnYuRE9fU1BBQ0VTX0JVQ0tFVCxcclxuICAgICAgLy8gICAgIC8vIEtleTogZmlsZXMuZGVtby5vcmlnaW5hbEZpbGVuYW1lLFxyXG4gICAgICAvLyAgICAgS2V5OiBcIm5ld1FcIixcclxuICAgICAgLy8gICAgIC8vIEJvZHk6IGZzLmNyZWF0ZVJlYWRTdHJlYW0oXHJcbiAgICAgIC8vICAgICAvLyAgIFwiQzovVXNlcnMvWW9nYS9EZXNrdG9wL2FiaWxpc2Vuc2UvYWJpbGlzZW5zZS9wYWdlcy9hcGkvbmV3US5tcDNcIlxyXG4gICAgICAvLyAgICAgLy8gKSxcclxuICAgICAgLy8gICAgIC8vIEFDTDogXCJwdWJsaWMtcmVhZFwiLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgYXN5bmMgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAvLyAgICAgcmVzLnN0YXR1cygyMDUpLnNlbmQoXCJmaWxlLWRvd2xvYWRlZFwiKTtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gKTtcclxuXHJcbiAgICAgIHJldHVybiBzM0NsaWVudC5saXN0T2JqZWN0c1YyKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIEJ1Y2tldDogcHJvY2Vzcy5lbnYuRE9fU1BBQ0VTX0JVQ0tFVCxcclxuICAgICAgICAgIE1heEtleXM6IDYsXHJcbiAgICAgICAgICAvLyBLZXk6IGZpbGVzLmRlbW8ub3JpZ2luYWxGaWxlbmFtZSxcclxuICAgICAgICAgIC8vIEtleTogXCJuZXdRXCIsXHJcbiAgICAgICAgICAvLyBCb2R5OiBmcy5jcmVhdGVSZWFkU3RyZWFtKFxyXG4gICAgICAgICAgLy8gICBcIkM6L1VzZXJzL1lvZ2EvRGVza3RvcC9hYmlsaXNlbnNlL2FiaWxpc2Vuc2UvcGFnZXMvYXBpL25ld1EubXAzXCJcclxuICAgICAgICAgIC8vICksXHJcbiAgICAgICAgICAvLyBBQ0w6IFwicHVibGljLXJlYWRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjA1KS5zZW5kKFwiZmlsZS11cGxhb2RlZFwiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGE/LkNvbnRlbnRzKTtcclxuXHJcbiAgICAgICAgICAvLyB4bWwyanMucGFyc2VTdHJpbmcoZGF0YSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XHJcbiAgICAgICAgICAvLyAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiArIGVycik7XHJcbiAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAvLyAgIGZzLnJlYWRGaWxlKHJlc3VsdCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgICAgICAgLy8gICAgIHZhciBkb2MgPSBuZXcgeG1sZG9jLlhtbERvY3VtZW50KGRhdGEpO1xyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRvYyk7XHJcbiAgICAgICAgICAvLyAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRXJyb3IgdXBsb2FkaW5nIGZpbGVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwiQVdTIiwiZm9ybWlkYWJsZSIsInhtbDJqcyIsInhtbCIsInMzQ2xpZW50IiwiUzMiLCJlbmRwb2ludCIsInByb2Nlc3MiLCJlbnYiLCJET19TUEFDRVNfVVJMIiwicmVnaW9uIiwiY3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsIkRPX1NQQUNFU19JRCIsInNlY3JldEFjY2Vzc0tleSIsIkRPX1NQQUNFU19TRUNSRVQiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiSGFubGRlciIsInJlcSIsInJlcyIsImZvcm0iLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImRlbW8iLCJmaWxlcGF0aCIsInN0YXR1cyIsInNlbmQiLCJsaXN0T2JqZWN0c1YyIiwiQnVja2V0IiwiRE9fU1BBQ0VTX0JVQ0tFVCIsIk1heEtleXMiLCJkYXRhIiwiQ29udGVudHMiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/S3APIs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/S3APIs.js"));
module.exports = __webpack_exports__;

})();