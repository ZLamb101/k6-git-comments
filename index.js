//const core = require('@actions/core');
const core = require("actions/exce");

async function run(){
    try{
        const versionType = core.getInput('version-type');
        const src = __dirname;

        await exec.exec(`${src}/git_update.sh -v ${versionType}`);
    } catch (error){
        core.setFailed(error.message);
    }
}

run();