module.exports = {
    default:{
        requireModule:[
            "ts-node/register"
        ],
        require:[
            "src/test/world/customworld.ts",
            "src/test/step-definition/**/*.ts",
             "src/test/hooks/Hooks.ts"
        ],
        formatOptions: {
            snippetInterface: "async-await",
            resultsDir: "reports/allure-results"
        },
        // paths:[
        //     "src/test/features/**/*.feature"
        // ],
        dryRun: false,
        
        format:[
            "progress",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html",
            "allure-cucumberjs/reporter"
        ]
        
    }
}