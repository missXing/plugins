const pluginTester = require('babel-plugin-tester').default;
const path = require('path')

pluginTester({
    plugin: require('../index'),
    fixtures: path.join(__dirname, '__snapshots__'),
    pluginName: 'myPlugin',
    babelOptions: {
        parserOpts: {
            sourceType: 'unambiguous',
            plugins: ['jsx']
        }
    },
    tests: {
        'console.xx前插入了CallExpression的AST': {
            code: `
            console.log(1);
        
            function func() {
                console.info(2);
            }
        
            export default class Clazz {
                say() {
                    console.debug(3);
                }
                render() {
                    return <div>{console.error(4)}</div>
                }
            }
            `,
          snapshot: true,
        }
    }
})