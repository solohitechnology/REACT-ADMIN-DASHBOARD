import './table.scss';
import {
    Table, TableBody,
    TableContainer,
    TableCell, TableHead,
    TableRow, Paper
} from '@mui/material';

const List = () => {

    const row = [
        {
            id: 1143155,
            product: 'Acer Nitro',
            img: 'https://m.media-amazon.com.images/I/81bc8ma3nKL._Ac_UY327_FMwebp_QL65_.jpg',
            costormer: 'John Solomon',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Approved',
        },
        {
            id: 2235235,
            product: 'Playstation 5',
            img: 'https://m.media-amazon.com.images/I/31JaiPXYIBL._Ac_UY327_FMwebp_QL65_.jpg',
            costormer: 'John smith',
            date: '1 March',
            amount: 900,
            method: 'Cash on Delivery',
            status: 'pendding',
        },
        {
            id: 2235235,
            product: 'Playstation 5',
            img: 'https://m.media-amazon.com.images/I/31JaiPXYIBL._Ac_UY327_FMwebp_QL65_.jpg',
            costormer: 'Paul Smith',
            date: '1 March',
            amount: 900,
            method: 'Cash on Delivery',
            status: 'pendding',
        },
        {
            id: 1143155,
            product: 'Razer Blade 15',
            img: 'https://m.media-amazon.com.images/I/71wF7YDIQkl._Ac_UY327_FMwebp_QL65_.jpg',
            costormer: 'John Smith',
            date: '1 March',
            amount: 920,
            method: 'Online',
            status: 'Approved',
        },
        {
            id: 1143155,
            product: 'Acer Nitro',
            img: 'https://m.media-amazon.com.images/I/81hH5vK-MCL._Ac_UY327_FMwebp_QL65_.jpg',
            costormer: 'Harold carol',
            date: '1 March',
            amount: 2000,
            method: 'Cash on Delivery',
            status: 'pendding',
        },
    ];
    return <TableContainer component={Paper} className='table'>
        <Table sx={{ minWith: 650 }} aria-label='simple Table'>
            <TableHead>
                <TableRow>
                    <TableCell className='tableCells'>Tracking ID</TableCell>
                    <TableCell className='tableCells'>Product</TableCell>
                    <TableCell className='tableCells'>Costormer</TableCell>
                    <TableCell className='tableCells'>Date</TableCell>
                    <TableCell className='tableCells'>Amount</TableCell>
                    <TableCell className='tableCells'>Pament Method</TableCell>
                    <TableCell className='tableCells'>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {row.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell className='tableCells' > {row.id} </TableCell>
                        <TableCell className='tableCells' >
                            <div className="cellWraper">
                                <img src={row.img} alt=""  className='image' />
                                {row.product}
                            </div>
                        </TableCell>
                        <TableCell className='tableCells' >{row.costormer}</TableCell>
                        <TableCell className='tableCells' >{row.date}</TableCell>
                        <TableCell className='tableCells' >{row.amount}</TableCell>
                        <TableCell className='tableCells' >{row.method}</TableCell>
                        <TableCell className='tableCells' >
                            <span className={`status ${row.status}`}>{row.status}</span>
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
};

export default List;