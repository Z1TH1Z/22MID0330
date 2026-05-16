export function Log(stack, level, pkg, message) {
    const logData = {
        stack,
        level,
        package: pkg,
        message,
        timestamp: new Date()
    }

    console.log(logData)
}