const notifications = [
    {
        id: 1,
        type: "Placement",
        timestamp: "2025-05-15"
    },
    {
        id: 2,
        type: "Event",
        timestamp: "2025-05-14"
    },
    {
        id: 3,
        type: "Result",
        timestamp: "2025-05-16"
    }
]

function getPriority(type) {
    if (type === "Placement") return 3
    if (type === "Result") return 2
    return 1
}

notifications.sort((a, b) => {
    return getPriority(b.type) - getPriority(a.type)
})

console.log(notifications)