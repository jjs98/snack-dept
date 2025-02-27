module.exports = {
  "/api": {
    "target": process.env["services__apiservice__https_0"] || process.env["services__apiservice__http_0"],
    "secure": process.env["NODE_ENV"] !== "development",
    "pathRewrite": {
      "^/api": ""
    }
  }
}
