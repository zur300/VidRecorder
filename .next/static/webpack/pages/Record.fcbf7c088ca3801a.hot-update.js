"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Record",{

/***/ "./pages/api/S3APIs.js":
/*!*****************************!*\
  !*** ./pages/api/S3APIs.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; },\n/* harmony export */   \"getUrlsList\": function() { return /* binding */ getUrlsList; },\n/* harmony export */   \"uploadData\": function() { return /* binding */ uploadData; }\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"./node_modules/aws-sdk/lib/browser.js\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"?a09d\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts */ \"./pages/consts.ts\");\n\n\n\nconst s3Client = new (aws_sdk__WEBPACK_IMPORTED_MODULE_0___default().S3)({\n    endpoint: _consts__WEBPACK_IMPORTED_MODULE_2__.DO_SPACES_URL,\n    region: \"nyc3\",\n    credentials: {\n        accessKeyId: _consts__WEBPACK_IMPORTED_MODULE_2__.DO_SPACES_ID,\n        secretAccessKey: _consts__WEBPACK_IMPORTED_MODULE_2__.DO_SPACES_SECRET\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst getUrlsList = async ()=>{\n    return s3Client.listObjectsV2({\n        Bucket: _consts__WEBPACK_IMPORTED_MODULE_2__.DO_SPACES_BUCKET,\n        MaxKeys: 10\n    }).promise().then((data)=>{\n        const urls = [];\n        data.Contents.map((file)=>{\n            const fileKey = file.Key;\n            const fileUrl = _consts__WEBPACK_IMPORTED_MODULE_2__.BUCKET_URL + encodeURIComponent(fileKey);\n            urls.push(fileUrl);\n        });\n        return urls;\n    }).catch((err)=>{\n        console.log(err);\n    });\n};\nconst uploadData = async ()=>{\n    console.log((fs__WEBPACK_IMPORTED_MODULE_1___default().createReadStream));\n    const body = await fs__WEBPACK_IMPORTED_MODULE_1___default().createReadStream(\"C:/Users/Yoga/Desktop/abilisense/abilisense/pages/api/newQ.mp3\");\n    console.log(body);\n    return s3Client.putObject({\n        Bucket: _consts__WEBPACK_IMPORTED_MODULE_2__.DO_SPACES_BUCKET,\n        Key: \"files.demo.originalFilename\",\n        Body: body,\n        ACL: \"public-read\"\n    }).promise().then(()=>{\n        res.status(200).send(\"file-uplaoded\");\n    }).catch((err)=>{\n        console.log(err);\n    });\n}; // return s3Client.putObject(\n //   {\n //     Bucket: DO_SPACES_BUCKET,\n //     Key: files.demo.originalFilename,\n //     Body: fs.createReadStream(\n //       \"C:/Users/Yoga/Desktop/abilisense/abilisense/pages/api/newQ.mp3\"\n //     ),\n //     ACL: \"public-read\",\n //   },\n //   async () => res.status(200).send(\"file-uplaoded\")\n // );\n // return s3Client.getObject(\n //   {\n //     Bucket: process.env.DO_SPACES_BUCKET,\n //     // Key: files.demo.originalFilename,\n //     Key: \"newQ\",\n //     // Body: fs.createReadStream(\n //     //   \"C:/Users/Yoga/Desktop/abilisense/abilisense/pages/api/newQ.mp3\"\n //     // ),\n //     // ACL: \"public-read\",\n //   },\n //   async (err, data) => {\n //     res.status(205).send(\"file-dowloaded\");\n //     console.log(data);\n //   }\n // );\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvUzNBUElzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ047QUFRRDtBQUVuQixNQUFNTyxXQUFXLElBQUlQLG1EQUFNLENBQUM7SUFDMUJTLFVBQVVILGtEQUFhQTtJQUN2QkksUUFBUTtJQUNSQyxhQUFhO1FBQ1hDLGFBQWFSLGlEQUFZQTtRQUN6QlMsaUJBQWlCUixxREFBZ0JBO0lBQ25DO0FBQ0Y7QUFFTyxNQUFNUyxTQUFTO0lBQ3BCQyxLQUFLO1FBQ0hDLFlBQVksS0FBSztJQUNuQjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxjQUFjLFVBQVk7SUFDckMsT0FBT1YsU0FDSlcsYUFBYSxDQUFDO1FBQ2JDLFFBQVFoQixxREFBZ0JBO1FBQ3hCaUIsU0FBUztJQUNYLEdBQ0NDLE9BQU8sR0FDUEMsSUFBSSxDQUFDLENBQUNDLE9BQVM7UUFDZCxNQUFNQyxPQUFPLEVBQUU7UUFDZkQsS0FBS0UsUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBUztZQUMxQixNQUFNQyxVQUFVRCxLQUFLRSxHQUFHO1lBQ3hCLE1BQU1DLFVBQVU1QiwrQ0FBVUEsR0FBRzZCLG1CQUFtQkg7WUFDaERKLEtBQUtRLElBQUksQ0FBQ0Y7UUFDWjtRQUNBLE9BQU9OO0lBQ1QsR0FDQ1MsS0FBSyxDQUFDLENBQUNDLE1BQVE7UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0FBQ0osRUFBRTtBQUVLLE1BQU1HLGFBQWEsVUFBWTtJQUNwQ0YsUUFBUUMsR0FBRyxDQUFDbkMsNERBQW1CO0lBQy9CLE1BQU1zQyxPQUFPLE1BQU10QywwREFBbUIsQ0FDcEM7SUFHRmtDLFFBQVFDLEdBQUcsQ0FBQ0c7SUFDWixPQUFPaEMsU0FDSmlDLFNBQVMsQ0FBQztRQUNUckIsUUFBUWhCLHFEQUFnQkE7UUFDeEIwQixLQUFLO1FBQ0xZLE1BQU1GO1FBQ05HLEtBQUs7SUFDUCxHQUNDckIsT0FBTyxHQUNQQyxJQUFJLENBQUMsSUFBTTtRQUNWcUIsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztJQUN2QixHQUNDWixLQUFLLENBQUMsQ0FBQ0MsTUFBUTtRQUNkQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2Q7QUFDSixFQUFFLENBRUYsNkJBQTZCO0NBQzdCLE1BQU07Q0FDTixnQ0FBZ0M7Q0FDaEMsd0NBQXdDO0NBQ3hDLGlDQUFpQztDQUNqQyx5RUFBeUU7Q0FDekUsU0FBUztDQUNULDBCQUEwQjtDQUMxQixPQUFPO0NBQ1Asc0RBQXNEO0NBQ3RELEtBQUs7Q0FFTCw2QkFBNkI7Q0FDN0IsTUFBTTtDQUNOLDRDQUE0QztDQUM1QywyQ0FBMkM7Q0FDM0MsbUJBQW1CO0NBQ25CLG9DQUFvQztDQUNwQyw0RUFBNEU7Q0FDNUUsWUFBWTtDQUNaLDZCQUE2QjtDQUM3QixPQUFPO0NBQ1AsMkJBQTJCO0NBQzNCLDhDQUE4QztDQUM5Qyx5QkFBeUI7Q0FDekIsTUFBTTtDQUNOLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL1MzQVBJcy5qcz83ZDZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBV1MgZnJvbSBcImF3cy1zZGtcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuaW1wb3J0IHtcbiAgQlVDS0VUX1VSTCxcbiAgRE9fU1BBQ0VTX0JVQ0tFVCxcbiAgRE9fU1BBQ0VTX0lELFxuICBET19TUEFDRVNfU0VDUkVULFxuICBET19TUEFDRVNfVVJMLFxufSBmcm9tIFwiLi4vY29uc3RzXCI7XG5cbmNvbnN0IHMzQ2xpZW50ID0gbmV3IEFXUy5TMyh7XG4gIGVuZHBvaW50OiBET19TUEFDRVNfVVJMLFxuICByZWdpb246IFwibnljM1wiLFxuICBjcmVkZW50aWFsczoge1xuICAgIGFjY2Vzc0tleUlkOiBET19TUEFDRVNfSUQsXG4gICAgc2VjcmV0QWNjZXNzS2V5OiBET19TUEFDRVNfU0VDUkVULFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGdldFVybHNMaXN0ID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gczNDbGllbnRcbiAgICAubGlzdE9iamVjdHNWMih7XG4gICAgICBCdWNrZXQ6IERPX1NQQUNFU19CVUNLRVQsXG4gICAgICBNYXhLZXlzOiAxMCxcbiAgICB9KVxuICAgIC5wcm9taXNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdXJscyA9IFtdO1xuICAgICAgZGF0YS5Db250ZW50cy5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUtleSA9IGZpbGUuS2V5O1xuICAgICAgICBjb25zdCBmaWxlVXJsID0gQlVDS0VUX1VSTCArIGVuY29kZVVSSUNvbXBvbmVudChmaWxlS2V5KTtcbiAgICAgICAgdXJscy5wdXNoKGZpbGVVcmwpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdXJscztcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGZzLmNyZWF0ZVJlYWRTdHJlYW0pO1xuICBjb25zdCBib2R5ID0gYXdhaXQgZnMuY3JlYXRlUmVhZFN0cmVhbShcbiAgICBcIkM6L1VzZXJzL1lvZ2EvRGVza3RvcC9hYmlsaXNlbnNlL2FiaWxpc2Vuc2UvcGFnZXMvYXBpL25ld1EubXAzXCJcbiAgKTtcblxuICBjb25zb2xlLmxvZyhib2R5KTtcbiAgcmV0dXJuIHMzQ2xpZW50XG4gICAgLnB1dE9iamVjdCh7XG4gICAgICBCdWNrZXQ6IERPX1NQQUNFU19CVUNLRVQsXG4gICAgICBLZXk6IFwiZmlsZXMuZGVtby5vcmlnaW5hbEZpbGVuYW1lXCIsXG4gICAgICBCb2R5OiBib2R5LFxuICAgICAgQUNMOiBcInB1YmxpYy1yZWFkXCIsXG4gICAgfSlcbiAgICAucHJvbWlzZSgpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoXCJmaWxlLXVwbGFvZGVkXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG59O1xuXG4vLyByZXR1cm4gczNDbGllbnQucHV0T2JqZWN0KFxuLy8gICB7XG4vLyAgICAgQnVja2V0OiBET19TUEFDRVNfQlVDS0VULFxuLy8gICAgIEtleTogZmlsZXMuZGVtby5vcmlnaW5hbEZpbGVuYW1lLFxuLy8gICAgIEJvZHk6IGZzLmNyZWF0ZVJlYWRTdHJlYW0oXG4vLyAgICAgICBcIkM6L1VzZXJzL1lvZ2EvRGVza3RvcC9hYmlsaXNlbnNlL2FiaWxpc2Vuc2UvcGFnZXMvYXBpL25ld1EubXAzXCJcbi8vICAgICApLFxuLy8gICAgIEFDTDogXCJwdWJsaWMtcmVhZFwiLFxuLy8gICB9LFxuLy8gICBhc3luYyAoKSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZChcImZpbGUtdXBsYW9kZWRcIilcbi8vICk7XG5cbi8vIHJldHVybiBzM0NsaWVudC5nZXRPYmplY3QoXG4vLyAgIHtcbi8vICAgICBCdWNrZXQ6IHByb2Nlc3MuZW52LkRPX1NQQUNFU19CVUNLRVQsXG4vLyAgICAgLy8gS2V5OiBmaWxlcy5kZW1vLm9yaWdpbmFsRmlsZW5hbWUsXG4vLyAgICAgS2V5OiBcIm5ld1FcIixcbi8vICAgICAvLyBCb2R5OiBmcy5jcmVhdGVSZWFkU3RyZWFtKFxuLy8gICAgIC8vICAgXCJDOi9Vc2Vycy9Zb2dhL0Rlc2t0b3AvYWJpbGlzZW5zZS9hYmlsaXNlbnNlL3BhZ2VzL2FwaS9uZXdRLm1wM1wiXG4vLyAgICAgLy8gKSxcbi8vICAgICAvLyBBQ0w6IFwicHVibGljLXJlYWRcIixcbi8vICAgfSxcbi8vICAgYXN5bmMgKGVyciwgZGF0YSkgPT4ge1xuLy8gICAgIHJlcy5zdGF0dXMoMjA1KS5zZW5kKFwiZmlsZS1kb3dsb2FkZWRcIik7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgIH1cbi8vICk7XG4iXSwibmFtZXMiOlsiQVdTIiwiZnMiLCJCVUNLRVRfVVJMIiwiRE9fU1BBQ0VTX0JVQ0tFVCIsIkRPX1NQQUNFU19JRCIsIkRPX1NQQUNFU19TRUNSRVQiLCJET19TUEFDRVNfVVJMIiwiczNDbGllbnQiLCJTMyIsImVuZHBvaW50IiwicmVnaW9uIiwiY3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsInNlY3JldEFjY2Vzc0tleSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJnZXRVcmxzTGlzdCIsImxpc3RPYmplY3RzVjIiLCJCdWNrZXQiLCJNYXhLZXlzIiwicHJvbWlzZSIsInRoZW4iLCJkYXRhIiwidXJscyIsIkNvbnRlbnRzIiwibWFwIiwiZmlsZSIsImZpbGVLZXkiLCJLZXkiLCJmaWxlVXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicHVzaCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVwbG9hZERhdGEiLCJjcmVhdGVSZWFkU3RyZWFtIiwiYm9keSIsInB1dE9iamVjdCIsIkJvZHkiLCJBQ0wiLCJyZXMiLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/S3APIs.js\n"));

/***/ })

});