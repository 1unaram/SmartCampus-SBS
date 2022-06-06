const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware(
            ['/submitComplain', '/loadComplain'], {
            target: "http://ec2-13-125-213-93.ap-northeast-2.compute.amazonaws.com:8080/",
            changeOrigin: true,
        })
    )
}