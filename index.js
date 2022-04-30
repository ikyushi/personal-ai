const fs = require('fs');
const { prompt } = require('prompt');

commandList = []

// Get commands from files
const commandFiles = fs.readdirSync('./files/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./files/${file}`);
    commandList.push(command);
}

console.log("Loaded " + commandList.length + " commands!");
console.log("Commands loaded: " + commandList);

while (true) {
    const input = prompt({
        properties: {
            command: {
                description: '',
                required: true
            }
        }
    });
    const command = input.command;
    const commandFound = commandList.find(c => c.triggers.includes(command));
    if (commandFound) {
        commandFound.function(async => {
            console.log(commandFound.name + ": " + commandFound.desc);
        });
    } else {
        console.log("Command not found!");
    }

    for (const command of commandList) {
        if (input.startsWith(command.name)) {
            command.function(input);
        }
    }
}