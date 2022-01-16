import convict from 'convict';
import convictFormatWithValidator from 'convict-format-with-validator';
convict.addFormat(convictFormatWithValidator.ipaddress);

// Define a schema
export const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  }
});

// Load environment dependent configuration
const env = config.get('env');
config.loadFile('./config/' + env + '.json');

// Perform validation
config.validate({ allowed: 'strict' });
