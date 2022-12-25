export interface User {
	userName: string;
	pass: string;
	roleId?: string; 
}

export class UserConstructor {
	constructor(public userName: string = '', public pass: string = '', public roleId: string = ''){}
}
