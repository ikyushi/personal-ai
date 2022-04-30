module.exports = {
    name: "help",
    desc: "Lists commands and their possible uses.",
    help(commandsList) {
        for (let i = 0; i < commandsList.length; i++) {
            console.log(commandsList[i].name + ": " + commandsList[i].desc);
        }
    }
}