export interface Message {
	_id: string,
	text: string,
	// Option to create a more specific Date type here
	createdAt: number,
	author: string 
}

export type AllMessages = Message [];