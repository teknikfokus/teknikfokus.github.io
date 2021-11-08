export const Event = {
    title: String,
    description: String,
    date: {
        day: Number,
        month: Number
    },
    time: {
        start: {
        hour: Number,
        minute: Number
        },
        end: {
        hour: Number,
        minute: Number
        }
    },
    spots: {
        available: Number,
        max: Number
    },
    signedUp: Boolean,
    banner: String
}

export const OpenHours = {
    date: {
        day: Number,
        month: Number,
        year: Number,
    },
    time: {
        start: {
        hour: Number,
        minute: Number
        },
        end: {
        hour: Number,
        minute: Number
        }
    },
}