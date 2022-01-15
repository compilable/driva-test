

export const toObject = (data: any) => {
    if (data) {
        return JSON.parse(JSON.stringify(data, (key, value) =>
            typeof value === 'bigint'
                ? value.toString()
                : value
        ))
    }
    return {}

}// fix for BigInt transformation : https://github.com/GoogleChromeLabs/jsbi/issues/30