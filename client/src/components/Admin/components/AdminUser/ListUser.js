import React from 'react';
import User from './User';


function ListUser(props) {
    const {users} = props

    return (
        <div className="admin-user-list">
            <table>
                <tr>
                    <th></th>
                    <th>Tên Khách hàng</th>
                    <th>Email</th>
            
               
                </tr>
                {
                    users.map((item, index) => (<User user={item} number={index}></User>))
                }
            </table>
        </div>
    );
}

export default ListUser;