import React from "react";
import './usertable.css';

export default function Usertable({users}) {

    return (
        <div className="table">
            <table>
                <thread>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>date joined</th>
                    </tr>
                </thread>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.dateJoined}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
