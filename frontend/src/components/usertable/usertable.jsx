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
                    </tr>
                </thread>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
