import { faker } from '@faker-js/faker';

let USERS = [];
let STATUSES =['Active','Pending','Blocked'];

for(let i=0;i<14;i++){
    USERS[i]={
        name:faker.name.fullName(),
        email:faker.internet.email(),
        phone:faker.phone.number('501-###-###'),
        jobTitle:faker.name.jobTitle(),
        company:faker.company.name(),
        joinDate:faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random()*STATUSES.length)]
    }
}
console.log(USERS)
function MTable() {
    return(
        'Table-x'
    )
}

export default MTable