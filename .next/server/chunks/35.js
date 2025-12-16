"use strict";
exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 9796:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const ScrollTop = () => {
  useEffect(() => {
    scrollTopFun();
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/_jsx("a", {
    className: "back-to-top",
    href: "#",
    id: "scroll-top",
    onClick: () => onClick(),
    children: /*#__PURE__*/_jsx("i", {
      className: "far fa-angle-up"
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ScrollTop)));

/***/ }),

/***/ 4347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


/* eslint-disable react/no-unknown-property */





const WhatsAppChat = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
      href: "https://wa.me/917010768196",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "jsx-3690235106" + " " + "whatsapp-chat-btn",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
        className: "jsx-3690235106" + " " + "fab fa-whatsapp"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3690235106",
      children: [".whatsapp-chat-btn.jsx-3690235106{position:fixed;bottom:30px;right:30px;width:60px;height:60px;background-color:#25d366;color:#fff;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:32px;box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:9999;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;border:2px solid #fff;}", ".whatsapp-chat-btn.jsx-3690235106:hover{-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);box-shadow:0 8px 16px rgba(0,0,0,0.2);background-color:#128c7e;color:#fff;}"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhatsAppChat);

/***/ }),

/***/ 3035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ScrollTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9796);
/* harmony import */ var _components_WhatsAppChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4347);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1939);
/* harmony import */ var _footers_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6766);
/* harmony import */ var _headers_HeadersLayouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_footers_Footer__WEBPACK_IMPORTED_MODULE_3__]);
_footers_Footer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Layouts = ({
  children,
  footer,
  headerTopbar,
  noNewsletters,
  position,
  noheader,
  noFooter
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .animation */ .oQ)();
    (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .niceSelect */ .ks)();
    (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .stickyNav */ .h4)();
    (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .progressBar */ .qT)();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [!noheader && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_headers_HeadersLayouts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      headerTopbar: headerTopbar,
      position: position
    }), children, !noFooter && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_footers_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      footer: footer,
      noNewsletters: noNewsletters
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_WhatsAppChat__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layouts);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5002);
/* harmony import */ var _Footer2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4409);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer1__WEBPACK_IMPORTED_MODULE_1__]);
_Footer1__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Footer = ({
  footer,
  noNewsletters
}) => {
  const getFooter = () => {
    switch (footer) {
      case 1:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Footer1__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          noNewsletters: noNewsletters
        });

      case 2:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Footer1__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          noNewsletters: noNewsletters
        });

      default:
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Footer1__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          noNewsletters: noNewsletters
        });
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: getFooter()
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1301);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_rscarelogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3183);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_fa__WEBPACK_IMPORTED_MODULE_2__]);
react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Footer1 = ({
  noNewsletters
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("footer", {
    className: `template-footer ${noNewsletters ? "" : "have-cta-boxed-one"}`,
    children: [!noNewsletters && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "cta-boxed-one",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "cta-inner bg-color-secondary bg-size-cover blend-mode-multiply",
          style: {
            backgroundImage: "url(assets/img/cta-img/consultation-cta.png)"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "row justify-content-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "col-xl-6 col-lg-8 col-md-10",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "cta-content text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "section-heading heading-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    className: "tagline",
                    children: "Get Free Consultations"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
                    className: "title",
                    children: "Looking a Doctors to Get Your Services"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: "cta-buttons d-flex justify-content-center flex-wrap",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/contact",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                        className: "template-btn template-btn-white",
                        children: ["Get Free Quote ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                          className: "far fa-plus"
                        })]
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      href: "tel:+917010768196",
                      className: "template-btn template-btn-bordered",
                      children: ["Get Appointment ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                        className: "far fa-plus"
                      })]
                    })
                  })]
                })]
              })
            })
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "footer-inner bg-color-grey",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "footer-widgets",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "col-lg-4 col-md-8",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "widget text-widget",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "footer-logo",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: _public_rscarelogo_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                        alt: "RS Care Foundation",
                        width: 70,
                        height: 70
                      })
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: "contact-list",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      href: "https://www.google.com/maps/search/?api=1&query=4/510F,+near+SAMAYAPURATHU+AMMAN+KOIL,+EAST,+Andavar+Nagar,+Namakkal,+Tamil+Nadu+637002",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                        className: "far fa-map-marker-alt"
                      }), "4/510F, near SAMAYAPURATHU AMMAN KOIL EAST, Andavar Nagar, Namakkal, Tamil Nadu 637002"]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      href: "#",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                        className: "far fa-map-marker-alt"
                      }), "4/167C, TRICHY ROAD,", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), " AVS COMPLEX, N Pudupatti", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), " Namakkal-637020"]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      href: "#",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                        className: "far fa-map-marker-alt"
                      }), "No. 167, Sundarraj Nagar 2nd Street, Near Sundara Vinayagar Alayam, Subramaniyapuram, Trichy - 20."]
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: "col-lg-8",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "col-lg-4 col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "widget nav-widget",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
                      className: "widget-title",
                      children: "Popular Services"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                      className: "nav-links",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          href: "#",
                          children: "Alcohol Detox"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          href: "#",
                          children: "Drug Rehab"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          href: "#",
                          children: "Counseling"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          href: "#",
                          children: "Family Therapy"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          href: "#",
                          children: "Relapse Prevention"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          href: "#",
                          children: "Dual Diagnosis"
                        })
                      })]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "col-lg-4 col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "widget nav-widget",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
                      className: "widget-title",
                      children: "Quick Links"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                      className: "nav-links",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/",
                          children: "Home"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/about",
                          children: "About Us"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/service",
                          children: "Our Services"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/gallery",
                          children: "Gallery"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/contact",
                          children: "Contact"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/privacy-policy",
                          children: "Privacy Policy"
                        })
                      })]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "col-lg-4 col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "widget text-widget",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
                      className: "widget-title",
                      children: "Contact Us"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                      className: "contact-list",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                          href: "mailto:ramamoorthy9999@gmail.com",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                            className: "far fa-envelope"
                          }), "ramamoorthy9999@gmail.com"]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                          href: "tel:7010768196",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                            className: "far fa-phone"
                          }), "+91-70107-68196"]
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                      className: "social-links d-flex align-items-center",
                      style: {
                        gap: "20px",
                        listStyle: "none",
                        padding: 0,
                        marginTop: "20px"
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          href: "#",
                          style: {
                            color: "inherit"
                          },
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFacebookF, {
                            size: 24
                          })
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          href: "#",
                          style: {
                            color: "inherit"
                          },
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaInstagram, {
                            size: 24
                          })
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          href: "#",
                          style: {
                            color: "inherit"
                          },
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaYoutube, {
                            size: 26
                          })
                        })
                      })]
                    })]
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "copyright-area",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            children: ["\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
              href: "#",
              children: "RS Care Foundation"
            }), ". All Rights Reserved"]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer1);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4409:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const Footer2 = ({
  noNewsletters
}) => {
  return /*#__PURE__*/_jsxs("footer", {
    className: `template-footer template-footer-white ${noNewsletters ? "" : "have-cta-boxes-two"}`,
    children: [!noNewsletters && /*#__PURE__*/_jsx("div", {
      className: "cta-boxes-wrapper",
      children: /*#__PURE__*/_jsx("div", {
        className: "container",
        children: /*#__PURE__*/_jsxs("div", {
          className: "row justify-content-center",
          children: [/*#__PURE__*/_jsx("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/_jsxs("div", {
              className: "cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30",
              style: {
                backgroundImage: "url(assets/img/cta-img/cta-boxed-2-1.jpg)"
              },
              children: [/*#__PURE__*/_jsx("h2", {
                className: "cta-title",
                children: "Looking a Doctors For Health Care"
              }), /*#__PURE__*/_jsxs("a", {
                href: "#",
                className: "template-btn template-btn-bordered",
                children: ["Find Doctor ", /*#__PURE__*/_jsx("i", {
                  className: "far fa-plus"
                })]
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/_jsxs("div", {
              className: "cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30",
              style: {
                backgroundImage: "url(assets/img/cta-img/cta-boxed-2-2.jpg)"
              },
              children: [/*#__PURE__*/_jsx("h2", {
                className: "cta-title",
                children: "Make Appointment Online (24/7)"
              }), /*#__PURE__*/_jsxs("a", {
                href: "tel:+917010768196",
                className: "template-btn template-btn-bordered",
                children: ["Appointment ", /*#__PURE__*/_jsx("i", {
                  className: "far fa-plus"
                })]
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-lg-4 col-md-8",
            children: /*#__PURE__*/_jsxs("div", {
              className: "cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30",
              style: {
                backgroundImage: "url(assets/img/cta-img/cta-boxed-2-3.jpg)"
              },
              children: [/*#__PURE__*/_jsx("h2", {
                className: "cta-title",
                children: "Innovative Psychial Therapist"
              }), /*#__PURE__*/_jsxs("a", {
                href: "#",
                className: "template-btn template-btn-bordered",
                children: ["Find Doctor ", /*#__PURE__*/_jsx("i", {
                  className: "far fa-plus"
                })]
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "footer-inner bg-color-primary",
      children: /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [/*#__PURE__*/_jsx("div", {
          className: "footer-widgets",
          children: /*#__PURE__*/_jsxs("div", {
            className: "row",
            children: [/*#__PURE__*/_jsx("div", {
              className: "col-lg-3 col-md-8",
              children: /*#__PURE__*/_jsxs("div", {
                className: "widget text-widget",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "footer-logo",
                  children: /*#__PURE__*/_jsx("img", {
                    src: "assets/img/logo-white-2.png",
                    alt: "Medibo"
                  })
                }), /*#__PURE__*/_jsx("p", {
                  children: "Sed ut perspi unde omniste natus error sit voluptatem acc doloremque laudantium"
                }), /*#__PURE__*/_jsxs("ul", {
                  className: "contact-list",
                  children: [/*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsxs("a", {
                      href: "https://www.google.com/maps/search/?api=1&query=4/510F,+near+SAMAYAPURATHU+AMMAN+KOIL,+EAST,+Andavar+Nagar,+Namakkal,+Tamil+Nadu+637002",
                      children: [/*#__PURE__*/_jsx("i", {
                        className: "far fa-map-marker-alt"
                      }), "4/510F, near SAMAYAPURATHU AMMAN KOIL, EAST, Andavar Nagar, Namakkal, Tamil Nadu 637002"]
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsxs("a", {
                      href: "mailto:ramamoorthy9999@gmail.com",
                      children: [/*#__PURE__*/_jsx("i", {
                        className: "far fa-envelope"
                      }), "ramamoorthy9999@gmail.com"]
                    })
                  }), /*#__PURE__*/_jsx("li", {
                    children: /*#__PURE__*/_jsxs("a", {
                      href: "tel:7010768196",
                      children: [/*#__PURE__*/_jsx("i", {
                        className: "far fa-phone"
                      }), "+91-70107-68196"]
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/_jsxs("div", {
                className: "row justify-content-center",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "col-xl-5 col-sm-6",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "d-flex justify-content-lg-center",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "widget nav-widget",
                      children: [/*#__PURE__*/_jsx("h4", {
                        className: "widget-title",
                        children: "Popular Services"
                      }), /*#__PURE__*/_jsxs("ul", {
                        className: "nav-links",
                        children: [/*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Alcohol Detox"
                          })
                        }), /*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Drug Rehab"
                          })
                        }), /*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Counseling"
                          })
                        }), /*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Family Therapy"
                          })
                        }), /*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Relapse Prevention"
                          })
                        }), /*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Dual Diagnosis"
                          })
                        })]
                      })]
                    })
                  })
                }), /*#__PURE__*/_jsx("div", {
                  className: "col-xl-5 col-sm-6",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "d-flex justify-content-lg-center",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "widget nav-widget",
                      children: [/*#__PURE__*/_jsx("h4", {
                        className: "widget-title",
                        children: "About Us"
                      }), /*#__PURE__*/_jsxs("ul", {
                        className: "nav-links",
                        children: [/*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Success Story"
                          })
                        }), /*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Need a Career ?"
                          })
                        }), /*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Privacy Policy"
                          })
                        }), /*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Need Support ?"
                          })
                        }), /*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Doctors"
                          })
                        }), /*#__PURE__*/_jsx("li", {
                          children: /*#__PURE__*/_jsx("a", {
                            href: "#",
                            children: "Latest News"
                          })
                        })]
                      })]
                    })
                  })
                })]
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "col-lg-3 col-md-10",
              children: /*#__PURE__*/_jsx("div", {
                className: "widget newsletters-widget",
                children: /*#__PURE__*/_jsxs("div", {
                  className: "opening-notice mt-30",
                  children: [/*#__PURE__*/_jsxs("h6", {
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "far fa-clock"
                    }), " Opening Hours"]
                  }), /*#__PURE__*/_jsx("p", {
                    children: "Sun - Friday, 08:00 am - 05:00 pm"
                  })]
                })
              })
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "copyright-area",
          children: /*#__PURE__*/_jsxs("p", {
            children: ["\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/_jsx("a", {
              href: "#",
              children: "RS Care Foundation"
            }), ". All Rights Reserved"]
          })
        })]
      })
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Footer2)));

/***/ }),

/***/ 6003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ headers_HeadersLayouts)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layouts/headers/MobileMenu.js






const MobileMenu = ({
  mobileTrigger,
  setMobileTrigger
}) => {
  const router = (0,router_.useRouter)();
  const activeMenu = router.pathname;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `slide-panel mobile-slide-panel ${mobileTrigger ? "show-panel" : ""}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "panel-overlay",
      onClick: () => setMobileTrigger()
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "panel-inner",
      children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: "mobile-menu",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "primary-menu",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: activeMenu === "/" ? "active" : "",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/",
              children: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: activeMenu === "/about" ? "active" : "",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/about",
              children: "About"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: activeMenu === "/service" ? "active" : "",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/service",
              children: "Services"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: activeMenu === "/gallery" ? "active" : "",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/gallery",
              children: "Our Gallery"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: activeMenu === "/contact" ? "active" : "",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/contact",
              children: "Contact"
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#",
        className: "panel-close",
        onClick: () => setMobileTrigger(),
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fal fa-times"
        })
      })]
    })]
  });
};

/* harmony default export */ const headers_MobileMenu = (MobileMenu);
;// CONCATENATED MODULE: ./src/layouts/headers/SlidePanel.js




const SlidePanel = ({
  sidebarTrigger,
  setSidebarTrigger
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `slide-panel off-canvas-panel ${sidebarTrigger ? "show-panel" : ""}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "panel-overlay",
      onClick: () => setSidebarTrigger()
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "panel-inner",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "canvas-logo",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/rscarelogo.png",
          alt: "RS Care Foundation"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "about-us",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
          className: "canvas-widget-title",
          children: "About Us"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "RS Care Foundation is dedicated to helping individuals overcome addiction and lead fulfilling lives through comprehensive rehabilitation and support."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "contact-us",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
          className: "canvas-widget-title",
          children: "Contact Us"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "far fa-map-marker-alt"
            }), "354 Oakridge, Camden NJ 08102 - USA"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "far fa-envelope-open"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "mailto:support@rscarefoundation.com",
              children: "support@rscarefoundation.com"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "mailto:info@rscarefoundation.com",
              children: "info@rscarefoundation.com"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "far fa-phone"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "tel:+01234567899",
              children: "+012 (345) 678 99"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "tel:+8563214",
              children: "+8563214"
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#",
        className: "panel-close",
        onClick: () => setSidebarTrigger(),
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fal fa-times"
        })
      })]
    })]
  });
};

/* harmony default export */ const headers_SlidePanel = (SlidePanel);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/rscarelogo.png
var rscarelogo = __webpack_require__(3183);
;// CONCATENATED MODULE: ./src/layouts/headers/Header1.js









const Header1 = ({
  headerTopbar,
  position
}) => {
  const {
    0: sidebarTrigger,
    1: setSidebarTrigger
  } = (0,external_react_.useState)(false);
  const {
    0: mobileTrigger,
    1: setMobileTrigger
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: `template-header sticky-header header-one ${position ? position + "-header" : ""}`,
    children: [headerTopbar && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "header-topbar d-none d-md-block",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-fluid container-1400",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row align-items-center justify-content-between",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "topbar-menu",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/faq",
                  children: "Faq"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/gallery",
                  children: "Gallery"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/about",
                  children: "About Us"
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "contact-info",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: "#",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "far fa-envelope"
                  }), " Email : hotmail@gmail.com"]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  href: "#",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "far fa-phone"
                  }), " Call US : +012 (345) 6789"]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "social-icons",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-facebook-f"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-twitter"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-youtube"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fab fa-linkedin-in"
                    })
                  })]
                })
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid container-1400",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header-navigation",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header-left",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "site-logo",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                style: {
                  display: "block"
                },
                children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                  src: rscarelogo/* default */.Z,
                  alt: "RS Care Foundation",
                  width: 60,
                  height: 60
                })
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header-center d-none d-xl-block",
          children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
            className: "site-menu menu-gap-left",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "primary-menu",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/",
                  children: "Home"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "about",
                  children: "About"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/service",
                  children: "Services"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/gallery",
                  children: "Our Gallery"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/contact",
                  children: "Contact"
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header-right",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "extra-icons",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "d-none d-xl-flex align-items-center",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "tel:7010768196",
                className: "template-btn",
                style: {
                  padding: "10px 25px",
                  fontSize: "16px",
                  backgroundColor: "transparent",
                  color: "#07294d",
                  border: "none"
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "far fa-phone",
                  style: {
                    marginRight: "10px"
                  }
                }), "+91-70107-68196"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "d-none d-xl-flex align-items-center",
              style: {
                marginLeft: "20px"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "tel:+917010768196",
                className: "template-btn",
                style: {
                  padding: "10px 25px",
                  fontSize: "16px",
                  backgroundColor: "#07294d",
                  color: "#ffffff",
                  border: "1px solid #07294d",
                  borderRadius: 0,
                  transition: "all 0.3s ease"
                },
                children: "Make an Appointment"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "d-xl-none",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                href: "#",
                className: "navbar-toggler",
                onClick: () => setMobileTrigger(true),
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(headers_SlidePanel, {
      sidebarTrigger: sidebarTrigger,
      setSidebarTrigger: () => setSidebarTrigger(false)
    }), /*#__PURE__*/jsx_runtime_.jsx(headers_MobileMenu, {
      mobileTrigger: mobileTrigger,
      setMobileTrigger: () => setMobileTrigger(false)
    })]
  });
};

/* harmony default export */ const headers_Header1 = (Header1);
;// CONCATENATED MODULE: ./src/layouts/headers/HeadersLayouts.js




const HeadersLayouts = ({
  headerTopbar,
  position
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(headers_Header1, {
      headerTopbar: headerTopbar,
      position: position
    })
  });
};

/* harmony default export */ const headers_HeadersLayouts = (HeadersLayouts);

/***/ }),

/***/ 1939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "ks": () => (/* binding */ niceSelect),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "qT": () => (/* binding */ progressBar)
/* harmony export */ });
/* unused harmony exports pagination, getPagination, scrollTopFun */
const animation = () => {
  if (false) {}

  new WOW.WOW().init();
};

const progressBar_ = () => {
  const progressBarLists = document.querySelectorAll(".progress-bar-wrapper");
  const triggerBottom = window.innerHeight / 5 * 5;

  if (progressBarLists) {
    progressBarLists.forEach(element => {
      let percentage = element.getAttribute("data-percentage"),
          progressLineWrap = element.getElementsByClassName("progress-line-wrap"),
          progressLine = element.getElementsByClassName("progress-line"),
          progressLineWidth = percentage + "%",
          progressLineBg = element.getAttribute("data-line-bg"),
          progressLineColor = element.getAttribute("data-line-color");
      progressLineWrap[0].style.backgroundColor = progressLineBg;
      progressLine[0].style.backgroundColor = progressLineColor;
      const progressTop = element.getBoundingClientRect().top;

      if (progressTop < triggerBottom) {
        progressLine[0].style.width = progressLineWidth;
      } else {
        progressLine[0].style.width = 0;
      }
    });
  }
};

const progressBar = () => window.addEventListener("scroll", progressBar_);
const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};
const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx) => idx + 1);
  return arr;
};
const niceSelect = () => {
  const select = document.querySelectorAll("select");
  select.forEach(element => {
    let option = element.querySelectorAll("option");

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    element.style.display = "none";
    var el = document.createElement("div");
    insertAfter(element, el);
    el.className = "nice-select wide";
    let ul = document.createElement("ul"),
        span = document.createElement("span");
    ul.classList.add("list");
    span.classList.add("current");
    el.appendChild(ul);
    el.appendChild(span);
    el.addEventListener("click", () => {
      el.classList.toggle("open");
    });
    document.addEventListener("click", e => {
      if (!el.contains(e.target)) {
        el.classList.remove("open");
      }
    });
    option.forEach(opt => {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = opt.innerText;
      li.className = "option";
      let defultValue = opt.getAttribute("data-dsplay");
      let selected = opt.getAttribute("selected");
      let disabled = opt.getAttribute("disabled");

      if (defultValue || selected !== null || disabled !== null) {
        li.className = "option focus";
        span.innerText = opt.innerText;
      } else {
        span.innerText = option[0].innerText;
      }

      li.addEventListener("click", () => {
        if (disabled == null) {
          span.innerHTML = opt.innerText;
        }
      });
    });
  });
};

const stickyNav_ = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll("header");

  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];

    if (sticky) {
      if (offset > 60) {
        sticky.classList.add("sticky-on");
      } else {
        sticky.classList.remove("sticky-on");
      }
    }
  }
};

const stickyNav = () => window.addEventListener("scroll", stickyNav_);
const scrollTopFun = () => {
  let scrollUp = document.getElementById("scroll-top"),
      lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    let st = window.scrollY;

    if (st > 110) {
      scrollUp.classList.add("active");
    } else {
      scrollUp.classList.remove("active");
    }
  });
};

/***/ }),

/***/ 3183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/rscarelogo.7ff776b5.png","height":2003,"width":2000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42mNYor+AiQEKbpimNd7TjWqG8U9k9DAygMAs4eVsUy1WFV8wKt572yVl6pzZO9e6H3zozQADM82Wp0yQXfd4F1uO22MGBs+0LbeWhe572McAA8cqG1Wu9pZsvVaU4f2GgcFs9t7KNYmHz3sxgMD3NZosIPrPJoaGr+vkL687pT9vzhmFk2sPK1oxwMDDGa38H+anarzaaOa55qSL0vVt6aqvZzQIMsCAEAcDT3GQr9jM0FSJbRGxSo2mrooMDAzsDDAgLiYpBeTrMUgwyDEwMCgxCLGb6KnICTMwMDAAAKtGS+uHIM5jAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ })

};
;