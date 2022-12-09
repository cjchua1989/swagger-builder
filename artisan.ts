import yargs, { Arguments } from 'yargs';
import { SwaggerRequestTemplate } from './code_templates/SwaggerRequestTemplate';
import { SwaggerPathTemplate } from './code_templates/SwaggerPathTemplate';
import { SwaggerResponseTemplate } from './code_templates/SwaggerResponseTemplate';

const commands = yargs(process.argv.slice(2)).options({
    docs: { type: 'boolean', default: true, describe: 'Generate Swagger request, response & path' },
});

try {
    commands.command(
        'swagger:request <name>',
        'Create a swagger request definition file',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        (argv: Arguments) => {
            const template = new SwaggerRequestTemplate(<string>argv.name);
            template.generate();

            console.log('Swagger definition successfully created');
        },
    );

    commands.command(
        'swagger:response <name>',
        'Create a swagger response definition file',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        (argv: Arguments) => {
            const template = new SwaggerResponseTemplate(<string>argv.name);
            template.generate();

            console.log('Swagger definition successfully created');
        },
    );

    commands.command(
        'swagger:path <name>',
        'Create a swagger path file',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        (argv: Arguments) => {
            const template = new SwaggerPathTemplate(<string>argv.name);
            template.generate();

            console.log('Swagger path successfully created');
        },
    );

    commands.strictCommands();
    commands.argv;
} catch (error) {
    console.log(error.message);
}
