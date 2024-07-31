


export function testStringMatch(first: string, second: string) {
    return !!first.toLowerCase().match(second.toLowerCase())
}