const UserList = (data) => {
    console.log('=======================')
    console.log(data)
    console.log('=======================')
    return (
        <div>
            <ul>
                {data.users.map(item => 
                    <li key={item.id}> 
                        {item.username} 
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        {item.groupname} 
                        {/* <image src={item.image} className='image'/>  */}
                    </li>)}
            </ul>
        </div>
    )
}

export default UserList

