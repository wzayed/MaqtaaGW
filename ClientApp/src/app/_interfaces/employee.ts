export interface employee{       
                idemployee: number;
                empnumber: string;
                firstname: string;
                lastname: string;
                arabicfullname: string;
                empemail : string;
                gender?: number;
                salary?: number;
                birthdate?:Date ;
                dateJoin?: Date;
                description?: string,
                password?: string,
                passwordsalt?: string,
                idjob: number
              }