import { cliService } from "./services/cli";

const argv = process.argv.slice(2);

cliService(...argv).catch(err => {
    console.error("Error:", err);
    process.exit(1);
});