import React from "react"
import "./table.css"
import { titleCase } from 'title-case'
import { TablePagination, tablePaginationClasses as classes } from '@mui/base/TablePagination';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export default function Table({ data }) {
    const [page, setPage] = React.useState(0)
    const rowsPerPage = 8

    if (page > 0 && page*rowsPerPage > data.length) setPage(0)
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }
    return (
        <section className='table'>
            <table aria-label="newspapers">
                <thead>
                    <tr className='nohover'>
                        <th>Title</th>
                        <th>State</th>
                        <th>LCCN</th>
                    </tr>
                </thead>
                <tbody>
                {data.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage > data.length ? data.length : page*rowsPerPage+rowsPerPage)
                    .map((entry, key) => {
                        return (
                            <tr key={key} onClick={() => window.open(entry.url.slice(0, entry.url.length-5))}>
                                <td style={{width: '50%'}} title={entry.title}>{titleCase(entry.title.replace('.', '').split(' [')[0])}</td>
                                <td>{entry.state}</td>
                                <td>{entry.lccn}</td>
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
                            count={data.length}
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