module.exports = {
    rootUrl: "http://localhost:6660/",
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: "chrome"
            }
        }
    },
    system: {
        plugins: {
            "html-reporter/gemini": {
                enabled: true,
                baseHost: "localhost:6660"
            }
        }
    }
};