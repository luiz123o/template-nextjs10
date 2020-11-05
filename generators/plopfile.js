/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
module.exports = function(plop) {
    plop.setGenerator('component', {
        description: 'application component',

        // inquirer prompts
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name?'
        }],

        // actions to perform
        actions: [{
                type: 'add',
                path: '../src/stories/{{pascalCase name}}/{{lowerCase name}}.stories.tsx',
                templateFile: 'templates/stories.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/index.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/styles/components/{{pascalCase name}}/styles.ts',
                templateFile: 'templates/styles.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/test.tsx',
                templateFile: 'templates/test.tsx.hbs'
            }
        ]
    })
}