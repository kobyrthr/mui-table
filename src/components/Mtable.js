import { faker } from '@faker-js/faker';
import { DataGrid } from '@mui/x-data-grid';

let USERS = [];
let STATUSES =['Active','Pending','Blocked'];

for(let i=0;i<14;i++){
    USERS[i]={
        id:i+1,
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

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 200 },
    { field: 'jobTitle', headerName: 'Job Title',width: 200},
    { field: 'company', headerName: 'Company',width: 200},
    { field: 'status', headerName: 'Status',width: 200},
  ];



function MTable() {
    return(
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={USERS}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    )
}

export default MTable