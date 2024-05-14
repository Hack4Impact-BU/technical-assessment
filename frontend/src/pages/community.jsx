import React from 'react'
import './community.css'
import "../components/table/table.css"
import Title from '../components/title/title'
import { TablePagination, tablePaginationClasses as classes } from '@mui/base/TablePagination';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useState, useEffect } from 'react'

function Community() {
    const [community, setCommunity] = useState([])
    const [page, setPage] = useState(0)
    const rowsPerPage = 8

    useEffect(() => {
        fetch('https://our-republic-b13c5c1798c4.herokuapp.com/community')
            .then(res => res.json())
            .then(community => {
                let newCommunity = []
                for (let i = 0; i < community.length; i++)
                    newCommunity.push(community[i])
                setCommunity(newCommunity)
            })
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }
    return (
        <>
            <Title />
            <h1 className='community first'>Our Community</h1>
            <p className='community'>The names and emails of the members of our community can be viewed in the following table. If you would like to join, enter your information in the boxes at the bottom of the home page.</p>
            <section className='table'>
                <table aria-label='community'>
                    <thead>
                        <tr className='nohover'>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {community.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage > community.length ? community.length : page * rowsPerPage + rowsPerPage)
                            .map((entry, key) => {
                                return (
                                    <tr key={key} className='community'>
                                        <td className='community'>{entry.first}</td>
                                        <td className='community'>{entry.last}</td>
                                        <td className='community'>{entry.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr className='nohover nocenter'>
                            <TablePagination
                                className='pagination'
                                colSpan={3}
                                count={community.length}
                                rowsPerPage={rowsPerPage}
                                rowsPerPageOptions={[]}
                                page={page}
                                slotProps={{
                                    actions: {
                                        showFirstButton: true,
                                        showLastButton: true,
                                        slots: {
                                            firstPageIcon: FirstPageRoundedIcon,
                                            lastPageIcon: LastPageRoundedIcon,
                                            nextPageIcon: ChevronRightRoundedIcon,
                                            backPageIcon: ChevronLeftRoundedIcon,
                                        },
                                    },
                                }}
                                onPageChange={handleChangePage}
                            />
                        </tr>
                    </tfoot>
                </table>
                <Styles />
            </section>
        </>
    )
}

function Styles() {
    return (
        <style>
            {`
            .pagination .${classes.spacer} {
                display: none;
            }
            .pagination .${classes.toolbar} {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
                float: right;
                margin-top: -1.2rem;
                margin-bottom: -1.2rem;
            }
            .pagination button {
                transition: background-color 0.4s;
            }
            .pagination .${classes.actions} > button:not([disabled]):hover {
                background-color: #333;
                color: #f2f2f2;
                cursor: pointer;
            }
            .pagination .${classes.actions} >button:disabled {
                border-color: #888;
            }
            `}
        </style>
    )
}

export default Community