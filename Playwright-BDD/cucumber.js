module.exports = {
    default:{
        requireModule:[
            "ts-node/register"
        ],
        require:[
             "src/test/steps/**/*.ts",
             "src/hooks/hooks.ts",
             "src/hooks/**/*.ts",
             "src/test/support/**/*.ts",
        ],
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths:[
            "src/test/features/**/*.feature"
        ],
        publishQuiet:true,
        dryRun: false,

        format:[
            "progress-bar",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html",
            "junit:reports/results.xml",
            "allure-cucumberjs/reporter"
        ]
    }
}