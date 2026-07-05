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
           
        ]
    }
}