module.exports = {
    default: {
        requireModule: [
            "ts-node/register"
        ],
        require: [
            "src/hooks/**/*.ts",
            "src/test/steps/**/*.ts"
            
        ],
        "formatOptions":{
            "snippetInterface": "async-await"
        },
        // paths: [
        //     "src/test/features/**/*.feature"
        // ],
        publishQuiet: true,
        dryRun: false,

        format: [
            "progress-bar",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report-HTML.html"
        ]
    }
};