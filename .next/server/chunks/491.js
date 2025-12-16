"use strict";
exports.id = 491;
exports.ids = [491];
exports.modules = {

/***/ 8491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1656);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9926);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__, zod__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__, zod__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const schema = zod__WEBPACK_IMPORTED_MODULE_3__.object({
  name: zod__WEBPACK_IMPORTED_MODULE_3__.string().min(1, {
    message: "Full Name is required"
  }),
  email: zod__WEBPACK_IMPORTED_MODULE_3__.string().email({
    message: "Invalid email address"
  }),
  phone: zod__WEBPACK_IMPORTED_MODULE_3__.string().min(10, {
    message: "Phone number must be at least 10 digits"
  }).regex(/^\d+$/, {
    message: "Phone number must contain only digits"
  }),
  message: zod__WEBPACK_IMPORTED_MODULE_3__.string().optional()
});

const AppointmentForm = () => {
  const [isSubmitted, setIsSubmitted] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(schema)
  });

  const onSubmit = data => {
    setIsSubmitted(true);
    console.log(data);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000); // Hide after 5 seconds
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "section-gap",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "appointment-form-two",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "form-wrap",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "section-heading mb-40",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "tagline",
              children: "Make an Appointment"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
              className: "title",
              children: "Make an Appointment to Doctor Visit"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("form", {
            onSubmit: handleSubmit(onSubmit),
            action: "#",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "input-field wow fadeInLeft",
                  "data-wow-delay": "0.3s",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({
                    type: "text",
                    placeholder: "Your Full Name"
                  }, register("name")), {}, {
                    style: {
                      borderColor: errors.name ? "red" : ""
                    }
                  })), errors.name && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    style: {
                      color: "red",
                      fontSize: "12px"
                    },
                    children: errors.name.message
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "input-field wow fadeInLeft",
                  "data-wow-delay": "0.4s",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({
                    type: "email",
                    placeholder: "Email Address"
                  }, register("email")), {}, {
                    style: {
                      borderColor: errors.email ? "red" : ""
                    }
                  })), errors.email && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    style: {
                      color: "red",
                      fontSize: "12px"
                    },
                    children: errors.email.message
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "input-field wow fadeInLeft",
                  "data-wow-delay": "0.5s",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({
                    type: "text",
                    placeholder: "Phone Number"
                  }, register("phone")), {}, {
                    style: {
                      borderColor: errors.phone ? "red" : ""
                    }
                  })), errors.phone && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    style: {
                      color: "red",
                      fontSize: "12px"
                    },
                    children: errors.phone.message
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "input-field wow fadeInLeft",
                  "data-wow-delay": "0.6s",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("textarea", _objectSpread({
                    placeholder: "Write Message"
                  }, register("message")))
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "input-field wow fadeInLeft",
                  "data-wow-delay": "0.7s",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                    type: "submit",
                    className: "template-btn",
                    children: "Submit"
                  }), isSubmitted && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "alert alert-success mt-3",
                    role: "alert",
                    children: "Appointment request submitted successfully!"
                  })]
                })
              })]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "appointment-image",
          style: {
            backgroundImage: "url(assets/img/contact_form.webp)"
          }
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppointmentForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;