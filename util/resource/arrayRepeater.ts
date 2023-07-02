// repeat an item a number of times
export const repeat = (item: any, num: number) =>
	Array(num).fill(item).flat()
