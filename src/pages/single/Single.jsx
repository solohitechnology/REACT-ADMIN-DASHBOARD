import './single.scss'
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import Chart from '../../component/chart/Chart';
import List from '../../component/Table/Table';


const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editBotton">Edit</div>
                        <h1 className='title'>Information</h1>
                        <div className="item">
                            <img src="../../img/tech.png"
                                className='itemImg'
                                alt="" />
                            <div className="details">
                                <h1 className='ItemTitle'>Jon doe</h1>
                                <div className="datailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">Janedoe@gmail.com</span>
                                </div>
                                <div className="datailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+1 2342 34 23</span>
                                </div>
                                <div className="datailItem">
                                    <span className="itemKey">Adress:</span>
                                    <span className="itemValue">Elton st. 243 Garden Yd.Newyork</span>
                                </div>
                                <div className="datailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title={'user Spnding last (last 6 months)'} />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className='title'>Last Transactions</h1>
                    <List />
                </div>

            </div>
        </div>
    )
}

export default Single;